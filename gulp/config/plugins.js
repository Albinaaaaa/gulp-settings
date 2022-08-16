import replace from "gulp-replace"; // search and replace
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
};
