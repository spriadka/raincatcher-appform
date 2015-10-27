var ngModule;
try {
  ngModule = angular.module('wfm.appform');
} catch (e) {
  ngModule = angular.module('wfm.appform', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-submission.tpl.html',
    '<div class="appform-view">\n' +
    '  <md-list-item>\n' +
    '    <md-subheader class="md-no-sticky"><h3>{{ctrl.form.props.name}}</h3></md-subheader>\n' +
    '  </md-list-item>\n' +
    '  <md-list-item ng-if="! ctrl.fields" class="loading">\n' +
    '    Loading appForm submission...\n' +
    '  </md-list-item>\n' +
    '  <md-list-item ng-repeat="field in ctrl.fields">\n' +
    '    <div ng-switch="field.props.type">\n' +
    '      <div ng-switch-when="signature">\n' +
    '        <img ng-if="field.value.localURI" ng-src="{{field.value.localURI}}" alt="Signature"></img>\n' +
    '        <img ng-if="!field.value.localURI" ng-src="{{field.value.imgHeader + field.value.data}}" alt="Signature"></img>\n' +
    '      </div>\n' +
    '      <div ng-switch-when="location">\n' +
    '        <div>{{field.props.name}}:</div>\n' +
    '        <div style="font-weight: bold">{{field.value.lat}}N {{field.value.long}}W</div>\n' +
    '      </div>\n' +
    '      <div ng-switch-default>\n' +
    '        <span>{{field.props.name}}:</span> <span style="font-weight: bold">{{field.value}}</span>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </md-list-item>\n' +
    '</div>\n' +
    '');
}]);