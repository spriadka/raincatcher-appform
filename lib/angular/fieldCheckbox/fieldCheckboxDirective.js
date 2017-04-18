/*global angular:true*/

angular.module('wfm.appform').directive('appformFieldCheckbox',function($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('wfm-template/appform-field-checkbox.tpl.html'),
    controller: 'FieldCheckboxController',
    controllerAs: 'fieldCheckboxCtrl'
  };
});