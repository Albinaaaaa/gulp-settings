// Main module
import gulp from "gulp";
// ways (paths)
import { path } from "./gulp/config/path.js";

// pass value into global variable where we will save all (ways and main module)
global.app = {
  path: path,
  gulp: gulp,
};

// import the task
import { copy } from "./gulp/tasks/copy.js";

// performing the scenery by default
gulp.task("default", copy);
