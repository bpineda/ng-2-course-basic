"use strict";
var router_1 = require('@angular/router');
var posts_component_1 = require('./posts/posts.component');
var github_component_1 = require('./github/github.component');
var routes = [
    {
        path: 'posts',
        component: posts_component_1.PostsComponent,
    },
    {
        path: 'github',
        component: github_component_1.GithubComponent
    },
    {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map