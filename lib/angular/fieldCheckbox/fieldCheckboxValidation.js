/*global angular:true*/

angular.module('wfm.appform').directive('checkbox-validation',function() {
  function linker(scope,elem,attributes,ngModelController) {
        //ngModelController watches for only reference changes
        //watchCollections are good for one level deep watch of collections
    scope.$watchCollection(function() {
      return ngModelController.$modelValue;
    },function() {
      ngModelController.$validate();
    });

        //ModelValue is array of values
    ngModelController.$validators.min = function(modelValue) {
      return modelValue.length >= attributes.min;
    };

    ngModelController.$validators.max = function(modelValue) {
      return modelValue.length <= attributes.max;
    };
  }
  return {
    restrict: 'A',
    require: '?ngModel',
    scope: false,
    link: linker
  };
});