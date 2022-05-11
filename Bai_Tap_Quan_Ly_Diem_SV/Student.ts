export class Student<T> {
    name : string;
    score : number;
    next : Student<T> | null = null;

    constructor(name: string, score : number) {
        this.name = name;
        this.score = score;
    }

    readName() :string {
        return this.name;
    }

    readScore () :number {
        return this.score
    }

}