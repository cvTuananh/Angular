import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerColorComponent } from './server-color.component';

describe('ServerColorComponent', () => {
  let component: ServerColorComponent;
  let fixture: ComponentFixture<ServerColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
