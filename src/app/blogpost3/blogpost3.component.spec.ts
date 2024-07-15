import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogpost3Component } from './blogpost3.component';

describe('Blogpost3Component', () => {
  let component: Blogpost3Component;
  let fixture: ComponentFixture<Blogpost3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blogpost3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blogpost3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
