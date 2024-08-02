import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { AngularMaterialModule } from '../angular-material.module';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData( localePt, 'pt-br' );



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
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    }
  ]
})
export class ComponentsModule { }
