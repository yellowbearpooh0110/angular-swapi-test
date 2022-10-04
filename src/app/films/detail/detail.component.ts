import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppHelper } from 'src/app/app-helper';
import { FilmType, SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  keyword = AppHelper.keyword;
  filmData?: FilmType;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadFilm(params['id']);
    });
  }

  private loadFilm(index: string) {
    this.swapiService.getFilmByIndex(index).subscribe((response) => {
      this.filmData = response;
    });
  }
}
