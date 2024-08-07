import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {
  @Input() item: any;  // Input property to receive item data
  @Output() itemUpdated = new EventEmitter<void>();

  name: string = '';
  description: string = '';
  price: number = 0;
  additionalInfo: any = {};

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    if (this.item) {
      this.name = this.item.name;
      this.description = this.item.description;
      this.price = this.item.price;
      this.additionalInfo = this.item.additional_info || {};
    }
  }

  updateItem(action:any): void {
    if (action == 'update'){
      if (this.item) {
        const updatedItem = {
          name: this.name,
          description: this.description,
          price: this.price,
          additional_info: this.additionalInfo
        };
        let params ={id:this.item.id, item:updatedItem}
        this.inventoryService.updateItem(params).subscribe(() => {
          this.itemUpdated.emit();
          this.resetForm();
        });
      }
    }else{
      this.itemUpdated.emit();
    }
  }

  resetForm(): void {
    this.name = '';
    this.description = '';
    this.price = 0;
    this.additionalInfo = {};
  }
}