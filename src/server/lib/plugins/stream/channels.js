'use strict';


let notificationsChannel;
const Twitter = require('twit');
let stream;
let twitter;

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

function activate(io, options) {

  notificationsChannel = io.of('/notifications');

  setupNotificationsChannel();

  twitter = new Twitter(options.twitter);

  //stream = twitter.stream('statuses/filter', { track: 'mario' });
  stream = twitter.stream('statuses/filter', { track: ['javascript', 'nodejs'] });

  stream.on('tweet', function (tweet) {
    const lightTweet = {
      text: tweet.text
    };
    notificationsChannel.emit('tweet', tweet);
  });
  
}

const channels = {
  activate: activate
};

module.exports = channels;
