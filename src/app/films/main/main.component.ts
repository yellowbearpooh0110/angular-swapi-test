import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

import { SwapiService } from 'src/app/services/swapi.service';

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

  constructor(
    private swapiService: SwapiService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {
    this.searchService.songAdded$.subscribe((keyword) => {
      this.swapiService.getFilms(keyword).subscribe((response) => {
        this.filmsData = [];
        response.results.forEach((_film) => {
          this.filmsData.push({
            id: _film.url.match(/[0-9]+/g)?.pop() || '',
            title: _film.title,
            director: _film.director,
            release_date: _film.release_date,
          });
        });
      });
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.loadFilms(params['search']);
    });
  }

  private loadFilms(keyword?: string) {
    this.swapiService.getFilms(keyword).subscribe((response) => {
      this.filmsData = [];
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
