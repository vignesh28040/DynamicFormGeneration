import { FormArray, FormGroup } from '@angular/forms';

export class CustomValidators {
  static multipleCheckboxRequireOne(fa: FormArray) {
    let valid = false;
    
        console.log(fa.length)
        for (let x = 0; x < fa.length; ++x) {
        }
        
    // for (let x = 0; x < fa.controls.; ++x) {
    //   if (fa.at(x).value) {
    //     valid = true;
    //     break;
    //   }
    // }
    return valid ? null : {
      multipleCheckboxRequireOne: true
    };
  }
}