import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "House 1",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "House 2",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 3,
      "Name": "House 3",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 4,
      "Name": "House 4",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 5,
      "Name": "House 5",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 6,
      "Name": "House 6",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 7,
      "Name": "House 7",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 8,
      "Name": "House 8",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 9,
      "Name": "Rafa House",
      "Type": "House",
      "Price": 12000
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
