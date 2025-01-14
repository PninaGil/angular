import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Student, Year } from '../models/student.model';
import { Course, COURSES } from '../models/course.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  
  touched:boolean = false;
  courses:Course[] = COURSES
  years = Year;

  studentForm:FormGroup = new FormGroup({});

  // ngOnInit(): void {
  //   if(this.add){
  //     this.studentForm = new FormGroup({
  //       "id": new FormControl(""),
  //       "name": new FormControl("", [Validators.required, Validators.minLength(2)]),
  //       "course": new FormControl("", Validators.required),
  //       "year": new FormControl("", Validators.required),
  //     })
  //   }else{
  //     console.log(this.student)
  //     this.studentForm = new FormGroup({
  //       "id": new FormControl(this.student?.id),
  //       "name": new FormControl(this.student?.name, [Validators.required, Validators.minLength(2)]),
  //       "course": new FormControl(this.student?.course, Validators.required),
  //       "year": new FormControl(this.student?.year, Validators.required),
  //     })
  //     console.log(this.studentForm)
  //   }
  // }
  
  
  private _student?: Student;

  public get student(): Student | undefined{
    return this._student
  }

  @Input()
  public set student(value:Student | undefined){
    this._student = value;
    if(this.student!= undefined){
      this.studentForm = new FormGroup({
        "id": new FormControl(this.student.id),
        "name": new FormControl(this.student.name, [Validators.required, Validators.minLength(2)]),
        "course": new FormControl(this.student.course, Validators.required),
        "year": new FormControl(this.student.year, Validators.required),
      })
    }
  }
  @Input()
  add:boolean = false

  @Output()
  onAddSave:EventEmitter<Student> = new EventEmitter<Student>()
  @Output()
  onUodateSave:EventEmitter<Student> = new EventEmitter<Student>()
  alert:boolean = false
  addStudent(){
    this.alert = true;
    this.student = this.studentForm.value
    if(this.student)
      this.student.pail = true
    if(this.add)
      this.onAddSave.emit(this.student)
    else this.updateStudent()
  }

  updateStudent(){
    this.onUodateSave.emit(this.student)
  }
  touch(){
    this.touched = true
  }
}
