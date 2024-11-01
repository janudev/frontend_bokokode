import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSmallCardComponent } from './product-small-card.component';

describe('ProductSmallCardComponent', () => {
  let component: ProductSmallCardComponent;
  let fixture: ComponentFixture<ProductSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSmallCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
