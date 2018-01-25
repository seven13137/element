(function () {
  angular.module("app.guide").controller("GuideCtrl", GuideCtrl);

  function GuideCtrl($scope, $http) {
    var vm = this;
    vm.title = "guide translation";
    $scope.formData = {};


    //pagination
    vm.totalItems = 0;
    vm.currentPage = 1;
    vm.numPages = 0;
    vm.itemData;
    //getDataFile33
    $http({
      method: 'GET',
      url: '/olc/olc?submitFlag=getTransListJson'
    }).then(function successCallback(response) {
      vm.itemData = response.data;
      $scope.items = response.data.slice(0, 20);
      vm.totalItems = response.data.length;
      vm.currentPage = 1;
      vm.numPages = (vm.totalItems + 20 - 1) / 20;
    }, function errorCallback(response) {
      // 请求失败执行代码
      console.log('error string')
    });
    
    $scope.pageChanged = function () {
      $scope.items = vm.itemData.slice( (vm.currentPage -1) *20, vm.currentPage * 20 );
    }

    //if toggle
    $scope.toggle = function (item) {
      if (item.active === true) {
        item.active = false;
      } else {
        item.active = true;
      }
    }

    $scope.submitSingle = function (item, index) {
      $http({
        method: 'GET',
        url: '/olc/olc?submitFlag=submitGuide&transNo=' + (index + (vm.currentPage-1)*20) + '&text=' + window.encodeURIComponent(item.guide),
      }).success(function (data) {
        //console.log(data);
        if (!data.success) {
         
        }
      })

    };

    $scope.submitTranslation = function (item, index) {
      $http({
        method: 'GET',
        url: '/olc/olc?submitFlag=submitLocal&transNo=' + (index + (vm.currentPage-1)*20) + '&text=' + window.encodeURIComponent(item.local),
      }).success(function (data) {
       // console.log(data);
        if (!data.success) {
          item.success = true;
        }
      })

    };
    vm.names = [
      "Octane",
      "XSP",
      "OMi"
    ];
    vm.versions = [
      "12.55.7",
      "11.0.0.1"
    ];
    vm.languages = [
      "english",
      "chinese"
    ];
    $scope.pname=vm.names[0];
    $scope.pversion=vm.versions[0];
    $scope.planguage=vm.languages[0];
    $scope.downLoad = function () {
      $http({
        method: 'GET',
        url: 'olc?submitFlag=generateResult',
      }).then(function successCallback(response) {
        $scope.display = true;
        $scope.fileJson = response.data.resFileList;
       // console.log(response.data.resFileList);
      }, function errorCallback(response) {
        // 请求失败执行代码
        alert('the request failed!')
      });
    }
  }

})();

