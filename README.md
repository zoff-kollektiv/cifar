# Cifar - sanctions watch

## Structure

If you only want to update some content displayed, have a look into the `data`
directory, as if contains most of the displayed texts.

- `data/` Contains all data displayed on the website
- `data/countries` Contains all country relevant data
- `data/home` Contains all the content displayed in the blocks of the homepage
- `data/pages` Contains the about and report page
- `data/people` Contains the import of all persons from the google sheet
- `data/translations` Contains the translations of the people keys

General site data, such as the twitter/ facebook link or the page title is
located in `gatsby-config.js`.

### Report

The report (located in `data/pages/report.md`) is capable of rendering
footnotes, which doesn't follow a markdown standard. In order to add a footnote
you have to use:

```md
Lorem ipsum dolor. ##Footnote Text##
```

The footnote text can contain markdown, to e.g. render links.

```md
Lorem ipsum dolor. ##Footnote Text with [link](http://sanctionswatch.cifar.eu).##
```

### Images

Portraits of the people under sanctions are stored in `static/media`. The
filenames always have to start with the ID of the person and have to be at least
600px wide.

`avatar.png` is the fallback, which is displayed if a person doesn't have an image.


## Development

```
npm run develop
```

You can manually lint all `js` and `jsx` files by running `npm run lint`. Before
each commit, all staged files are linted automatically.

### Release process

This project follows `git-flow`.

1. Create a release branch from `develop` and name it `release/[version]`.
2. Create PR, wait for builds to be green.
3. Merge `release/[version]` into master.
4. `git tag [version]`
5. `git push --tags`
6. Update release description on github
7. Merge `master` into `develop`

## Production build

```
npm run build
```

## Import people

All people are currently fetched from a google spreadsheet. To re-import the data
run `node scripts/import-persons.js` and commit the updated markdown files.

The import will omit the following values: `Unknown`, `Unkown`, `.`. All column
headers will be transformed into a proper key. The original translation is
stored in `data/translations/columns.json`.
