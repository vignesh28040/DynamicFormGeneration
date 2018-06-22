import { QuestionBase } from './question-base';

export class CheckBoxQuestion extends QuestionBase<string> {
    controlType = 'checkbox';
    options: { key: string, value: boolean, text: string }[] = [];
    minimum: any;

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.minimum = options['minimum'];
        this.options.forEach((element) => {
            if (!element.value)
                element.value = false;
        })
    }
}