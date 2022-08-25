import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDepartamentComponent } from './product-departament.component';

describe('ProductDepartamentComponent', () => {
  let component: ProductDepartamentComponent;
  let fixture: ComponentFixture<ProductDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDepartamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
