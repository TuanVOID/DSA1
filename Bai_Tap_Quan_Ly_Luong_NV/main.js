"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SalaryManagement_1 = require("./SalaryManagement");
var manager = new SalaryManagement_1.SalaryManagement();
manager.insertNewSalary(12, 100000);
manager.insertNewSalary(11, 200000);
manager.insertNewSalary(9, 800000);
console.log(manager.getSize());
console.log(manager);
