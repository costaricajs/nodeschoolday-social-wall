(function () {
  'use strict';

  angular
    .module('app.social')
    .controller('WallController', WallController);

  WallController.$inject = ['$scope', '$mdMedia', '$mdSidenav', '$mdDialog'];

  function WallController($scope, $mdMedia, $mdSidenav, $mdDialog) {

    let tweets = [];

    /////////////

    let vm = this;
    vm.tweets = tweets;
    let baseUrl = '';
    let namespace = 'notifications';
    let identification = '';

    let notifications = io.connect(baseUrl + '/' + namespace, {secure: true});

    notifications.on('identification', function (result) {
      console.log('identification:', result.id);
      identification = result.id;
    });

    notifications.on('tweet', function (result) {
      console.log('tweet:', result);
      vm.tweets.unshift(result);
      $scope.$apply();
    });

    /////////////////

    function activate() {
      console.log('Activate: ', 'WallController!!!');
    }

    ////////////////

    activate();

  }
})();
