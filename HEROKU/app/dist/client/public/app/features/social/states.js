'use strict';

(function () {
  'use strict';

  angular.module('app.social').config(configuration);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/wall');

    $stateProvider.state('wall', {
      url: '/wall',
      controller: 'WallController',
      controllerAs: 'wallController',
      templateUrl: 'app/features/social/templates/wall.template.html'
    });
  }
})();