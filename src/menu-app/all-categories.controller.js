(function () {
'use strict';

angular.module('MenuApp')
.controller('AllCategoriesController', AllCategoriesController);

AllCategoriesController.$inject = ['MenuDataService', 'categories'];
function AllCategoriesController(MenuDataService, categories) {
    var $ctrl = this;
    $ctrl.categories = categories;
}

})();
