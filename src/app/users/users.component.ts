import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { QuestionService } from "../../services/question.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

    constructor(private fb: FormBuilder,
        private questionService: QuestionService) { }
    fForm: FormGroup;
    questions: any[];
    isChoosed: boolean = false;
    isOption: boolean = false;
    isExists: boolean = false;
    isCheckbox: boolean = false;
    ngOnInit() {
        this.fForm = this.fb.group({
            qtype: ['', [Validators.required]],
            key: ['', [Validators.required]],
            label: ['', [Validators.required]],
            required: '',
            minimum: 0,
            options: this.fb.array([])
        });
        this.questions = this.questionService.getQuestions();
    }

    private getOptions() {
        return this.fb.group({
            key: ['', Validators.required],
            text: ['', [Validators.required]]
        });
    }
    loadForm(deviceValue: any) {
        if (deviceValue)
            this.isChoosed = true;
        switch (deviceValue) {
            case "DropdownQuestion":
                this.refreshFormArray(true);
                break;
            case "TextBoxQuestion":
                this.refreshFormArray(false);
                break;
            case "CheckBoxQuestion":
                this.isCheckbox = true;
                this.refreshFormArray(true);
                break;
            case "RadioButtonQuestion":
                this.refreshFormArray(true);
                break;
        }
    }
    refreshFormArray(value: boolean) {
        this.isOption = value;
        this.ClearFormArray();
        if (value)
            this.addOption();
    }

    addOption() {
        (<FormArray>this.fForm.get('options')).push(this.getOptions());
    }
    removeOption(i: number) {
        const control = <FormArray>this.fForm.get('options');
        if (control.length > 1)
            control.removeAt(i);
        else {
            this.refreshFormArray(true);
        }
    }
    ClearFormArray = () => {
        let formArray = <FormArray>this.fForm.get('options');
        while (formArray.length !== 0) {
            formArray.removeAt(0)
        }
    }
    checkKey(event: any) {
        this.isExists = this.questionService.checkKeyAlreadyExists(event.target.value)
        if (this.isExists)
            this.fForm.get('key').setErrors({ 'incorrect': true });
    }
    SaveFData() {
        this.questionService.saveQuestion(this.fForm.value);
        this.fForm.reset();
        this.isChoosed = false;
    }
}
