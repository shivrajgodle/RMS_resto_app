import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRmsComponent } from './add-rms.component';

describe('AddRmsComponent', () => {
  let component: AddRmsComponent;
  let fixture: ComponentFixture<AddRmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
