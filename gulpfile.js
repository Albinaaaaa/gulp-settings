// Main module
import gulp from "gulp";
// ways (paths)
import { path } from "./gulp/config/path.js";
// common plugins
import { plugins } from "./gulp/config/plugins.js";

// pass value into global variable where we will save all (ways and main module)
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// import the task
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

// watcher for the changes in files
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html); // gulp.series(html, ftp (replase the 'html'))
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

export { svgSprive };

// serial font processing
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// main tasks
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images)
);

// scenery building execution tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// export the scenery
export { dev };
export { build };
export { deployZIP };
export { deployFTP };

// performing the scenery by default
gulp.task("default", dev);
