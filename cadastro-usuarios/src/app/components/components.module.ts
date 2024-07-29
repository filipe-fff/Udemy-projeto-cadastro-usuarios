import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { AngularMaterialModule } from '../angular-material.module';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    DirectivesModule
    
  ],
  declarations: [
    UsersListComponent,
    UserFormComponent,
  ],
  exports: [
    UsersListComponent,
    UserFormComponent,
    AngularMaterialModule,
    DirectivesModule,
  ]
})
export class ComponentsModule { }
