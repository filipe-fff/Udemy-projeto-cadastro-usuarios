import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { getProgressBarValue } from '../../utils/getProgressBarValue';
import { NgModel } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { getDateEn } from '../../utils/getDateEn';
import { getDatePtBr } from '../../utils/getDatePtBr';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  providers: [ provideNativeDateAdapter() ],
})
export class UserFormComponent implements OnChanges {
  @Input() userSelected: IUser = {} as IUser;

  progressBarValue:number = 0;
  userDate:Date|null = new Date();

  ngOnChanges() {
    this.getProgressBar(this.userSelected.password)
    this.setUserDateEn(this.userSelected.birthDate);
  }

  getProgressBar(value:string|undefined) {
    if(value) this.progressBarValue = getProgressBarValue(value);
  }

  setUserDateEn(date:string) {
    this.userDate = getDateEn(date);
  }

  setUserDatePtBr(date:Date|null) {
    if(!date) return;

    this.userSelected.birthDate = getDatePtBr(date);

    console.log(this.userSelected.birthDate);
  }
}