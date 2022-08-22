import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaExpComponent } from './nueva-exp.component';

describe('NuevaExpComponent', () => {
  let component: NuevaExpComponent;
  let fixture: ComponentFixture<NuevaExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
