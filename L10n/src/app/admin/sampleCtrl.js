(function () {
  angular.module("app.sync").controller("SyncCtrl", SyncCtrl);

  function SyncCtrl($scope, $http) {
    var vm = this;
    vm.title = "Sync Resource";
    $scope.formData = {'name':'Octane','version':'12.55.7','url':'/Octane12.55.7'};

    $scope.inputUrl = function(formData){
      $http({
        method: 'POST',
        url: 'olc?submitFlag=chooseResFile&productName='+formData.name+'&productVer='+formData.version+'&githubPath=%2F'+formData.url,
      }).then(function successCallback(response) {
          $scope. showList=true;
          $scope.fileJson = response.data.resFileList;
          console.log(response.data.resFileList);
        }, function errorCallback(response) {
          // 请求失败执行代码
          alert('the request failed!')
      });
      
    };
    
  }

})();