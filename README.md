# Cifar Sanctions


## Structure

If you only want to update some content displayed, have a look into the `data`
directory, as if contains most of the displayed texts.

- `data/` Contains all data displayed on the website
- `data/countries` Contains all country relevant data
- `data/home` Contains all the content displayed in the blocks of the homepage
- `data/pages` Contains the about and report page
- `data/people` Contains the import of all persons from the google sheet
- `data/translations` Contains the translations of the people keys

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

## Production build

```
npm run build
```
