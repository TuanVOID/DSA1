"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirstNode = function (data) {
        var node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        var node = new Node_1.Node(data);
        this.tail.next = node;
        this.tail = node;
        this.size++;
    };
    LinkedList.prototype.readList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.delLastNode = function () {
        var currentNode = this.head;
        var prevCurrentNode = null;
        while (currentNode.next) {
            prevCurrentNode = currentNode;
            currentNode = currentNode.next;
        }
        prevCurrentNode.next = null;
        this.tail = prevCurrentNode;
        this.size--;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
