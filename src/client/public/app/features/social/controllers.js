'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  'use strict';

  angular.module('app.social').controller('WallController', WallController);

  WallController.$inject = ['$scope', '$mdMedia', '$mdSidenav', '$mdDialog', 'socialFactory'];

  function WallController($scope, $mdMedia, $mdSidenav, $mdDialog, socialFactory) {

    var tweets = [];
    var instagrams = [];

    /////////////

    var vm = this;
    vm.tweets = tweets;
    vm.instagrams = instagrams;
    var baseUrl = '';
    var namespace = 'notifications';
    var identification = '';

    var notifications = io.connect(baseUrl + '/' + namespace, { secure: true });

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
      result.forEach(function (picture) {
        var exist = _.find(vm.instagrams, function (instagram) {
          return instagram.id === picture.id;
        });
        if (!exist) {
          console.log('----------------');
          console.log('append', picture);
          vm.instagrams.unshift(picture);
        }
      });
      //vm.instagrams.unshift(...result);
      console.log('vm.instagrams', vm.instagrams.length);
      $scope.$apply();
    });

    /////////////////

    function activate() {
      console.log('Activate: ', 'WallController!!!');

      socialFactory.getInstagramPictures().then(function (response) {
        var _vm$instagrams;

        (_vm$instagrams = vm.instagrams).unshift.apply(_vm$instagrams, _toConsumableArray(response.data));
      });
    }

    //$scope

    ////////////////

    activate();
  }
})();