import { Course } from "./course.model";

export class Student{
    id?: number;
    name?:string;
    pail:boolean;
    leavingDate?:Date;
    average?:number;
    course?:Course;
    year?:Year;
    constructor(name:string){
        this.name = name
        this.pail = true
    }

}
export enum Year{
    First = 1,
    Second = 2,
    Third = 3,
    Fourth = 4
}