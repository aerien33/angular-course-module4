(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['$stateParams', '$rootScope', 'MenuDataService'];
function MenuItemsController($stateParams, $rootScope, MenuDataService) {
    var $ctrl = this;
    var category = $stateParams.category;
    $ctrl.items = [];

    $ctrl.$onInit = function () {
        $ctrl.getItems();
    }

    $ctrl.getItems = function () {
        MenuDataService.getItemsForCategory(category)
            .then(function(result) {
                $ctrl.items = result;
            });
    }

    $ctrl.hasTwoSizes = function (index) {
        var item = $ctrl.items[index];
        if (item.large_portion_name && item.price_large
            && item.small_portion_name && item.price_small) {
                return true;
        } else {
                return false;
        }
    }

    $ctrl.back = function () {
        $rootScope.$broadcast('itemsCtrl:back', null);
    }

}

})();