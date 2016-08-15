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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.sendCredential = function (model) {
        var tokenUrl1 = "http://localhost:8080/user/login";
        var headers1 = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(tokenUrl1, JSON.stringify(model), { headers: headers1 });
    };
    LoginService.prototype.sendToken = function (token) {
        var tokenUrl2 = "http://localhost:8080/rest/user/users";
        console.log('Bearer ' + token);
        var getHeaders = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
        return this.http.get(tokenUrl2, { headers: getHeaders });
    };
    LoginService.prototype.logout = function () {
        localStorage.setItem("token", "");
        localStorage.setItem("currentUserName", '');
        alert("You just logged out.");
    };
    LoginService.prototype.checkLogin = function () {
        if (localStorage.getItem("currentUserName") != '' && localStorage.getItem("token") != '') {
            return true;
        }
        else {
            return false;
        }
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map