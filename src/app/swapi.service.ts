import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppHelper } from './app-helper';
import { Observable } from 'rxjs';

export type PeopleType = {
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

export type GetPeopleResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PeopleType>;
};

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private Http: HttpClient) {}

  getPeople(): Observable<GetPeopleResponseType> {
    return this.Http.get<GetPeopleResponseType>(`${AppHelper.apiURL}people`);
  }
}
