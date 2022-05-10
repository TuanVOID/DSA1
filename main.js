"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var linkedList = new LinkedList_1.LinkedList();
linkedList.addFirstNode(10);
linkedList.addFirstNode(5);
linkedList.addFirstNode(4);
console.log(linkedList.head);
console.log(linkedList);
