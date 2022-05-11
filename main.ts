import {ILinkedlist} from "./ILinkedList";
import {LinkedList} from "./LinkedList";


let linkedList = new LinkedList();
linkedList.addFirstNode(10);
linkedList.addFirstNode(5);
linkedList.addFirstNode(4);
linkedList.addFirstNode("abc");
linkedList.addFirstNode("xyz");


console.log(linkedList)
// console.log(linkedList.size())