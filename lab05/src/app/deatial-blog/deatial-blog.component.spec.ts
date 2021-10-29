import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatialBlogComponent } from './deatial-blog.component';

describe('DeatialBlogComponent', () => {
  let component: DeatialBlogComponent;
  let fixture: ComponentFixture<DeatialBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatialBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatialBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
