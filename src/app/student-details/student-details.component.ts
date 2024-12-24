import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  @Input()
  student:Student | undefined;
  @Output()
  onSave:EventEmitter<Student> = new EventEmitter<Student>()
  addStudent(){
    this.onSave.emit(this.student)
  }
}
