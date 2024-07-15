import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPerson } from '../../interfaces/IUser';


@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrl: './users-card-list.component.scss'
})
export class UsersCardListComponent {
    @Input() users!:IPerson[]|null;
    @Output('userEmitter') userEmitter:EventEmitter<IPerson> = new EventEmitter<IPerson>();


    onUserEmitter(user:IPerson) {
        this.userEmitter.emit(user);
    }
}