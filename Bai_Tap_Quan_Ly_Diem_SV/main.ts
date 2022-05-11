import {StudentList} from "./StudentList";

let studentList = new StudentList()

studentList.insertLastStudent("Huy",7)
studentList.insertFirstStudent("Tuan", 10)
studentList.insertFirstStudent("An", 10)
studentList.insertFirstStudent("Khuong",10)
studentList.insertLastStudent("Tai", 5)
studentList.insertLastStudent("Thu", 3)

console.log(studentList.getSize())
console.log(studentList.showList())
console.log(studentList.totalStudentFail())
console.log(studentList.listStudentMaxScore())



