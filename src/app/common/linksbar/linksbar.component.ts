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
      { to: '/people', label: 'people' },
      { to: '/planets', label: 'planets' },
      { to: '/films', label: 'films' },
      { to: '/species', label: 'species' },
      { to: '/vehicles', label: 'vehicles' },
      { to: '/starships', label: 'starships' },
    ];
  }

  ngOnInit(): void {}
}
