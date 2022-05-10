import {ILinkedlist} from "./hoc";
import {LinkedList} from "./LinkedList";


let linkedList = new LinkedList();
linkedList.addFirstNode(10);
linkedList.addFirstNode(5);
linkedList.addFirstNode(4);

console.log(linkedList.head)
console.log(linkedList)