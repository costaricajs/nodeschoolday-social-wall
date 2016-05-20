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
        'title': 'nodeschoolday-social-wall',
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
        'consumer_key': process.env.TWITTER_CONSUMER_KEY ||
        'z7CzhqNUaMlw96UrNYH0ARqLO',
        'consumer_secret': process.env.TWITTER_CONSUMER_SECRET ||
        'q8QoEfj2HIdrDrUskUJV1Hw4FvpP7UObuoOhLLvEBwY3HxzFeO',
        'access_token': process.env.TWITTER_ACCESS_TOKEN ||
        '3265582838-iEeDYZZPWjHz0tZsUlME9v0lGDCMHeUWiARakif',
        'access_token_secret': process.env.TWITTER_ACCESS_TOKEN_SECRET ||
        'iC2TfpCIUMazS9jE1YBOFMrQq8MGkhDbzvwTpo11BX2aX'
      },
      'youtube': {
        'version': 'v3',
        'auth': {
          'key': process.env.YOUTUBE_KEY || 'AIzaSyCGP7brw06_AaXAfT1NTYZevh11ZG5buGw'
        }
      },
      'instagram': {
        client_id: 'bf481134f9074a77acf4f7f45b2ae48c' || '36214acc2b344e78b7b1d971faf518e5',
        client_secret: 'a4ce35ac14cf4ab9b0ac156404134d09' || '3b8a5bc6eab6426fb1d9207188f28d93',
        verify_token: process.env.APP_SECRET || 'nodeschooldaycr16',
        base: process.env.BASE_URL || 'http://nodeschool-costarica.herokuapp.com'
      }
    }
  }
];

module.exports = plugins;
