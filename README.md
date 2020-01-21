# Webpack-EJS-Boilerplate
Webpack static boilerplate, with EJS + SCSS

## Commend

Use `npm i` installation.

Use `npm run dev` to run in localhost.

Use `npm run build` to package static HTML page.

## EJS Layout

Common component like `<header>` & `<footer>` in the `include` folder.

Use `<%- include('./include/_header') %>` put them on page that you want.

The `.ejs` out of `include` folder will be independent HTML page.

## SCSS

Every independent `.scss` need to be imported in `index.js`.

Such as:
```no-highlight
import './css/style.scss';
import './css/icomoon.scss';
```
You can also import `.scss` to another `.scss` file, and only import one `.scss` to `index.js`.

## Assets

### images

### fonts