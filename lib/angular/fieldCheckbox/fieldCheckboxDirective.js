/**
 * Created by spriadka on 2/22/17.
 */


angular.module('wfm.appform').directive('appformFieldCheckbox',function($templateCache){
    return {
        restrict: 'E',
        template: $templateCache.get(),
        controller: 'FieldCheckboxController',
        controllerAs: 'fieldCheckboxCtrl'
    }
});