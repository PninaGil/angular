import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  
  @Input()
  student:Student | undefined;
  @Input()
  add:boolean = false

  @Output()
  onAddSave:EventEmitter<Student> = new EventEmitter<Student>()
  @Output()
  onUodateSave:EventEmitter<Student> = new EventEmitter<Student>()

  addStudent(){
    if(this.add)
      this.onAddSave.emit(this.student)
    else this.updateStudent()
  }

  updateStudent(){
    this.onUodateSave.emit(this.student)
  }
}
