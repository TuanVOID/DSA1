import {Salary} from "./Salary";

export class SalaryManagement<T> {
    head: Salary<T> | null;
    tail: Salary<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertNewSalary(month:number,money:number):void {
        let newSalary = new Salary(month,money)
        newSalary.next = this.head;
        this.head = newSalary;
        if (!this.tail) {
            this.tail = newSalary;
        }
        this.size++
    }

    listSalary() {

    }

    sumSalary() {

    }

    findMaxSalaryMonth() {

    }

    getSize():number {
        return this.size
    }
}