"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentList_1 = require("./StudentList");
var studentList = new StudentList_1.StudentList();
studentList.insertLastStudent("Huy", 7);
studentList.insertFirstStudent("Tuan", 10);
studentList.insertFirstStudent("An", 10);
studentList.insertFirstStudent("Khuong", 10);
studentList.insertLastStudent("Tai", 5);
studentList.insertLastStudent("Thu", 3);
console.log(studentList.getSize());
console.log(studentList.showList());
console.log(studentList.totalStudentFail());
console.log(studentList.listStudentMaxScore());
