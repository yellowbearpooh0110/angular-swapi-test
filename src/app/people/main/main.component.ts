import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { AppHelper } from 'src/app/app-helper';
import { SearchService } from 'src/app/services/search.service';
import { PlanetType, SwapiService } from 'src/app/services/swapi.service';

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

  constructor(
    private swapiService: SwapiService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {
    this.searchService.songAdded$.subscribe((keyword) => {
      AppHelper.keyword = keyword;
      this.swapiService.getPeople(keyword).subscribe((response) => {
        this.peopleData = [];
        response.results.forEach((_person) => {
          this.peopleData.push({
            id: _person.url.match(/[0-9]+/g)?.pop() || '',
            name: _person.name,
            homeworld: this.swapiService.getFunction<PlanetType>(
              _person.homeworld
            ),
            height:
              Number(_person.height) < 100
                ? 'low'
                : Number(_person.height) > 200
                ? 'high'
                : 'normal',
          });
        });
      });
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.loadPeople(params['search']);
      AppHelper.keyword = params['search'];
    });
  }

  private loadPeople(keyword?: string) {
    this.swapiService.getPeople(keyword).subscribe((response) => {
      this.peopleData = [];
      response.results.forEach((_person) => {
        this.peopleData.push({
          id: _person.url.match(/[0-9]+/g)?.pop() || '',
          name: _person.name,
          homeworld: this.swapiService.getFunction<PlanetType>(
            _person.homeworld
          ),
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
