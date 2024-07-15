import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogpost2Component } from './blogpost2.component';

describe('Blogpost2Component', () => {
  let component: Blogpost2Component;
  let fixture: ComponentFixture<Blogpost2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blogpost2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blogpost2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
