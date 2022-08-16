// Main module
import gulp from "gulp";
// ways (paths)
import { path } from "./gulp/config/path.js";
// common plugins
import { plugins } from "./gulp/config/plugins.js";

// pass value into global variable where we will save all (ways and main module)
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// import the task
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

// watcher for the changes in files
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

// scenery building execution tasks
const dev = gulp.series(reset, mainTasks, copy, watcher);

// performing the scenery by default
gulp.task("default", dev);
