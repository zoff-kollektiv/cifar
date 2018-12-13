/* eslint-disable import/no-extraneous-dependencies */

const empty = require('empty-folder');
const fs = require('fs');
const camelCase = require('camelcase');
const csv = require('csv-parse/lib/sync');
const fetch = require('node-fetch');
const slugify = require('slugify');
const yaml = require('js-yaml');
const wrap = require('word-wrap');

const TRANSLATION_PATH = './data/translations';
const MARKDOWN_PATH = './data/people';
const FAMILY_MEMBER_REGEX = new RegExp('^[^-]*');
const TRANSLATIONS = {};

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
    const omitValues = ['Unknown', 'Unkown', '.'];

    const normalizeValue = value => {
      if (typeof value !== 'string') {
        return value;
      }

      let newVal = value;

      // Remove spaces between markdown link text and URL
      newVal = newVal.replace(/]\s\(/gm, '](', newVal);

      return newVal;
    };

    keys.forEach(key => {
      const newKey = camelCase(key)
        .replace(':', '')
        .replace('(', '')
        .replace(')', '');

      // do not store empty columns
      if (!newKey) {
        return;
      }

      // store the mapping
      TRANSLATIONS[newKey] = key;

      switch (newKey) {
        case 'aliases':
          if (person[key] && !omitValues.includes(person[key])) {
            newPerson[newKey] = person[key]
              .split(',')
              .map(alias => alias.trimStart().trimEnd())
              .map(alias => alias.split('/'))
              .flat()
              .map(alias => alias.trimStart().trimEnd())
              .filter(Boolean);
          } else {
            newPerson[newKey] = [];
          }
          break;

        case 'familyMembers':
        case 'familyMembersSubjectToSanctions':
          if (person[key] && person[key].length > 1) {
            newPerson[newKey] = person[key]
              .split(',')
              .map(name => {
                const cleanName = name
                  .match(FAMILY_MEMBER_REGEX)[0]
                  .trimStart()
                  .trimEnd();
                return cleanName && cleanName.length > 1 && cleanName;
              })
              .filter(Boolean);
          } else {
            newPerson[newKey] = [];
          }
          break;

        case 'estimatesOfAssetsReturned':
          newPerson[newKey] = person[key].toString();
          break;

        default:
          if (omitValues.includes(person[key])) {
            newPerson[newKey] = '';
          } else {
            newPerson[newKey] = normalizeValue(person[key]);
          }
      }
    });

    return newPerson;
  });

const storePerson = person => {
  const { id, name, story, ...rest } = person;
  const frontmatter = yaml.safeDump({ id, name, ...rest });
  const output = `---\n${frontmatter}---\n${wrap(story, {
    indent: '',
    width: 80
  })}\n`;

  if (name) {
    const fileName = `${slugify(`${id}-${name}`, { lower: true })}.md`;

    return empty(MARKDOWN_PATH, false, () => {
      fs.writeFile(`${MARKDOWN_PATH}/${fileName}`, output, () => {});
    });
  }

  return null;
};

const storeTranslations = () => {
  const json = JSON.stringify(TRANSLATIONS, null, 2);

  fs.writeFile(`${TRANSLATION_PATH}/columns.json`, json, () => {});
};

Promise.all(readCsvFiles(csvSheets))
  .then(countries => countries.map(country => preparePersons(country)))
  .then(countries => countries.flat())
  .then(persons => persons.map(person => storePerson(person)))
  // eslint-disable-next-line no-console
  .then(persons => console.log(`Done. Processed ${persons.length} persons.`))
  .then(() => storeTranslations());
