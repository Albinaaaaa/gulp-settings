# Gulp

[https://www.youtube.com/watch?v=jU88mLuLWlk&ab_channel=Фрілансерпожиттю](https://www.youtube.com/watch?v=jU88mLuLWlk&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E)

**Open git bash** *Ctrl + Shift + ~*

**Create package.json**
_package.json_ - main file that contains settings and information about installed pakets
*npm init*

firsly asked about name of folder

**Install gulp globally**

npm i gulp-cli -g

**Install gulp locally**
(need for every project)
npm i gulp -D

***File structure***

1. Create main file of scenery *gulpfile.js*
2. Create folder where we will to work *src*
3. Create folder-helper *gulp*
4. Inside folder gulp we create two folders *config(setting files - path.js(ways), plagins.js(information about common plugins), ftp.js(settings for loading the result on ftp server))* and *tasks*

***Set up the ways(paths) inside** path.js*

***Add watcher, that does all automatically***

- Add path into object *path* in *watch*
- create function *watcher*

***Add automatic deleter***

- create new file in folder *tasks* named as *reset.js*
- install plugin *del ‘npm i -D del’*

***Handling html files***

- add to object *path* in src *html: `${srcFolder}/*.html`,*
- add to object *path in* build *html: `${buildFolder}/`,*
- add to object *path* in watch *html: `${srcFolder}/**/*.html`,*
- command *npm i -D gulp-file-include*

***Image*** ***settings***

***Local server and Auto reload***

***SCSS to CSS***

***Handling JavaScript files***

***Formatting images***

***Converting ang handling the fonts***

***Creating svg sprites***

***The files that we need onto the all projects***

folder - *gulp, src*

file - *gulpfile.js, package.json* 

and open the new project in Visual Studio and write on the terminal *npm i*
