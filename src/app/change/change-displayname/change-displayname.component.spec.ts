import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDisplaynameComponent } from './change-displayname.component';

describe('ChangeDisplaynameComponent', () => {
  let component: ChangeDisplaynameComponent;
  let fixture: ComponentFixture<ChangeDisplaynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDisplaynameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDisplaynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
