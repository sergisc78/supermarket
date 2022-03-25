import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCleaningProductComponent } from './add-cleaning-product.component';

describe('AddCleaningProductComponent', () => {
  let component: AddCleaningProductComponent;
  let fixture: ComponentFixture<AddCleaningProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCleaningProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCleaningProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
