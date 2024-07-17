import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { IPerson } from '../../interfaces/IUser';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import {provideNativeDateAdapter} from '@angular/material/core';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  providers: [
    provideNativeDateAdapter()
  ]
})
export class UserFormComponent implements OnInit, OnChanges {
    @ViewChild('form_register') form!:IPerson;
    displayColumnsMusic:string[] = ["Título", "Banda", "Gênero", "Favorita"];
    
    ngOnInit() {
      
    }
    ngOnChanges() {
      
    }
    onUser(user:IPerson) {
      
    }
    onSubmit(userForm:IPerson) {
      console.log(userForm);
    }
}