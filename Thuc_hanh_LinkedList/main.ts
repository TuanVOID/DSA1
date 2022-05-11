import {LinkedList} from "./LinkedList";

let linkList = new LinkedList()

linkList.insertFirstNode(20);
linkList.insertFirstNode("abc");
linkList.insertFirstNode(false);
linkList.insertLastNode("xxx")
linkList.insertLastNode(true)
linkList.insertLastNode(20)

// console.log(linkList)
console.log(linkList.readList())
console.log(linkList.getSize())
linkList.delLastNode();
console.log(linkList.readList())
console.log(linkList.getSize())