import { Component, OnInit } from '@angular/core';

export type LinkType = {
  to: string;
  label: string;
};

@Component({
  selector: 'app-linksbar',
  templateUrl: './linksbar.component.html',
  styleUrls: ['./linksbar.component.scss'],
})
export class LinksbarComponent implements OnInit {
  links: Array<LinkType>;
  constructor() {
    this.links = [
      { to: '/films', label: 'films' },
      { to: '/people', label: 'people' },
      { to: '/planets', label: 'planets' },
      { to: '/species', label: 'species' },
      { to: '/starships', label: 'starships' },
      { to: '/vehicles', label: 'vehicles' },
    ];
  }

  ngOnInit(): void {}
}
