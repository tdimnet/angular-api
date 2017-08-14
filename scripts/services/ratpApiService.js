'use strict';

angular
  .module('app')
  .service('ratpApiService', function ($http) {

    this.getRatpInfos = function (callbackSuccess, callbackError) {
      $http
        .get('https://data.ratp.fr/explore/embed/dataset/liste-des-commerces-de-proximite-agrees-ratp/table/?disjunctive.code_postal&sort=code_postal&static=false&datasetcard=false')
        .then(callbackSuccess)
        .catch(callbackError)
    }

  });
