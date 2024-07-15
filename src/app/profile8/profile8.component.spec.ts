import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile8Component } from './profile8.component';

describe('Profile8Component', () => {
  let component: Profile8Component;
  let fixture: ComponentFixture<Profile8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Profile8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Profile8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
