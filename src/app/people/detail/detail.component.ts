import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppHelper } from 'src/app/app-helper';
import { PersonType, SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  keyword = AppHelper.keyword;
  personData?: PersonType;
  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadPerson(params['id']);
    });
  }

  private loadPerson(index: string) {
    this.swapiService.getPersonByIndex(index).subscribe((response) => {
      this.personData = response;
    });
  }
}
