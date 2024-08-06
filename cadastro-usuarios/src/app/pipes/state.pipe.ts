import { Pipe, PipeTransform } from '@angular/core';
import { StatesService } from '../services/states.service';
import { IState } from '../interfaces/state.interface';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  constructor(
    private readonly _statesService:StatesService,
  ) {}

  transform(stateID:number): string | null {
    const state = this._statesService.getStateDescription(stateID);
    
    return state;
  }
}