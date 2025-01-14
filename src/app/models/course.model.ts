export class Course{
    id?: number;
    name?:string;
    description?:string;
 }  
    export const COURSES:Course[] = [{
        id: 1, name: "electronics", description: "An introduction to the principles of electronics, covering basic concepts such as voltage, current, resistance, and circuit design"
    },{
        id: 1, name: "Web Development", description: "Learn how to build dynamic websites using HTML, CSS, and JavaScript, along with frameworks like React or Angular."
    },{
        id:3, name: "Data Structures", description: "Explore various data structures such as arrays, linked lists, stacks, and queues, and understand their applications and performance."    
    },{ 
        id:4, name: "Machine Learning", description: "An overview of machine learning concepts, algorithms, and applications, focusing on supervised and unsupervised learning techniques."
    }]