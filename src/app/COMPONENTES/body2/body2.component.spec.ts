import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BODY2Component } from './body2.component';

describe('BODY2Component', () => {
  let component: BODY2Component;
  let fixture: ComponentFixture<BODY2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BODY2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BODY2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
