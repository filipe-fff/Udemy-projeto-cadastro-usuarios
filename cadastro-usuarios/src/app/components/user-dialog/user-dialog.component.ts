import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from '../../interfaces/user/user.interface';
import { CdkTable } from '@angular/cdk/table';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss',
})
export class UserDialogComponent implements OnInit {

  constructor (
    @Inject(MAT_DIALOG_DATA) public users: { userBefore:IUser, userAfter:IUser },
  ) {}

  ngOnInit() {  }
}