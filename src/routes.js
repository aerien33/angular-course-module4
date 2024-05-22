(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state("categories", {
    url: '/categories',
    templateUrl: 'src/templates/all-categories.template.html',
    controller: 'AllCategoriesController as allCategories',
    resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
        }]
    }
  });

  $urlRouterProvider.otherwise('/');

}

})();
