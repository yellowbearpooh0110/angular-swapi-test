import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksbarComponent } from './linksbar.component';

describe('LinksbarComponent', () => {
  let component: LinksbarComponent;
  let fixture: ComponentFixture<LinksbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
