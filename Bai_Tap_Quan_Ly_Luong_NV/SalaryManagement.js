"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryManagement = void 0;
var Salary_1 = require("./Salary");
var SalaryManagement = /** @class */ (function () {
    function SalaryManagement() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    SalaryManagement.prototype.insertNewSalary = function (month, money) {
        var newSalary = new Salary_1.Salary(month, money);
        newSalary.next = this.head;
        this.head = newSalary;
        if (!this.tail) {
            this.tail = newSalary;
        }
        this.size++;
    };
    SalaryManagement.prototype.listSalary = function () {
    };
    SalaryManagement.prototype.sumSalary = function () {
    };
    SalaryManagement.prototype.findMaxSalaryMonth = function () {
    };
    SalaryManagement.prototype.getSize = function () {
        return this.size;
    };
    return SalaryManagement;
}());
exports.SalaryManagement = SalaryManagement;
