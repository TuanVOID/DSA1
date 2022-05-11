"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentList = void 0;
var Student_1 = require("./Student");
var StudentList = /** @class */ (function () {
    function StudentList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    StudentList.prototype.insertFirstStudent = function (name, score) {
        var student = new Student_1.Student(name, score);
        student.next = this.head;
        this.head = student;
        if (!this.tail) {
            this.tail = student;
        }
        this.size++;
    };
    StudentList.prototype.insertLastStudent = function (name, score) {
        if (!this.head) {
            this.insertFirstStudent(name, score);
        }
        else {
            var student = new Student_1.Student(name, score);
            this.tail.next = student;
            this.tail = student;
            this.size++;
        }
    };
    StudentList.prototype.showList = function () {
        var listStudent = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listStudent.push(currentNode.readName());
            listStudent.push(currentNode.readScore());
            currentNode = currentNode.next;
        }
        return listStudent;
    };
    StudentList.prototype.getSize = function () {
        return "Tong so sinh vien  ".concat(this.size);
    };
    StudentList.prototype.totalStudentFail = function () {
        var currentNode = this.head;
        var listStudentFail = [];
        var count = 0;
        while (currentNode !== null) {
            if (currentNode.readScore() <= 5) {
                listStudentFail.push(currentNode.readName());
                count++;
            }
            currentNode = currentNode.next;
        }
        return "Co ".concat(count, " sinh vien thi lai: ").concat(listStudentFail);
    };
    StudentList.prototype.listStudentMaxScore = function () {
        var listMaxScore = [];
        var currentNode = this.head;
        var count = 0;
        while (currentNode !== null) {
            if (currentNode.readScore() == 10) {
                listMaxScore.push(currentNode.readName());
                count++;
            }
            currentNode = currentNode.next;
        }
        return "Co ".concat(count, " Sinh vien dat diem cao nhat: ").concat(listMaxScore);
    };
    return StudentList;
}());
exports.StudentList = StudentList;
