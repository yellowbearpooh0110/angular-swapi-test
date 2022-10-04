import { Component, OnInit } from '@angular/core';

import { SwapiService } from 'src/app/swapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.swapi.getPeople().forEach((val) => {
      console.log(val);
    });
    // console.log(this.swapi.Test());
  }
}
