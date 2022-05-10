import {ILinkedlist} from "./hoc";
import {Node} from "./Node";

export class LinkedList implements ILinkedlist {
    head: Node<any> | null;
    tail: Node<any> | null;
    count : number;

    constructor() {
        this.head = null
        this.tail = null
        this.count = 0;
    }

    addFirstNode(data: any): void {
        let node = new Node(data)
        if (!this.head) {
            this.head = node;
            this.tail =node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.count++;
    }

    addLastNode(data: any): void {
        let node = new Node(data);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else  {
            this.tail.next = node;
            this.tail = node;
        }
        this.count++

    }

    deleteFirstNode(): void {
    }

    deleteLastNode(): void {
    }

    size(): any {

    }

}