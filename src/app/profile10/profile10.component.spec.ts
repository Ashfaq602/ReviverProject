import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile10Component } from './profile10.component';

describe('Profile10Component', () => {
  let component: Profile10Component;
  let fixture: ComponentFixture<Profile10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Profile10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Profile10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
