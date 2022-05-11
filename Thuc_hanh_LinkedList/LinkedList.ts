import {Node} from "./Node";

export class LinkedList <T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(data:T) : void {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++
    }

    insertLastNode(data:T) : void {
        if (!this.head) {
            this.insertFirstNode(data)
        }
        let node  = new Node(data);
        this.tail.next = node;
        this.tail = node;
        this.size++
    }

    readList(): any {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }

    getSize () :number {
        return this.size;
    }

    delLastNode() : any {
        let currentNode = this.head;
        let prevCurrentNode = null;
        while (currentNode.next) {
            prevCurrentNode = currentNode;
            currentNode = currentNode.next;
        }
        prevCurrentNode.next = null;
        this.tail = prevCurrentNode;
        this.size--
    }

}