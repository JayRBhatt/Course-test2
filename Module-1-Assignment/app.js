(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkDishes = function () {
    var n = countDishes($scope.dishes);
    $scope.message = makeMessage(n);
  };

  function countDishes(dishes) {
    var cnt = 0;
    if (dishes) {
      var array = dishes.split(',');
      for (var jj in array) {
        if (array[jj].trim().length != 0) {
          cnt++;
        }
      }
    }
    return cnt;
  }

  function makeMessage(cnt) {
    
    if (cnt === 0) {
      return 'Please enter data first';
    }
    
    else if (cnt <= 3) {

      return 'Enjoy!';
    } 

    else {
      return 'Too much!';
    }
  }
}

})();