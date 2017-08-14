'use strict';

angular
  .module('app')
  .controller('RatpController', function ($scope, ratpApiService) {

      ratpApiService.getRatpInfos(
        function (response) {
          console.log(response)
        },
        function (error) {
          console.log(error);
        }
      )

  });
