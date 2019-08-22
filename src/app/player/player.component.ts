import { Component, OnInit } from '@angular/core';
import { Agent } from '../Interfaces/objectInterface';
import { DataStationService } from '../Services/data-station.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: Agent;
  playerFound: boolean;

  constructor(private dataStation: DataStationService) { }

  ngOnInit() {
    this.playerFound = false;
    this.player = {
      name: '',
      amount: 0,
      incomePerEvent: 0
    };
    this.dataStation.grabOutput.subscribe((data: number) => {
      this.changeAmount(data);
    });
    this.dataStation.grabIncome.subscribe((data: number) => {
      this.player.incomePerEvent = data;
    });
  }

  // this method adds or subtracts from the amount variable, and then passes that value to the dataStation service
  changeAmount(data: number) {
    this.player.amount += data;
    this.dataStation.addToAmount(this.player.amount);
  }
}
