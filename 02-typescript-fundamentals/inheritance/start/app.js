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
var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("Hello ", this.first_name);
    };
    Person = __decorate([
        angular2_1.Component({
            selector: 'person'
        }),
        angular2_1.View({
            template: "<article>Person</article>"
        }), 
        __metadata('design:paramtypes', [])
    ], Person);
    return Person;
})();
var p;
p = new Person();
p.first_name = 'Bernardo';
p.greet();
angular2_1.bootstrap(Person);
