'use strict';

(function () {

  'use strict';

  angular.module('app').run(runBlock);

  runBlock.$inject = ['$window', '$templateCache', '$http'];
  function runBlock($window, $templateCache, $http) {

    var urls = [];

    angular.forEach(urls, function (url) {
      $http.get(url, { cache: $templateCache });
    });
  }
})();