import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public songAdded$ = new EventEmitter<string>();

  constructor() {}

  emitSearchEvent(keyword: string): void {
    this.songAdded$.emit(keyword);
  }
}
