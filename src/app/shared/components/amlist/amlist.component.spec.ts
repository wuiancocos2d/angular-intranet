import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmlistComponent } from './amlist.component';

describe('AmlistComponent', () => {
  let component: AmlistComponent;
  let fixture: ComponentFixture<AmlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
