import { Component, Output, EventEmitter } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent {
  name: string = '';
  description: string = '';
  price: number = 0;
  additionalInfo: any = {};

  @Output() itemAdded = new EventEmitter<void>();

  constructor(private inventoryService: InventoryService) { }

  addItem(): void {
    if (this.name && this.description && this.price) {
      const newItem = { name: this.name, description: this.description, price: this.price, };
      let params = {id:'',item:newItem}
      this.inventoryService.addItem(params).subscribe(() => {
        this.itemAdded.emit();
        this.name = '';
        this.description = '';
        this.price = 0;
        this.additionalInfo = {};
      });
    }
  }
}
