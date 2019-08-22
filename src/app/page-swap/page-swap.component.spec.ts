import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSwapComponent } from './page-swap.component';

describe('PageSwapComponent', () => {
  let component: PageSwapComponent;
  let fixture: ComponentFixture<PageSwapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSwapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
