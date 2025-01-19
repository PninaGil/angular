export class Test{
    code:number;
    name:string;
    marks:number;
    date:Date;  
    constructor(code:number, name:string, marks:number){
        this.code = code;
        this.name = name;
        this.marks = marks;
        this.date = new Date(Date.now());
    }
}