(function () {
  angular.module("app").controller("PageHeaderCtrl", PageHeaderCtrl);

  PageHeaderCtrl.$inject = ['$rootScope', '$state'];


  function PageHeaderCtrl($rootScope, $state) {
    var vm = this;
    vm.currentState = null;
    vm.previousState = null;
    vm.topSearchExpanded = false;}

})();