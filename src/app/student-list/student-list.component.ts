import { Component } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {

  students:Student[] = [{
   id: 1, name: "דינה", pail: true,average:92},
                {id:2, name:"רינה", pail: false,leavingDate: new Date("12/12/2024")},
                {id:3, name:"מינה", pail: true,average:80},
                {id:4, name:"פנינה", pail: true,average:98}
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
}
