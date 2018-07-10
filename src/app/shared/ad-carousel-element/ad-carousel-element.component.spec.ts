import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCarouselElementComponent } from './ad-carousel-element.component';

describe('AdCarouselElementComponent', () => {
  let component: AdCarouselElementComponent;
  let fixture: ComponentFixture<AdCarouselElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdCarouselElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCarouselElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
