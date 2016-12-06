"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var PostsComponent = (function () {
    function PostsComponent(http) {
        this.http = http;
        this.errorMessage = '';
        this.isLoading = true;
    }
    PostsComponent.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this.http.request("http://jsonplaceholder.typicode.com/posts/1")
            .subscribe(function (res) {
            console.log(123);
            console.log(res);
            console.log(res.json());
            _this.data = res.json();
            _this.loading = false;
        });
    };
    PostsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/posts/posts.component.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map