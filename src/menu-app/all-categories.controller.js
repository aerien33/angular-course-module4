(function () {
'use strict';

angular.module('MenuApp')
.controller('AllCategoriesController', AllCategoriesController);

AllCategoriesController.$inject = ['MenuDataService', 'categories', '$rootScope'];
function AllCategoriesController(MenuDataService, categories, $rootScope) {
    var $ctrl = this;
    $ctrl.categories = categories;
    $ctrl.current = null;

    $ctrl.$onInit = function () {
        $ctrl.cancel = $rootScope.$on('itemsCtrl:back', function () {
                        $ctrl.current = null;
                     }) ;
    }

    $ctrl.$onDestroy = function () {
        $ctrl.cancel();
    }

    $ctrl.setCurrent = function (category) {
        $ctrl.current = category;
    }
}

})();
