"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var linkedList = new LinkedList_1.LinkedList();
linkedList.addFirstNode(10);
linkedList.addFirstNode(5);
linkedList.addFirstNode(4);
linkedList.addFirstNode("abc");
linkedList.addFirstNode("xyz");
console.log(linkedList);
// console.log(linkedList.size())
