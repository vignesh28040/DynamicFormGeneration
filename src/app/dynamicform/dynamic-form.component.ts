import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './../class/question-base';
import { QuestionControlService } from './../../services/question-control.service';
import { QuestionService } from "../../services/question.service";

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styles:[`
    .bordered-div{
       border:solid 1px #eee;
       padding:5px 10px;
       margin:0 auto;
    }
    `]
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService, private qs: QuestionService) { }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
        this.qs.questionChanges.subscribe((data) => {
            this.questions=data;
            this.form = this.qcs.toFormGroup(data);
        })
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}