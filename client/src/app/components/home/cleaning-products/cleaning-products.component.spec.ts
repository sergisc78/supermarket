import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningProductsComponent } from './cleaning-products.component';

describe('CleaningProductsComponent', () => {
  let component: CleaningProductsComponent;
  let fixture: ComponentFixture<CleaningProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
