/// <reference path="typings/angular2/angular2.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Animal = (function () {
    function Animal(name) {
        this.first_name = name;
    }
    Animal.prototype.walk = function () {
        console.log('I am walking');
    };
    Animal.prototype.eat = function () {
        console.log('I am eating');
    };
    return Animal;
})();
var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        _super.call(this, 'FNU');
        console.log('I am a person');
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
})(Animal);
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        _super.call(this, name);
        console.log('I am a dog');
    }
    Dog.prototype.greet = function () {
        console.log('Wuf');
    };
    return Dog;
})(Animal);
var p;
p = new Person();
p.first_name = 'Bernardo';
p.greet();
p.walk();
var d;
d = new Dog('Firulais');
d.walk();
angular2_1.bootstrap(Person);
