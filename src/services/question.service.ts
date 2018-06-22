import { Injectable } from '@angular/core';

import { DropdownQuestion } from './../app/class/question-dropdown';
import { QuestionBase } from './../app/class/question-base';
import { TextBoxQuestion } from './../app/class/question-textbox';
import { CheckBoxQuestion } from "../app/class/question-checkbox";
import { RadioButtonQuestion } from "../app/class/question-radio";
import { questions, Question } from "../assets/questions";
import { Subject } from "rxjs";

@Injectable()
export class QuestionService {
  question: any;
  questionArray: any;
  questionChanges: Subject<any> = new Subject<any>()
  constructor() {
    this.question = questions.slice();
  }

  getQuestions() {
    let allQuestions: QuestionBase<any>[] = [];
    this.question.forEach(element => {
      allQuestions.push(this.generateQuestion(element));
    });
    this.questionArray = allQuestions.sort((a, b) => a.order - b.order);
    return this.questionArray;
  }

  generateQuestion(QuestionDetail: any) {
    let beQuestion: any = [];
    switch (QuestionDetail.qtype) {
      case "DropdownQuestion":
        beQuestion = new DropdownQuestion(QuestionDetail)
        break;
      case "TextBoxQuestion":
        beQuestion = new TextBoxQuestion(QuestionDetail)
        break;
      case "CheckBoxQuestion":
        beQuestion = new CheckBoxQuestion(QuestionDetail)
        break;
      case "RadioButtonQuestion":
        beQuestion = new RadioButtonQuestion(QuestionDetail)
        break;
    }
    return beQuestion;
  }
  saveQuestion(question: Question) {
    this.questionArray.push(this.generateQuestion(question));
    this.questionChanges.next(this.questionArray);
  }

  checkKeyAlreadyExists(key: string) {
    return this.questionArray.filter(x => x.key == key).length > 0
  }

}