import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogpost4Component } from './blogpost4.component';

describe('Blogpost4Component', () => {
  let component: Blogpost4Component;
  let fixture: ComponentFixture<Blogpost4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blogpost4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blogpost4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
