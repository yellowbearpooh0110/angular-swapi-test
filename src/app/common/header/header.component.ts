import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  lastSearches: Array<{ keyword: string; link: string }> = [];
  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {}

  handleSearch(event: MouseEvent, keyword: string): void {
    event.preventDefault();
    const path = this.router.url.split('?')[0];
    if (!['/films', '/people'].includes(path)) return;
    this.searchService.emitSearchEvent(keyword);
    this.lastSearches.push({ keyword, link: path });
    if (this.lastSearches.length > 4) this.lastSearches.shift();
  }
}
