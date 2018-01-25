angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', '$breadcrumbProvider',
    function ($stateProvider, $urlRouterProvider, $breadcrumbProvider) {

      //allow abstract states in breadcrumb
      $breadcrumbProvider.setOptions({
        includeAbstract: true
      });

      $urlRouterProvider.otherwise('/admin/sync_resource');
      $stateProvider
        .state('admin', {
          abstract: 'true',
          url: '/admin',
          template: '<ui-view autoscroll=\"true\" />',
          ncyBreadcrumb: {
            label: 'admin',
          }
        })
        .state('admin.sync_resource', {
          url: '/sync_resource',
          templateUrl: 'app/views/admin/sync_resource.html',
          controller: 'SyncCtrl as vm',
          ncyBreadcrumb: {
            label: 'sync resource'
          },
          data: {
            pageTitle: 'sync resource'
          }
        })
        .state('admin.guide_translation',{
          url:'/guide_translation',
          templateUrl:'app/views/admin/guide_translation.html',
          controller: 'GuideCtrl as vm',
          ncyBreadcrumb: {
            label: 'guide translation'
          },
          data: {
            pageTitle: 'guide translation'
          }
        })
        .state('admin.view_all',{
          url:'/view_all',
          templateUrl:'app/views/admin/view_all.html',
          controller: 'GuideCtrl as vm',
          ncyBreadcrumb: {
            label: 'all translations'
          },
          data: {
            pageTitle: 'all translations'
          }
        });
        $stateProvider.state('customer', {
          abstract: 'true',
          url: '/customer',
          template: '<ui-view autoscroll=\"true\" />',
          ncyBreadcrumb: {
            label: 'customer',
          }
        })
        .state('customer.translate', {
          url: '/translate',
          templateUrl: 'app/views/customer/translate.html',
          controller: 'GuideCtrl as vm',
          ncyBreadcrumb: {
            label: 'translate'
          },
          data: {
            pageTitle: 'translate'
          }
        })
        .state('customer.download', {
          url: '/download',
          templateUrl: 'app/views/customer/download.html',
          controller: 'GuideCtrl as vm',
          ncyBreadcrumb: {
            label: 'download'
          },
          data: {
            pageTitle: 'download'
          }
        })
    }
  ]);