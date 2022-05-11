import {SalaryManagement} from "./SalaryManagement";

let manager = new SalaryManagement()

manager.insertNewSalary(12,100000)
manager.insertNewSalary(11,200000)
manager.insertNewSalary(9,800000)
console.log(manager.getSize())
console.log(manager)
