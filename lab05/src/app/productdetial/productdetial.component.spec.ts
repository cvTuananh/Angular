import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetialComponent } from './productdetial.component';

describe('ProductdetialComponent', () => {
  let component: ProductdetialComponent;
  let fixture: ComponentFixture<ProductdetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
