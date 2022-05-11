import {Student} from "./Student";

export class StudentList<T> {
    head: Student<T> | null
    tail: Student<T> | null;
    size: number

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    insertFirstStudent (name:string, score:number): void {
        let student = new Student(name, score)
        student.next = this.head;
        this.head = student;
        if (!this.tail) {
            this.tail = student;
        }
        this.size++
    }

    insertLastStudent (name:string, score: number) : void {
        if (!this.head) {
            this.insertFirstStudent(name,score);
        } else {
            let student = new Student(name,score)
            this.tail.next = student;
            this.tail = student;
            this.size++
        }
    }

    showList():any[]{
        let listStudent = [];
        let currentNode = this.head;
        while ( currentNode!== null ) {
            listStudent.push(currentNode.readName())
            listStudent.push(currentNode.readScore())
            currentNode = currentNode.next;
        }
        return listStudent;
    }

    getSize () : string {
        return `Tong so sinh vien  ${this.size}`
    }

    totalStudentFail(): string {
        let currentNode = this.head;
        let listStudentFail = []
        let count = 0
        while (currentNode !== null) {
            if ( currentNode.readScore() <= 5) {
                listStudentFail.push(currentNode.readName())
                count++;
            }
            currentNode = currentNode.next
        }
        return `Co ${count} sinh vien thi lai: ${listStudentFail}`;
    }

    listStudentMaxScore():string {
        let listMaxScore = []
        let currentNode = this.head
        let count = 0;
        while (currentNode!==null) {
            if (currentNode.readScore() == 10) {
                listMaxScore.push(currentNode.readName())
                count++
            }
            currentNode = currentNode.next;
        }
        return `Co ${count} Sinh vien dat diem cao nhat: ${listMaxScore}`;
    }

}