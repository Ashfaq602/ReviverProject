import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile7Component } from './profile7.component';

describe('Profile7Component', () => {
  let component: Profile7Component;
  let fixture: ComponentFixture<Profile7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Profile7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Profile7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
