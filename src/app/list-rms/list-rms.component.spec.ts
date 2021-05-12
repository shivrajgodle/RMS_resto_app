import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRmsComponent } from './list-rms.component';

describe('ListRmsComponent', () => {
  let component: ListRmsComponent;
  let fixture: ComponentFixture<ListRmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
