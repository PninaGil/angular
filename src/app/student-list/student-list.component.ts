import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {

  students:Student[] = [{
   id: 1, name: "דינה", pail: true,average:92,tests:[{code:1, name:"אלגברה", marks:90, date: new Date("01/01/2023")}]},
                {id:2, name:"רינה", pail: false,leavingDate: new Date("12/12/2024"),tests:[{code:2,name:"גאומטריה",marks:84, date: new Date("01/01/2023")}]},
                {id:3, name:"מינה", pail: true,average:80,tests:[{code:1, name:"אלגברה", marks:80, date: new Date("01/01/2023")}]},
                {id:4, name:"פנינה", pail: true,average:98,tests:[{code:2,name:"גאומטריה",marks:98, date: new Date("01/01/2023")}]}
              ]

 selectedStudent?: Student;
 add:boolean = false;

 deleteStudent(student:Student){
  let index = this.students.indexOf(student)
  this.students.splice(index,1)
 }

  showStudent(student:Student){
    this.selectedStudent = student;
  }

  addStudent(){
    this.add = true;
    this.selectedStudent = new Student("")
  }

  addStudentToList(studentToAdd:Student){
    studentToAdd.id = this.students.length + 1
    this.students.push(studentToAdd)
    this.selectedStudent = undefined;
    this.add = false;
  }

  updateStudent(studentToUpdate:Student){
    let index = this.students.findIndex(s => s.id == studentToUpdate.id)
    this.students[index] = studentToUpdate
    this.selectedStudent = undefined;

  }
  @Output()
  showTests:EventEmitter<Student> = new EventEmitter<Student>()
  showTestsFunc(event: MouseEvent, student:Student){ 
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      console.log(target.tagName);
      
        return; // אם לוחצים על כפתור, לא מפעילים את פונקציית השורה
    }
    this.selectedStudent = student;
    this.showTests.emit(student)
  }
}
