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
var core_1 = require('@angular/core');
var people_service_1 = require('./people.service');
var PeopleListComponent = (function () {
    function PeopleListComponent(_peopleService) {
        this._peopleService = _peopleService;
        this.people = [];
    }
    PeopleListComponent.prototype.ngOnInit = function () {
        console.log('On Init');
        this.people = this._peopleService.getAll();
    };
    PeopleListComponent = __decorate([
        core_1.Component({
            selector: 'people-list',
            template: "\n  <!-- this is the new syntax for ng-repeat -->\n  <ul>\n    <li *ngFor=\"let person of people\">\n        {{person.name}}\n    </li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], PeopleListComponent);
    return PeopleListComponent;
})();
exports.PeopleListComponent = PeopleListComponent;
//# sourceMappingURL=people-list.component.js.map