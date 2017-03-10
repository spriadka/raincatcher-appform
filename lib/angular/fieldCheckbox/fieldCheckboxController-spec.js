/**
 * Created by spriadka on 3/8/17.
 */
var angular = require('angular');
var should = require('should');
require('angular-mocks');
var initModule = require('../../../test/initModule');

describe('Checkbox Field Controller', function() {

    const field = {
        fieldOptions: {
            definition: {
                options: [{
                    label: 'Legolas',
                    checked: false
                },
                    {
                        label: 'Aragorn',
                        checked: true
                    },
                    {
                        label: 'Frodo',
                        checked: true
                    },
                    {
                        label: 'Gandalf',
                        checked: true
                    },
                    {
                        label: "Naz'ghul",
                        checked: false
                    }]
            },
            validation: {
                min: 1,
                max: 3
            }
        }
    };

    //Setting up a mock module to test.
    before(function() {
        initModule();
        //The number controller is the controller under test.
        require('./fieldCheckboxController');
    });

    beforeEach(angular.mock.module('wfm.appform'));

    beforeEach(inject(function(_$controller_) {
        this.$controller = _$controller_;
    }));

    it('Should bind $scope.field to controller correctly', inject(function($rootScope) {
        //Setting up a new mock $scope.
        var $scope = $rootScope.$new();

        //Setting a mock field
        $scope.field = field;
        var controller = this.$controller('FieldCheckboxController',{$scope : $scope});
        should(controller.field.fieldOptions).equal($scope.field.fieldOptions);
    }));

    it('Should initialize checked options to controller correctly',inject(function($rootScope){
        var $scope = $rootScope.$new();
        $scope.field = field;
        var controller = this.$controller('FieldCheckboxController',{$scope : $scope});
        should(controller.field.value).eql([ 'Aragorn', 'Frodo', 'Gandalf' ]);
    }));
});