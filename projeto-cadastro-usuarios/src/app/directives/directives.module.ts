import { NgModule } from "@angular/core";
import { CredentialsValidatorDirective } from "./credentials-validator.directive";
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { PasswordConfirmationValidatorDirective } from './password-confirmation-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';

@NgModule({

    declarations: [
      CredentialsValidatorDirective,
      EmailPatternValidatorDirective,
      PasswordConfirmationValidatorDirective,
      PasswordStrengthValidatorDirective,
    ],
    exports: [
      CredentialsValidatorDirective,
      EmailPatternValidatorDirective,
      PasswordConfirmationValidatorDirective,
      PasswordStrengthValidatorDirective,
    ],
})
export class DirectivesModule {}