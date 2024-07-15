import { Component, OnChanges, OnInit } from '@angular/core';
import { IPerson } from '../../interfaces/IUser';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {
    UsersList!:Observable<IPerson[]>;
    user!:IPerson;
    

    constructor(
      private readonly _usersListObsercable:UserService
    ) {}
    ngOnInit() {
      this.UsersList = this._usersListObsercable.getUser();
    }
    ngOnChanges() {
      
    }
}