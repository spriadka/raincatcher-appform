/*global angular:true*/


angular.module('wfm.appform').controller('FieldCheckboxController',['$scope',FieldCheckboxController]);

function FieldCheckboxController($scope) {
  var self = this;
  self.field = $scope.field;

    //Initialize checked options by default
  self.field.value = (function() {
    var arr = [];
    self.field.fieldOptions.definition.options.forEach(function(option) {
      if (option.checked) {
        arr.push(option.label);
      }
    });
    return arr;
  })();
  self.toggle = function(item) {
    var index = self.field.value.indexOf(item);
    if (index > -1) {
      self.field.value.splice(index,1);
    }        else {
      self.field.value.push(item);
    }
  };
}

module.exports = 'wfm.appform.FieldCheckboxController';