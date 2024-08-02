import { NgModule } from '@angular/core';
import { InvalidUserNameDirective } from './invalid-user-name.directive';
import { InvalidEmailDirective } from './invalid-email.directive';
import { InvalidPasswordStrengthDirective } from './invalid-password-strength.directive';
import { InvalidPasswordRepeatedDirective } from './invalid-password-repeated.directive';


@NgModule({
    declarations: [
        InvalidUserNameDirective,
        InvalidEmailDirective,
        InvalidPasswordStrengthDirective,
        InvalidPasswordRepeatedDirective,
    ],
    exports: [
        InvalidUserNameDirective,
        InvalidEmailDirective,
        InvalidPasswordStrengthDirective,
        InvalidPasswordRepeatedDirective,
    ],
})
export class DirectivesModule {}