import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DathangsComponent } from './dathangs.component';

describe('DathangsComponent', () => {
  let component: DathangsComponent;
  let fixture: ComponentFixture<DathangsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DathangsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DathangsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
