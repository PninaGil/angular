import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
  students:Student[] = [{
   id: 123, name: "דינה", pail: true,leavingDate: undefined},
                {id:456, name:"רינה", pail: false,leavingDate: new Date("12/12/2024")},
                {id:789, name:"מינה", pail: true,leavingDate: undefined},
                {id:101, name:"פנינה", pail: true,leavingDate: undefined}
              ]
 selectedStudent: Student | undefined;
 add:boolean=false;
 deleteStudent(student:Student){
  let index = this.students.indexOf(student)
  this.students.splice(index,1)
 }

  showStudent(student:Student){
    this.add = false;
    this.selectedStudent = student;
  }

  addStudent(){
    debugger;
    this.selectedStudent = undefined;
    this.add = true;
  }
}
