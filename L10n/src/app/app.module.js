angular.module('app', ['hpe.elements', 'app.sync','app.guide'])
  .run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });