export interface Options {
    key: string,
    value?: any,
    text: string
}
export interface Question {
    qtype: string,
    key: string,
    label: string,
    options?: Options[],
    order?: number,
    required?: true,
    minimum?:any
}
export const questions: Question[] = [{
    qtype: 'DropdownQuestion',
    key: 'brave',
    label: 'Bravery Rating',
    options: [
        { key: 'solid', text: 'Solid' },
        { key: 'great', text: 'Great' },
        { key: 'good', text: 'Good' },
        { key: 'unproven', text: 'Unproven' }
    ],
    order: 3,
    required: true
},
{
    qtype: 'TextBoxQuestion',
    key: 'firstName',
    label: 'First name',
    order: 1,
    required: true
},
{
    qtype: 'TextBoxQuestion',
    key: 'emailAddress',
    label: 'Email',
    order: 2,
    required: true
},
{
    qtype: 'CheckBoxQuestion',
    key: 'hobbies',
    label: 'Hobbies',
    options: [
        { key: '1', value: false, text: 'Playing' },
        { key: '2', value: false, text: 'Watching TV' },
        { key: '3', value: false, text: 'Listening Music' },
        { key: '4', value: false, text: 'Reading Books' }
    ],
    order: 4,
    required: true,
    minimum:2
},
{
    qtype: 'RadioButtonQuestion',
    key: 'gender',
    label: 'Gender',
    options: [
        { key: '1', text: 'Male' },
        { key: '2', text: 'Female' }
    ],
    order: 5,
    required: true
}
];