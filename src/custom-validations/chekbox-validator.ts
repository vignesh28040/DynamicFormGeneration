import { FormArray } from "@angular/forms";

export const checkboxMinimumValidation = function (minvalue: number) {
    return function (control: FormArray) {
        let count = control.controls.filter(x => x.value == true).length;
        let gg=control.controls.every;
        if (count < minvalue)
            return { nomatch: true };
        return null;
    };
}