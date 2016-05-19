'use strict';

const request = require('request');

const participantsUrl = process.env.PARTICIPANTS_URL ||
  'https://raw.githubusercontent.com/CostaRicaJS/nodeschool-mentors-2016/master/mentors-data.json';

function getParticipants() {
  return new Promise((resolve, reject)=> {

    const config = {
      url: participantsUrl,
      method: 'GET'
    };

    request(config, function (error, response, body) {
      if (!error && response.statusCode === 200) {

        const participants = JSON.parse(body);

        resolve(participants);

      } else {

        resolve({});

      }

    });

  });
}

const util = {
  getParticipants
};

module.exports = util;
