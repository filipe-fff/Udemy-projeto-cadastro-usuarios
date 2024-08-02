import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NgModel, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appInvalidPasswordRepeated]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidPasswordRepeatedDirective,
      multi:true,
    }
  ]
})
export class InvalidPasswordRepeatedDirective implements Validator {


  @Input() password!:string|undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    
    const IS_VALUES_UNDEFINED = !this.password || !control || !control.value;
    const IS_VALUES_EQUALS = control.value === this.password;

    if(IS_VALUES_EQUALS) return null;

    return { 'invalid_password_confirm':true };

  }
}