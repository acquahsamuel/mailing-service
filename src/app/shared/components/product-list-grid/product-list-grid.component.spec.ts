import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListGridComponent } from './product-list-grid.component';

describe('ProductListGridComponent', () => {
  let component: ProductListGridComponent;
  let fixture: ComponentFixture<ProductListGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
