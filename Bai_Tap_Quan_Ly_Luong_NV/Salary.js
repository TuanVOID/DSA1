"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Salary = void 0;
var Salary = /** @class */ (function () {
    function Salary(month, money) {
        this.next = null;
        this.money = money;
        this.month = month;
    }
    Salary.prototype.getMonth = function () {
        return this.month;
    };
    Salary.prototype.getMoney = function () {
        return this.money;
    };
    return Salary;
}());
exports.Salary = Salary;
