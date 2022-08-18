// Get the name of folder project
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve()); // get name of project

const buildFolder = "./dist"; // path for folder with result // also we can use rootFolder
const srcFolder = "./src"; // path for folder with sources

// all information about the path specific file or folder
export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts`,
    files: `${buildFolder}/files/`,
  }, // result
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  }, // original
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg, jpeg, png, svg, gif, ico, webp}`,
    files: `${srcFolder}/files/**/*.*`,
  }, // folders and files need to watch for gulp
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test`,
};
