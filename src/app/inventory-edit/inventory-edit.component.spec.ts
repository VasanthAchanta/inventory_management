import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryEditComponent } from './inventory-edit.component';

describe('InventoryEditComponent', () => {
  let component: InventoryEditComponent;
  let fixture: ComponentFixture<InventoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
