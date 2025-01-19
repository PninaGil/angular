import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TestListComponent } from './test-list/test-list.component';
@NgModule({
    declarations:[AppComponent, StudentListComponent, StudentDetailsComponent, TestListComponent],
    imports:[BrowserModule,ReactiveFormsModule,FormsModule],
    bootstrap:[AppComponent]
})
export class AppModule{
    
}
