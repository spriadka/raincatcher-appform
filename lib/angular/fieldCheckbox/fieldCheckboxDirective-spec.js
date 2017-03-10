/* globals inject */

var angular = require('angular');
var should = require('should');
var sinon = require('sinon');
require('angular-mocks');
var initModule = require('../../../test/initModule');

describe('Checkbox Field Directive ', function() {

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

    before(function() {
        initModule();
        //The checkbox directive is the directive under test.
        require('./fieldCheckboxController');
        require('./fieldCheckboxDirective');
        require('../../../dist');
    });

    beforeEach(angular.mock.module('wfm.appform'));

    beforeEach(function() {
        var self = this;

        inject(function($rootScope, $compile) {
            self.scope = $rootScope.$new();

            self.element = "<appform-field-checkbox></appform-field-checkbox>";

            //The function that is executed whenever a value changes.
            self.updateValueSpy = sinon.spy();

            //Setting A dummy field on the controller scope.
            self.scope.field = {
                _id: "checkboxFieldId",
                name: "Checkbox Field",
                updateValue: self.updateValueSpy,
                fieldOptions: field.fieldOptions
            };

            self.element = $compile(self.element)(self.scope);
            self.scope.$digest();

            self.element.data('$appformFieldCheckboxController', {});
            self.fieldCheckboxCtrl = self.element.scope().fieldCheckboxCtrl;
        });
    });

    it("There should be exactly one input element", function() {
        should(this.element.find('input').length).equal(1);
    });

    it("Input element should be hidden", function() {
        should(this.element.find('input').attr('type')).equal('hidden');
    });

    it('Input element should contain checkbox-validation directive',function(){
        should(this.element.find('input').attr('type')).equal('hidden');
    });

    it('Input element should contain correct validation attributes',function(){
        should(parseInt(this.element.find('input').attr('min'))).equal(field.fieldOptions.validation.min);
        should(parseInt(this.element.find('input').attr('max'))).equal(field.fieldOptions.validation.max);
    });
    it('Should contain checkbox options',function(){
        var elementCheckboxes = this.element.find('md-checkbox');
        should(elementCheckboxes.length).equal(field.fieldOptions.definition.options.length);
        should(this.element.find('input').attr('ng-model')).equal('fieldCheckboxCtrl.field.value');
    });

});