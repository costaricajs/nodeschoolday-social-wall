(function () {
  'use strict';

  angular
    .module('app.social')
    .controller('WallController', WallController);

  WallController.$inject = ['$scope', '$mdMedia', '$mdSidenav', '$mdDialog', 'socialFactory'];

  function WallController($scope, $mdMedia, $mdSidenav, $mdDialog, socialFactory) {

    let tweets = [];
    let instagrams = [];

    /////////////

    let vm = this;
    vm.tweets = tweets;
    vm.instagrams = instagrams;
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

    notifications.on('instagram-picture', function (result) {
      console.log('instagram-picture:', result);
      vm.instagrams.unshift(...result);
      $scope.$apply();
    });

    /////////////////

    function activate() {
      console.log('Activate: ', 'WallController!!!');

      socialFactory.getInstagramPictures()
        .then((response)=> {
          vm.instagrams.unshift(...response.data);
        });

    }

    //$scope

    ////////////////

    activate();

  }
})();
