import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson } from '../../interfaces/IUser';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrl: './users-card-list.component.scss'
})
export class UsersCardListComponent implements OnInit {
    @Output('userEmitter') userEmitter:EventEmitter<IPerson> = new EventEmitter<IPerson>();
    usersList!:Observable<IPerson[]>;

    constructor(
        private readonly _http:UserService
    ) {}

    ngOnInit(): void {
      this.usersList = this._http.getUser();
    }

    onUserEmitter(user:IPerson) {
        this.userEmitter.emit(user);
    }
}