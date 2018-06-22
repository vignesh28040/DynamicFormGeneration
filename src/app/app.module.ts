import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { QuestionService } from "../services/question.service";
import { QuestionControlService } from "../services/question-control.service";
import { DynamicFormQuestionComponent } from "./dynamicform/dynamic-form-question.component";
import { DynamicFormComponent } from "./dynamicform/dynamic-form.component";


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    QuestionService,
    QuestionControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
