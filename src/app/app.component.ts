import { Component } from "@angular/core";
import { Student } from "./models/student.model";
import { Test } from "./models/test.model";

@Component({
    templateUrl: "./app.component.html",
    selector: "app-root"
})
export class AppComponent {
    tests: Test[] = []
    show: boolean = false
    showTests(student: Student) {
        console.log("ok");
        console.log(student.tests);
        student.tests
        this.tests = student.tests
        this.show = true
    }
}