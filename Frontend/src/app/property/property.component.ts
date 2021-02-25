import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  Property: any = {
    "Id": 1,
    "Name": "Penelope House",
    "Type": "House",
    "Price": 12000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
