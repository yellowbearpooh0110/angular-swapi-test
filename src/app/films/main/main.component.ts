import { Component, OnInit } from '@angular/core';

import { SwapiService } from 'src/app/swapi.service';

export type FilmDataType = {
  id: string;
  title: string;
  director: string;
  release_date: string;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  filmsData: Array<FilmDataType> = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  private loadFilms() {
    this.swapiService.getFilms().subscribe((response) => {
      response.results.forEach((_film) => {
        this.filmsData.push({
          id: _film.url.match(/[0-9]+/g)?.pop() || '',
          title: _film.title,
          director: _film.director,
          release_date: _film.release_date,
        });
      });
    });
  }
}
