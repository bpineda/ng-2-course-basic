/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var angular2_2 = require('angular2/angular2');
var angular2_3 = require('angular2/angular2');
var FormsIntro = (function () {
    function FormsIntro(builder) {
        this.loginForm = builder.group({
            login: ["", angular2_3.Validators.required],
            passwordRetry: builder.group({
                password: ["", angular2_3.Validators.required],
                passwordConfirmation: ["", angular2_3.Validators.required]
            })
        });
    }
    FormsIntro.prototype.sendData = function (value) {
        console.log('Objec values: ', value);
    };
    FormsIntro = __decorate([
        angular2_1.Component({
            selector: 'forms-events',
            appInjector: [
                angular2_3.FormBuilder
            ]
        }),
        angular2_1.View({
            directives: [angular2_2.FORM_DIRECTIVES],
            template: "\n<div>\n    <h5>Information Request</h5>\n    <form [control-group]=\"loginForm\">\n          Login <input control=\"login\">\n   \n          <div control-group=\"passwordRetry\">\n            Password <input type=\"password\" control=\"password\">\n            Confirm password <input type=\"password\" control=\"passwordConfirmation\">\n          </div>\n        </form>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [angular2_3.FormBuilder])
    ], FormsIntro);
    return FormsIntro;
})();
angular2_1.bootstrap(FormsIntro);
var loginForm = builder.group({
    login: ["", angular2_3.Validators.required],
    passwordRetry: builder.group({
        password: ["", angular2_3.Validators.required],
        passwordConfirmation: ["", angular2_3.Validators.required]
    })
});
