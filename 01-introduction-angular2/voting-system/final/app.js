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
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require("angular2/angular2");
var Article = (function () {
    function Article(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    Article.prototype.domain = function () {
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    };
    return Article;
})();
var RedditArticle = (function () {
    function RedditArticle() {
    }
    RedditArticle = __decorate([
        angular2_1.Component({
            selector: 'reddit-article',
            inputs: ['article'],
        }),
        angular2_1.View({
            template: "\n<br/>\n<article>\n  <div class=\"votes\">{{ article.votes }}</div> <div class=\"main\">\n  <h2>\n    <a href=\"{{ article.link }}\">{{ article.title }}</a>\n    <span>({{ article.domain() }})</span>\n  </h2> \n  <ul>\n    <li><a href (click)='article.voteUp()'>upvote</a></li>\n    <li><a href (click)='article.voteDown()'>downvote</a></li> </ul>\n  </div> \n</article>\n<br/>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], RedditArticle);
    return RedditArticle;
})();
var RedditApp = (function () {
    function RedditApp() {
        this.articles = [
            new Article('Trump', 'http://donaldtrump.com'),
            new Article('Hillary', 'http://hillaryclinton.com')
        ];
    }
    RedditApp.prototype.addArticle = function (title, link) {
        console.log("Adding article with title", title.value, "and link", link.value);
        this.articles.push(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
    };
    RedditApp = __decorate([
        angular2_1.Component({
            selector: 'reddit'
        }),
        angular2_1.View({
            template: "\n    <section class=\"new-link\"> <div class=\"control-group\">\n<div><label for=\"title\">Title:</label></div>\n<div><input name=\"title\" #newtitle></div> </div>\n<div class=\"control-group\">\n<div><label for=\"link\">Link:</label></div> <div><input name=\"link\" #newlink></div>\n</div>\n<button (click)=\"addArticle(newtitle, newlink)\">Submit Link</button> \n</section>\n\n<reddit-article\n       *ng-for=\"#article of articles\"\n       [article]=\"article\">\n</reddit-article>\n\n",
            directives: [RedditArticle, angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], RedditApp);
    return RedditApp;
})();
angular2_1.bootstrap(RedditApp);
