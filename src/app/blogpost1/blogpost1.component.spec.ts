import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogpost1Component } from './blogpost1.component';

describe('Blogpost1Component', () => {
  let component: Blogpost1Component;
  let fixture: ComponentFixture<Blogpost1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blogpost1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blogpost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
