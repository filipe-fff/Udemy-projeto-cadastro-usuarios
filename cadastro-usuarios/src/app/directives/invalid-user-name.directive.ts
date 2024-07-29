import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { UsersPlaceholderListService } from '../services/users-placeholder-list.service';
import { map, Observable } from 'rxjs';

@Directive({
  selector: '[appInvalidUserName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => InvalidUserNameDirective),
      multi: true,
    }
  ]
})
export class InvalidUserNameDirective implements AsyncValidator{

  constructor(
    private readonly userPlaceholderService: UsersPlaceholderListService
  ) { }

  validate(control: AbstractControl <any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    
    return this.userPlaceholderService.getUsersPlaceholderList().pipe(
      map((users) => {

        const hasUser = users.find( (user) => {
          return user.username.toLocaleLowerCase() === control.value.toLocaleLowerCase();
        });

        return hasUser? {'invalidUserPlaceholder':true} : null;
      })
    )
  }
}