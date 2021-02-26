import { IProperty } from './IProperty.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  @Input() property!: IProperty

  constructor() { }

  ngOnInit(): void {

  }

}
