# nodeschoolday-social-wall

## Quick start

  - Install node >= 6.x
  - Install gulp, bower, nodemon, pug
  - Install dependencies
  - Run gulp

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
 
#### Config Variables (process.env)

MODE = production
