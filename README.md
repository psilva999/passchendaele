# Passchendaele
The Third Battle of Ypres in the first World War

Site: https://psilva999.github.io/passchendaele/

## Technologies

* Figma
* React
* JavaScript

* HTML
* CSS
* SCSS

## What i applied in the project:

* Responsive Design
* Scroll Effect
* Scroll Reveal
* Slide
* Timeline
* Debounce
* Regex E-mail

### `vite`:
___
`npm init vite`

`cd nome-app`

`npm install`

`npm run dev`

### ...
`npm i react-scroll`

## Github-page

--Create a remote repo

0 - git remote remove origin

1 - git init

2 - git add .

3 - git commit -m 'config github-page'

4 - git branch -M main

<-- 5 - git remote add origin https://link-from-git-repo -->

6 - git push -u origin main

--Change vite.config.js

1 - open vite.config.js
2 - export default defineConfig:

export default defineConfig({
  base: '/name-site/',
  plugins: [framework()]
})

___

0 - npm run build

1 - git add dist -f

2 - git commit -m 'github-page on'

3 - git subtree push --prefix dist origin gh-pages
