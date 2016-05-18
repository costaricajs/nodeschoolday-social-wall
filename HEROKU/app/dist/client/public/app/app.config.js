'use strict';

(function () {
  'use strict';

  angular.module('app').config(configuration);

  configuration.$inject = ['$httpProvider', '$mdIconProvider', '$mdThemingProvider'];

  function configuration($httpProvider, $mdIconProvider, $mdThemingProvider) {

    function icons() {
      $mdIconProvider.iconSet('content', 'assets/images/icons/svg-sprite-content.svg', 24).iconSet('navigation', 'assets/images/icons/svg-sprite-navigation.svg', 24).iconSet('alert', 'assets/images/icons/svg-sprite-alert.svg', 24).iconSet('action', 'assets/images/icons/svg-sprite-action.svg', 24).iconSet('editor', 'assets/images/icons/svg-sprite-editor.svg', 24).iconSet('image', 'assets/images/icons/svg-sprite-image.svg', 24).defaultIconSet('assets/images/icons/svg-sprite-alert.svg', 24);
    }

    function theme() {
      $mdThemingProvider.theme('default').primaryPalette('teal').accentPalette('green');
    }

    icons();
    theme();
  }
})();