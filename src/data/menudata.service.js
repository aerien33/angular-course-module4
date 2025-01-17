(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function () {
        return $http({
               method: "GET",
               url: (ApiBasePath + "/categories.json")
        }).then(function (result) {
            return result.data;
        });
    }

    service.getItemsForCategory = function (categoryShortName) {
        return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items/" + categoryShortName + ".json")
        }).then(function (result) {
            return result.data.menu_items;
        });
    }

}

})();
