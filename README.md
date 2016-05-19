```sh
# uninstall previous Gulp installation, if any
npm uninstall gulp -g

# install the latest Gulp 4 CLI tools globally
npm install gulpjs/gulp-cli -g

# check the versions installed
gulp -v

npm install -g bower nodemon pug stylus
npm install
bower install

# run the project
gulp
```

## Deploy

```sh
gulp buildHeroku
```

Use ./HEROKU/app/
 
#### Config Variables (process.env)

MODE = production
