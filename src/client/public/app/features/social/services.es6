'use strict';

(function () {
  'use strict';

  angular.module('app.social').factory('socialFactory', socialFactory);

  socialFactory.$inject = ['$http'];

  function socialFactory($http) {

    const base = '';

    const api = {
      instagramPictures: base + '/api/v3/publish/photo'
    };

    function getInstagramPictures() {
      return $http.post(api.instagramPictures);
    }


    let factory = {
      getInstagramPictures
    };

    ////////////////

    ////////////////

    return factory;
  }
})();
