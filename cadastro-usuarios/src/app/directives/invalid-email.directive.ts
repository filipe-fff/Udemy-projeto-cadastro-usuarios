import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { UsersPlaceholderListService } from '../services/users-placeholder-list.service';
import { map, Observable } from 'rxjs';

@Directive({
  selector: '[appInvalidEmail]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef( () => InvalidEmailDirective ),
      multi: true,
    }
  ]
})
export class InvalidEmailDirective implements AsyncValidator {

  constructor(
    private readonly userPlaceholderService: UsersPlaceholderListService
  ) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/;
    return this.userPlaceholderService.getUsersPlaceholderList().pipe(
      map( (usersResponse) => {
        const email_repeated = usersResponse.find( (user) => user.email.toLocaleLowerCase() === control.value.toLocaleLowerCase() );
        const email_invalid = !email_pattern.test(control.value);

        if(email_repeated) {
          return { 'invalidEmailPattern':true };

        }else if(email_invalid) {
          return { 'invalidEmail':true };
        }

        return null;
      } )
    );
  }
}