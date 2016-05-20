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
      var _vm$instagrams;

      console.log('instagram-picture:', result);
      (_vm$instagrams = vm.instagrams).unshift.apply(_vm$instagrams, _toConsumableArray(result));
      $scope.$apply();
    });

    /////////////////

    function activate() {
      console.log('Activate: ', 'WallController!!!');

      socialFactory.getInstagramPictures().then(function (response) {
        var _vm$instagrams2;

        (_vm$instagrams2 = vm.instagrams).unshift.apply(_vm$instagrams2, _toConsumableArray(response.data));
        $scope.$apply();
      });
    }

    //$scope

    ////////////////

    activate();
  }
})();