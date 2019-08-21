import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStationService {
  private output = new Subject();
  private output$ = this.output.asObservable();

  private playerAmount: number;

  constructor() {
    this.playerAmount = 0;
  }

  public get grabOutput() {
    return this.output$;
  }

  // Adds revenue to the Player Component
  public addOutput(data: number) {
    this.output.next(data);
  }

  // Takes in data from the Player Component so it can be used to check the costs from Object Componenet
  public addToAmount(data: number) {
    this.playerAmount = data;
  }

  // Method used by the Object Component to verify whether or not the player has enough to purchase an object or rank
  public checkCost(data: number) {
    if (this.playerAmount >= data) {
      return true;
    } else {
      return false;
    }
  }
}
