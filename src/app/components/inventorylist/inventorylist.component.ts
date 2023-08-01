import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.css'],
})
export class InventorylistComponent implements OnInit {
  inventorylist: { image: string; name: string }[] = [];

  ngOnInit(): void {
    this.inventorylist.push({ image: 'image', name: 'laptop' });
    this.inventorylist.push({ image: 'image', name: 'pen' });
    this.inventorylist.push({ image: 'image', name: 'monitor' });
    this.inventorylist.push({ image: 'image', name: 'chair' });
  }

  @Output() selectedItemName: EventEmitter<string> = new EventEmitter();

  addItem(itemName : string){
    this.selectedItemName.emit(itemName);
    console.log("selected item: " + itemName);
  }
}
