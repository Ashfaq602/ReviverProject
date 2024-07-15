import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile9Component } from './profile9.component';

describe('Profile9Component', () => {
  let component: Profile9Component;
  let fixture: ComponentFixture<Profile9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Profile9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Profile9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
