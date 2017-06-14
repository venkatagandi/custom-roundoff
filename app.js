var app = angular.module('app',[]);
app.controller('MainCtrl', function($scope) {
$scope.decimalExample = {};

});

 app.directive('roundConverter2', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ngModelCtrl) {
      var newVal;
      function roundNumber(val) {
        var parsed = parseFloat(val, 10);
        if(parsed !== parsed) { return null; }
        var rounded = parsed.toFixed(2);
        newVal=rounded;
        return rounded;
      }
      ngModelCtrl.$parsers.push(roundNumber);
      elem.bind('blur', function() {
                scope.$apply(function() {
                    ngModelCtrl.$setViewValue(newVal);
                    ngModelCtrl.$render();
                });

            });
    }
  };
 });