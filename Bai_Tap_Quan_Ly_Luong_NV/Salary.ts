export class Salary<T> {
    month: number;
    money: number;
    next: Salary<T> | null = null;

    constructor(month:number, money: number) {
        this.money = money;
        this.month = month;
    }

    getMonth () {
        return this.month;
    }

    getMoney () {
        return this.money;
    }
}