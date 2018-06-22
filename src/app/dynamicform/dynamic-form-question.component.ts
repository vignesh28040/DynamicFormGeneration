import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../class/question-base';

@Component({
    selector: 'app-question',
    templateUrl: './dynamic-form-question.component.html',
    styles:[`
    .errorMessage{
        color:red;
    }
    `]
})
export class DynamicFormQuestionComponent implements OnInit {
    @Input() question: QuestionBase<any>;
    @Input() form: FormGroup;
    
    ngOnInit(){
        
    }
    get isValid() { 
         return this.form.controls[this.question.key].valid; }

}