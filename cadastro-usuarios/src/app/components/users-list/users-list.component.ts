import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
    @Input() usersList!: IUser[];
    @Output() userSelectedEmitter: EventEmitter<number> = new EventEmitter<number>();


    onUserSelected(i:number) {
        this.userSelectedEmitter.emit(i);
    }
}