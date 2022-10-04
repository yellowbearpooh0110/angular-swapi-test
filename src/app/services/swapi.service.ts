import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AppHelper } from 'src/app/app-helper';

export type PersonType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
};

export type PeopleType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PersonType>;
};

export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: Array<string>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
};

export type PlanetsType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PlanetType>;
};

export type FilmType = {
  title: string;
  episode_id: 4;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: string;
  edited: string;
  url: string;
};

export type FilmsType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<FilmType>;
};

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private Http: HttpClient) {}

  getFunction<DataType extends any>(url: string) {
    return this.Http.get<DataType>(url);
  }

  getPeople(keyword?: string) {
    return this.Http.get<PeopleType>(
      `${AppHelper.apiURL}people${keyword ? `/?search=${keyword}` : ''}`
    );
  }

  getPersonByIndex(index: string) {
    return this.Http.get<PersonType>(`${AppHelper.apiURL}people/${index}`);
  }

  getPlanets(keyword?: string) {
    return this.Http.get<PlanetsType>(
      `${AppHelper.apiURL}planets${keyword ? `/?search=${keyword}` : ''}`
    );
  }

  getPlanetByIndex(index: string) {
    return this.Http.get<PlanetType>(`${AppHelper.apiURL}planets/${index}`);
  }

  getFilms(keyword?: string) {
    return this.Http.get<FilmsType>(
      `${AppHelper.apiURL}films${keyword ? `/?search=${keyword}` : ''}`
    );
  }

  getFilmByIndex(index: string) {
    return this.Http.get<FilmType>(`${AppHelper.apiURL}films/${index}`);
  }
}
