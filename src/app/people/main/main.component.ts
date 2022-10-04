import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlanetType, SwapiService } from 'src/app/swapi.service';

export type PeopleDataType = {
  id: string;
  name: string;
  homeworld: Observable<PlanetType>;
  height: string;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  peopleData: Array<PeopleDataType> = [];
  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  private loadPeople() {
    this.swapi.getPeople().subscribe((response) => {
      response.results.forEach((_person) => {
        this.peopleData.push({
          id: _person.url.match(/[0-9]+/g)?.pop() || '',
          name: _person.name,
          homeworld: this.swapi.getFunction<PlanetType>(_person.homeworld),
          height:
            Number(_person.height) < 100
              ? 'low'
              : Number(_person.height) > 200
              ? 'high'
              : 'normal',
        });
      });
    });
  }
}
