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
        controller: 'AllCategoriesController as allCategoriesCtrl',
        resolve: {
            categories: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })

    .state("categories.menuItems", {
        url: '/menu-items/{category}',
        templateUrl: 'src/templates/all-items.template.html',
        controller: 'MenuItemsController as itemsCtrl',
        params: {
            category: null
        }
    });

    $urlRouterProvider.otherwise('/');

}

})();
