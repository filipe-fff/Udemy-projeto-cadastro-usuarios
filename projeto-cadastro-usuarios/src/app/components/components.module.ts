import { NgModule } from "@angular/core";
import { UserBeforeAndAfterDialogComponent } from './user-before-and-after-dialog/user-before-and-after-dialog.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersCardListComponent } from './users-card-list/users-card-list.component';

@NgModule({
    declarations: [
        UserBeforeAndAfterDialogComponent,
        UserFormComponent,
        UsersCardListComponent,
    ],
    exports: [
        UserBeforeAndAfterDialogComponent,
        UserFormComponent,
        UsersCardListComponent,
    ],
})
export class ComponentsModule {}