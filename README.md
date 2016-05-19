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

Use content from ./HEROKU/app/
 
#### Config Variables (process.env)

MODE = 'production'
PARTICIPANTS_URL = ''
TWITTER_CONSUMER_KEY = ''
TWITTER_CONSUMER_SECRET = ''
TWITTER_ACCESS_TOKEN = ''
TWITTER_ACCESS_TOKEN_SECRET = ''
HASH_TAGS = 'nodeschooldaycr16'
