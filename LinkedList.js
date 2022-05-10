"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    LinkedList.prototype.addFirstNode = function (data) {
        var node = new Node_1.Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.count++;
    };
    LinkedList.prototype.addLastNode = function (data) {
        var node = new Node_1.Node(data);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.count++;
    };
    LinkedList.prototype.deleteFirstNode = function () {
    };
    LinkedList.prototype.deleteLastNode = function () {
    };
    LinkedList.prototype.size = function () {
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
