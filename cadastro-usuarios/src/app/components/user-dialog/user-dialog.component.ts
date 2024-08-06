import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss',
})
export class UserDialogComponent {
  @Output() userSalveEmitter:EventEmitter<void> = new EventEmitter<void>();

  constructor (
    @Inject(MAT_DIALOG_DATA) public users: { userBefore:IUser, userAfter:IUser },
  ) {}

  onUserSave() {
    this.userSalveEmitter.emit();
  }
}