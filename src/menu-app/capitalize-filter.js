(function () {
'use strict';

angular.module('MenuApp')
.filter("capitalize", CapitalizeFirstLetterFilterFactory);

function CapitalizeFirstLetterFilterFactory() {
    return function (input) {
        var first = input.split(" ")[0];
        var capitalized = first[0].toUpperCase() + first.substr(1);
        return input.replace(first, capitalized);
    }
}

})();