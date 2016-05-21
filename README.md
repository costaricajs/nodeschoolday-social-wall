# nodeschoolday-social-wall

CI Build Status [![Circle CI](https://circleci.com/gh/CostaRicaJS/nodeschoolday-social-wall/tree/master.svg?style=svg&circle-token=3f84eb5ac673dff7cb9ee2b31b209bf69df45d01)](https://circleci.com/gh/CostaRicaJS/nodeschoolday-social-wall/tree/master)  

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


APP_SECRET = 'nodeschooldaycr16'


PARTICIPANTS_URL = ''


TWITTER_CONSUMER_KEY = ''


TWITTER_CONSUMER_SECRET = ''


TWITTER_ACCESS_TOKEN = ''


TWITTER_ACCESS_TOKEN_SECRET = ''


HASH_TAGS = 'nodeschooldaycr16'


YOUTUBE_KEY = '',


BASE_URL = ''

INSTAGRAM_CLIENT_ID = ''


INSTAGRAM_CLIENT_SECRET = ''


INSTAGRAM_VERIFY_TOKEN = ''

INSTAGRAM_FETCH_INTERVAL = 180000 // 3 min
