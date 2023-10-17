import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPhoneComponent } from './link-phone.component';

describe('LinkPhoneComponent', () => {
  let component: LinkPhoneComponent;
  let fixture: ComponentFixture<LinkPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
