export class Student{
    id?: number;
    name?:string;
    pail:boolean;
    leavingDate?:Date;
    average?:number;
    constructor(name:string){
        this.name = name
        this.pail = true
    }
}