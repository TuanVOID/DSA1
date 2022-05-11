export class Node<T> {
    name: string;
    score: number;
    next: Node<any>
    
    constructor(name:string,score:number)  {
        this.name = name;
        this.score = score;
        this.next = null;
    }
}