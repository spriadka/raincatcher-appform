var ngModule;
try {
  ngModule = angular.module('wfm.appform');
} catch (e) {
  ngModule = angular.module('wfm.appform', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-checkbox.tpl.html',
    '<form name="checkboxForm" novalidate>\n' +
    '    <input type="hidden" ng-model="fieldCheckboxCtrl.field.value" name="checkbox"\n' +
    '           min="{{fieldCheckboxCtrl.field.fieldOptions.validation.min}}"\n' +
    '           max="{{fieldCheckboxCtrl.field.fieldOptions.validation.max}}"\n' +
    '           ng-model-options="{allowInvalid: true}" checkbox-validation>\n' +
    '           <!-- When allowInvalid set to false, ng-model would become undefined -->\n' +
    '\n' +
    '    <md-input-container ng-repeat="item in fieldCheckboxCtrl.field.fieldOptions.definition.options">\n' +
    '        <md-checkbox ng-click="fieldCheckboxCtrl.toggle(item.label)" ng-checked="item.checked">{{item.label}}</md-checkbox>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <p ng-show="checkboxForm.checkbox.$error.min" role="alert">Please select at least {{fieldCheckboxCtrl.field.fieldOptions.validation.min}}\n' +
    '        options\n' +
    '    </p>\n' +
    '    <p ng-show="form.checkbox.$error.max" role="alert">Cannot select more than {{fieldCheckboxCtrl.field.fieldOptions.validation.max}}\n' +
    '        options\n' +
    '    </p>\n' +
    '\n' +
    '</form>');
}]);
