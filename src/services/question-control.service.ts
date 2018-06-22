import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

import { QuestionBase } from './../app/class/question-base';
import { CustomValidators } from "../app/dynamicform/custom.validators";
import { checkboxMinimumValidation } from "../custom-validations/chekbox-validator";

@Injectable()
export class QuestionControlService {

    constructor() { }
    toFormGroup(questions: QuestionBase<any>[]) {
        let group: any = {};

        questions.forEach(question => {
            if (question.controlType == "checkbox") {
                let gs: any = [];
                question["options"].forEach((element, index) => {
                    gs[index] = new FormControl(element.value)
                })
                group[question.key] = new FormGroup(gs, checkboxMinimumValidation(question["minimum"]));
            }
            else {
                group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                    : new FormControl(question.value || '');
            }

        });
        return new FormGroup(group);
    }
}