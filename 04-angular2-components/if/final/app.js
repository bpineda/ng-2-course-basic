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
var ComponentExample = (function () {
    function ComponentExample() {
        this.available = true;
    }
    ComponentExample = __decorate([
        angular2_1.Component({
            selector: 'if-example'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.NgIf],
            template: "\n<h5 *ng-if=\"available\">Disponible</h5>\n<h5 *ng-if=\"!available\">No Disponible</h5>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentExample);
    return ComponentExample;
})();
angular2_1.bootstrap(ComponentExample);
