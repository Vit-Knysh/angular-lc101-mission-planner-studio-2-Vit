import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: string [] = ['Command Module', 'Space Camera', 'Food', 'Oxygen Tanks'];
  itemBeingEdited: string = '';

  constructor() { }

  ngOnInit() {
  }

  edit (item: string) {
    this.itemBeingEdited = item;
    }

}
