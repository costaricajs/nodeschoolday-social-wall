'use strict';


let notificationsChannel;
const Twitter = require('twit');
const request = require('request');
let stream;
let twitter;
let youtubeKey;
let managers;

let hashTags = process.env.HASHTAGS ? process.env.HASHTAGS.split(',') : ['javascript', 'nodejs'];
let youtubeKeywords = hashTags.join('|');

const api = 'https://api.instagram.com/v1/subscriptions/';

function setupInstagramSubscriptions(options) {

  const params = {
    client_id: options.client_id,
    client_secret: options.client_secret,
    verify_token: options.verify_token,
    object: 'tag',
    aspect: 'media',
    object_id: hashTags[0],
    callback_url: options.base + '/publish/photo'
  };

  request.post(
    {
      url: api,
      form: params
    },
    (err, response, body) => {
      if (err) {
        console.log('Failed to subscribe:', err);
      }
      else {
        console.log('Successfully subscribed.');
      }
    });
}

function setupNotificationsChannel() {

  notificationsChannel.on('connection', (socket)=> {

    console.log(' *** onConnection to ---> ', 'notification Id: ', socket.id);

    socket.emit('identification',
      {
        status: 'ok',
        type: 'identification',
        id: socket.id
      }
    );

    socket.on('disconnect', function () {

      console.log(' *** onDisconnect to ---> ', 'notification');

    });

    socket.on('addToRoom', function (roomName) {

      socket.join(roomName);

      console.log(' *** onAddToRoom ---> ', roomName);

    });

    socket.on('removeFromRoom', function (roomName) {

      socket.leave(roomName);

      console.log(' *** onRemoveFromRoom ---> ', roomName);

    });

    socket.on('connect_error', function (error) {

      socket.leave(roomName);

      console.log(' *** onRemoveFromRoom ---> ', roomName);

    });

  });
}

function activate(utils, options) {

  managers = utils;

  notificationsChannel = managers.io.of('/notifications');

  setupNotificationsChannel();

  twitter = new Twitter(options.twitter);

  //stream = twitter.stream('statuses/filter', { track: 'mario' });
  stream = twitter.stream('statuses/filter', {track: hashTags});

  stream.on('tweet', function (tweet) {
    const lightTweet = {
      text: tweet.text
    };
    notificationsChannel.emit('tweet', tweet);
  });

  youtubeKey = options.youtube.auth.key;

  fetchYoutube();
  setInterval(fetchYoutube, 1000 * 60 * 10);

  setupInstagramSubscriptions(options.instagram);

}

function fetchYoutube() {

  managers.youtube.search.list({
    part: 'id,snippet',
    q: youtubeKeywords,
    key: youtubeKey
  }, function (err, data) {
    if (err) {
      console.error('Error: ' + err);
    } else {
      console.log('youtube fetch');
      notificationsChannel.emit('youtube', data);
    }

  });
}

const channels = {
  activate: activate
};

module.exports = channels;
