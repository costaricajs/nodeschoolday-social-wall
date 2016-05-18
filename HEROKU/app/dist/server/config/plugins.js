'use strict';

const path = __dirname;

var plugins = [
  {
    register: require('inert'),
    options: {}
  },
  {
    register: require('vision'),
    options: {}
  },
  {
    register: require('hapi-swagger'),
    options: {
      'info': {
        'title': 'CR Autos',
        'version': '0.0.1',
        'contact': {
          'name': 'RiX',
          'email': 'rubenabix@gmail.com'
        }
      }
    }
  },
  {
    register: require('blipp'),
    options: {}
  },
  {
    register: require('good'),
    options: {
      reporters: [
        {
          reporter: require('good-console'),
          events: {
            log: '*',
            response: '*',
            error: '*'
          }
        }
      ]
    }
  },
  {
    register: require('hapi-auth-cookie'),
    options: {}
  },
  {
    register: require('bell'),
    options: {}
  },
  {
    register: require('./../lib/plugins/stream/index'),
    options: {
      'twitter': {
        'consumer_key': 'z7CzhqNUaMlw96UrNYH0ARqLO',
        'consumer_secret': 'q8QoEfj2HIdrDrUskUJV1Hw4FvpP7UObuoOhLLvEBwY3HxzFeO',
        'access_token': '3265582838-iEeDYZZPWjHz0tZsUlME9v0lGDCMHeUWiARakif',
        'access_token_secret': 'iC2TfpCIUMazS9jE1YBOFMrQq8MGkhDbzvwTpo11BX2aX'
      }
    }
  }
];

module.exports = plugins;
