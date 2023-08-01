import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorylistComponent } from './inventorylist.component';

describe('InventorylistComponent', () => {
  let component: InventorylistComponent;
  let fixture: ComponentFixture<InventorylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorylistComponent]
    });
    fixture = TestBed.createComponent(InventorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
