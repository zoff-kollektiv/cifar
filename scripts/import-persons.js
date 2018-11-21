/* eslint-disable import/no-extraneous-dependencies */

const empty = require('empty-folder');
const fs = require('fs');
const camelCase = require('camelcase');
const csv = require('csv-parse/lib/sync');
const fetch = require('node-fetch');
const slugify = require('slugify');
const yaml = require('js-yaml');

const MARKDOWN_PATH = './data/persons';
const FAMILY_MEMBER_REGEX = new RegExp('^[^-]*');

const spreadsheetUrl =
  'https://docs.google.com/spreadsheets/d/1--Oftcd3_k3jp4xz5fhL1LCkOSjyjUWbSZa_xk38lLo/export?format=csv&id=1--Oftcd3_k3jp4xz5fhL1LCkOSjyjUWbSZa_xk38lLo&gid=';

const csvSheets = {
  Egypt: '1843456233',
  Tunisia: '1008588264',
  Ukraine: '1002256294'
};

const readCsvFiles = files =>
  Object.keys(files).map(name => {
    const id = csvSheets[name];
    const url = spreadsheetUrl + id;

    // eslint-disable-next-line no-console
    console.log('Fetch: ', url);

    return fetch(url)
      .then(res => res.text())
      .then(data =>
        csv(data, {
          cast: true,
          columns: true,
          trim: true
        })
      );
  });

const preparePersons = country =>
  country.map(person => {
    const keys = Object.keys(person);
    const newPerson = {};

    keys.forEach(key => {
      const newKey = camelCase(key)
        .replace(':', '')
        .replace('(', '')
        .replace(')', '');

      switch (newKey) {
        case 'aliases':
          if (person[key] && person[key] !== 'Unknown') {
            newPerson[newKey] = person[key]
              .split(',')
              .map(alias => alias.trimStart().trimEnd());
          } else {
            newPerson[newKey] = [];
          }
          break;

        case 'familyMembers':
        case 'familyMembersSubjectToSanctions':
          if (person[key] && person[key].length > 1) {
            newPerson[newKey] = person[key].split(',').map(name => {
              const cleanName = name
                .match(FAMILY_MEMBER_REGEX)[0]
                .trimStart()
                .trimEnd();
              return cleanName && cleanName.length > 1 && cleanName;
            });
          } else {
            newPerson[newKey] = [];
          }
          break;

        case 'estimatesOfAssetsReturned':
          newPerson[newKey] = person[key].toString();
          break;

        default:
          if (person[key] === 'Unknown' || person[key] === 'Unkown') {
            newPerson[newKey] = '';
          } else {
            newPerson[newKey] = person[key];
          }
      }
    });

    return newPerson;
  });

const storePerson = person => {
  const { fullName } = person;
  const frontmatter = yaml.safeDump(person);
  const output = `---\n${frontmatter}\n---`;

  if (fullName) {
    const fileName = `${slugify(fullName, { lower: true })}.md`;

    return empty(MARKDOWN_PATH, false, () => {
      fs.writeFile(`${MARKDOWN_PATH}/${fileName}`, output, () => {});
    });
  }

  return null;
};

Promise.all(readCsvFiles(csvSheets))
  .then(countries => countries.map(country => preparePersons(country)))
  .then(countries => countries.flat())
  .then(persons => persons.map(person => storePerson(person)))
  // eslint-disable-next-line no-console
  .then(persons => console.log(`Done. Processed ${persons.length} persons.`));
