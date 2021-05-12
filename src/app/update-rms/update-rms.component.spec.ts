import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRmsComponent } from './update-rms.component';

describe('UpdateRmsComponent', () => {
  let component: UpdateRmsComponent;
  let fixture: ComponentFixture<UpdateRmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
