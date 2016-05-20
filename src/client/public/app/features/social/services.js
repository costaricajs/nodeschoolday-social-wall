'use strict';

(function () {
  'use strict';

  angular.module('app.social').factory('socialFactory', socialFactory);

  socialFactory.$inject = ['$http'];

  function socialFactory($http) {

    var base = '';

    var api = {
      instagramPictures: base + '/api/v3/publish/photo'
    };

    function getInstagramPictures() {
      return $http.post(api.instagramPictures);
    }

    var factory = {
      getInstagramPictures: getInstagramPictures
    };

    ////////////////

    ////////////////

    return factory;
  }
})();