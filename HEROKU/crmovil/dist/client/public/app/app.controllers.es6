(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$mdMedia', '$mdSidenav', '$mdDialog'];

  function MainController($scope, $mdMedia, $mdSidenav, $mdDialog) {

    var vm = this;

    /////////////////

    function activate() {
      console.log('Activate: ', 'MainController!!!');
      vm.isReady = true;
      vm.participants = window.participants;
      console.log(participants);
    }

    ////////////////

    activate();

  }
})();
