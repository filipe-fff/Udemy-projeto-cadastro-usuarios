import { NgModule } from '@angular/core';
import { InvalidUserNameDirective } from './invalid-user-name.directive';
import { InvalidEmailDirective } from './invalid-email.directive';


@NgModule({
    declarations: [
        InvalidUserNameDirective,
        InvalidEmailDirective,
    ],
    exports: [
        InvalidUserNameDirective,
        InvalidEmailDirective,
    ],
})
export class DirectivesModule {}