import { Component, OnInit } from '@angular/core';
import { ObjectType } from '../Interfaces/objectInterface';
import { DataStationService } from '../Services/data-station.service';
import { TimerService } from '../Services/timer.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {
  objectArray: Array<ObjectType>;
  pencils: ObjectType;
  erasers: ObjectType;
  desks: ObjectType;
  books: ObjectType;
  students: ObjectType;
  teachers: ObjectType;

  constructor(
    private dataStation: DataStationService,
    private timerService: TimerService
  ) {}

  ngOnInit() {
    this.pencils = {
      name: 'Pencils',
      purchased: true,
      ranks: 1,
      initialCost: 100,
      costMultiplier: 0.1,
      currentCost: 0,
      initialProd: 10,
      prodMultiplier: 2,
      currentProd: 0,
      currentTime: 0,
      maxTime: 1
    };
    this.erasers = {
      name: 'Erasers',
      purchased: false,
      ranks: 0,
      initialCost: 10000,
      costMultiplier: 0.2,
      currentCost: 0,
      initialProd: 100,
      prodMultiplier: 3,
      currentProd: 0,
      currentTime: 0,
      maxTime: 2
    };
    this.desks = {
      name: 'Desks',
      purchased: false,
      ranks: 0,
      initialCost: 1000000,
      costMultiplier: 0.4,
      currentCost: 0,
      initialProd: 1000,
      prodMultiplier: 4,
      currentProd: 0,
      currentTime: 0,
      maxTime: 3
    };
    this.books = {
      name: 'Books',
      purchased: false,
      ranks: 0,
      initialCost: 100000000,
      costMultiplier: 0.8,
      currentCost: 0,
      initialProd: 10000,
      prodMultiplier: 5,
      currentProd: 0,
      currentTime: 0,
      maxTime: 4
    };
    this.students = {
      name: 'Students',
      purchased: false,
      ranks: 0,
      initialCost: 10000000000,
      costMultiplier: 1.6,
      currentCost: 0,
      initialProd: 100000,
      prodMultiplier: 6,
      currentProd: 0,
      currentTime: 0,
      maxTime: 5
    };
    this.teachers = {
      name: 'Teachers',
      purchased: false,
      ranks: 0,
      initialCost: 1000000000000,
      costMultiplier: 3.2,
      currentCost: 0,
      initialProd: 10000000,
      prodMultiplier: 7,
      currentProd: 0,
      currentTime: 0,
      maxTime: 6
    };

    this.objectArray = [
      this.pencils,
      this.erasers,
      this.desks,
      this.books,
      this.students,
      this.teachers
    ];

    this.calculateAllCostsAndProd(this.objectArray);

    this.timerService.events.subscribe(x => {
      this.automatedOutput();
      this.calculateIncome();
    });
  }

  // Method to calculate the cost of the next rank of an object
  calculateCost(object: ObjectType) {
    let cost =
      object.currentCost +
      object.ranks * object.costMultiplier * object.initialCost;
    cost = Math.ceil(cost);
    object.currentCost = cost + object.ranks;
  }

  // Method to calculate the output of the object per event
  calculateProd(object: ObjectType) {
    const prod =
      object.currentProd +
      object.ranks * object.prodMultiplier * object.initialProd;
    object.currentProd = prod;
  }

  // Method that gets called when a new ranks is added to the object
  addRank(object: ObjectType) {
    if (this.dataStation.checkCost(object.currentCost)) {
      this.subtractCost(object.currentCost);
      object.ranks++;
      this.calculateCost(object);
      this.calculateProd(object);
    }
  }

  // Method that will run on init, figuring the cost and prod of each object
  calculateAllCostsAndProd(array: Array<ObjectType>) {
    array.forEach(object => {
      this.calculateCost(object);
      this.calculateProd(object);
    });
  }

  // Will unlock the current object if locked
  // Will eventually check to see if the player has the necessary amount to purchase
  unlock(object: ObjectType) {
    if (this.dataStation.checkCost(object.initialCost)) {
      object.purchased = true;
      object.ranks++;
      this.calculateCost(object);
      this.calculateProd(object);
    }
  }

  // Sends the generated revenue to the Player Component via the dataStation service
  addOutput(data: number) {
    this.dataStation.addOutput(data);
  }

  // Sends the cost of the player purchase to the Player Component
  subtractCost(data: number) {
    this.dataStation.addOutput(data * -1);
  }

  // If the object is purchased by the player, this will send their
  automatedOutput() {
    this.objectArray.forEach(object => {
      if (object.purchased) {
        object.currentTime += 0.1;
        if (object.currentTime >= object.maxTime) {
          object.currentTime -= object.maxTime;
          this.addOutput(object.currentProd);
        }
      }
    });
  }

  calculateIncome() {
    let value = 0;
    this.objectArray.forEach((object: ObjectType) => {
      value += object.currentProd / object.maxTime;
    });
    this.dataStation.addIncome(value);
  }
}
