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
var user_1 = require('../models/user');
var user_service_1 = require("../services/user.service");
var RegistrationComponent = (function () {
    function RegistrationComponent(userService) {
        this.userService = userService;
        this.user = new user_1.User();
        this.usernameExist = false;
        this.emailExist = false;
    }
    RegistrationComponent.prototype.onSubmit = function () {
        this.userService.registerUser(this.user);
    };
    RegistrationComponent.prototype.checkUsername = function () {
        var _this = this;
        this.usernameExist = false;
        this.userService.findByUsername(this.user).subscribe(function (user) {
            if (user.username != null) {
                _this.usernameExist = true;
            }
        }, function (error) { return console.log(error); });
    };
    RegistrationComponent.prototype.checkEmail = function () {
        var _this = this;
        this.emailExist = false;
        this.userService.findByEmail(this.user).subscribe(function (user) {
            if (user.email != null) {
                _this.emailExist = true;
            }
        }, function (error) { return console.log(error); });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration',
            templateUrl: 'app/components/registration.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map