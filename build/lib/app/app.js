"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var return_1 = require("../../routes/return");
// import {} from '';
var AppExpress = /** @class */ (function () {
    function AppExpress() {
        this.app = express();
        this.returnArray = new return_1.ReturnArray();
        this.config();
        this.app = express();
        this.returnArray.routes(this.app);
    }
    AppExpress.prototype.config = function () {
        this.app.use(express.static('public'));
    };
    return AppExpress;
}());
exports.AppExpress = AppExpress;
exports.default = new AppExpress().app;
