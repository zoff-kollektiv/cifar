// eslint-disable-next-line import/no-extraneous-dependencies
const empty = require('empty-folder');
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const camelCase = require('camelcase');
// eslint-disable-next-line import/no-extraneous-dependencies
const csv = require('csv-parser');
const slugify = require('slugify');

const MARKDOWN_PATH = './data/persons/markdown';
const BASE_PATH = './data/persons/csv';

const readCsvFiles = path =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      }

      resolve(files);
    });
  });

const readCsvFile = fileName =>
  new Promise((resolve, reject) => {
    const persons = [];

    fs.createReadStream(`${BASE_PATH}/${fileName}`)
      .pipe(csv())
      .on('data', person => {
        try {
          persons.push(person);
        } catch (err) {
          reject(err);
        }
      })
      .on('end', () => {
        resolve(persons);
      });
  });

const preparePersons = country =>
  country.map(person => {
    const keys = Object.keys(person);
    const newPerson = {};
    const omitKeys = ['sanctionsCountry'];

    keys.forEach(key => {
      const newKey = camelCase(key)
        .replace(':', '')
        .replace('(', '')
        .replace(')', '');

      switch (newKey) {
        case 'aliases':
          newPerson[newKey] = person[key]
            .split(',')
            .map(alias => alias.trimStart().trimEnd());
          break;

        default:
          if (!omitKeys.includes(newKey)) {
            newPerson[newKey] = person[key];
          }
      }
    });

    return newPerson;
  });

const storePerson = person => {
  const frontmatter = '---';
  const personString = Object.keys(person)
    .filter(key => key !== 'story')
    .reduce((acc, current) => {
      const value = person[current];

      // eslint-disable-next-line no-param-reassign
      acc += `${current}: ${value}\n`;
      return acc;
    }, '');

  const { fullName, story } = person;

  const personMarkdown = `${frontmatter}\n${personString}\n${frontmatter}\n${story}`;

  if (fullName) {
    const fileName = `${slugify(fullName, { lower: true })}.md`;

    return empty(MARKDOWN_PATH, false, () => {
      fs.writeFile(`${MARKDOWN_PATH}/${fileName}`, personMarkdown, () => {});
    });
  }

  return null;
};

readCsvFiles(BASE_PATH)
  .then(files => Promise.all(files.map(fileName => readCsvFile(fileName))))
  .then(countries => countries.map(country => preparePersons(country)))
  .then(countries => countries.flat())
  .then(persons => persons.map(person => storePerson(person)))
  // eslint-disable-next-line no-console
  .then(persons => console.log(`Done. Processed ${persons.length} persons.`));
