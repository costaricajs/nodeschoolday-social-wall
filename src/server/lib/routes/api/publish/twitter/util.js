'use strict';

let hashTags = process.env.HASH_TAGS ? process.env.HASH_TAGS.split(',') : ['javascript', 'nodejs'];

function fetchTwitter(options) {

  return new Promise((resolve, reject)=> {

    const twitter = options.request.server.plugins['stream'].twitter;

    console.log('options.input', options.input);

    const q = hashTags[0] + ' since:' + '2016-05-20';

    twitter.get('search/tweets',
      {
        q: q,
        count: 200
      },
      (error, data, response) => {

        if (error) {
          console.log(error);
          options.error = 'tweets error';
          reject(options);
        } else {

          options.result = {
            data
          };


          const tweets = data.statuses;

          twitter.notify.emit('tweets', tweets);


          //const notificationsChannel = options.request.server.plugins['stream'].notificationsChannel;
          //notificationsChannel.emit('instagram-picture', result);
          //options.result = result;

        }

        resolve(options);

      });

  });

}

// Public
module.exports = {
  fetchTwitter
};
