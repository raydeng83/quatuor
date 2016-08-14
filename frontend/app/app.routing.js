"use strict";
var router_1 = require('@angular/router');
var registration_component_1 = require("./components/registration.component");
var home_component_1 = require("./components/home.component");
var myProfile_component_1 = require("./components/myProfile.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'registration',
        component: registration_component_1.RegistrationComponent
    },
    {
        path: 'my-profile',
        component: myProfile_component_1.MyProfileComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map