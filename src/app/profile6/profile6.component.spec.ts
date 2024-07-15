import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile6Component } from './profile6.component';

describe('Profile6Component', () => {
  let component: Profile6Component;
  let fixture: ComponentFixture<Profile6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Profile6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Profile6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
