import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  items: any[] = [];
  selectedItem: any;  // Property to hold the currently selected item for editing
  edit = false;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.edit  =false;
    this.inventoryService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  deleteItem(id: string): void {  // Ensure id is treated as a string
    // let params = {id: item_id,item:{}}
    this.inventoryService.deleteItem(id).subscribe(() => {
      this.loadItems();
    });
  }

  editItem(item: any): void {
    this.edit = true
    this.selectedItem = item;  // Set the item to be edited
  }

  clearSelection(): void {
    this.selectedItem = null;  // Clear the selected item
  }
}