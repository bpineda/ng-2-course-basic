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
var FormsIntro = (function () {
    function FormsIntro() {
    }
    FormsIntro = __decorate([
        angular2_1.Component({
            selector: 'forms-intro'
        }),
        angular2_1.View({
            template: "\n<div>\n    <h5>Information Request</h5>\n    <form>\n\n      <div class=\"form-group\">\n        <label>Full Name</label>\n        <input type=\"text\">\n        <label>Email</label>\n        <input type=\"text\">\n      </div>\n\n      <button type=\"submit\" class=\"button success large expanded\">Submit</button>\n    </form>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FormsIntro);
    return FormsIntro;
})();
angular2_1.bootstrap(FormsIntro);
