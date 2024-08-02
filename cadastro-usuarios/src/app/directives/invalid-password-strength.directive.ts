import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import * as zxcvbn from 'zxcvbn';


@Directive({
  selector: '[appInvalidPasswordStrength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidPasswordStrengthDirective,
      multi: true,
    }
  ]
})
export class InvalidPasswordStrengthDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    
    if(!control || !control.value) return null;
    
    const validate = zxcvbn.default(control.value);

    if( validate.score <= 3 ){
      return { 'invalid-strength': true };
    }

    return null;
  }

}