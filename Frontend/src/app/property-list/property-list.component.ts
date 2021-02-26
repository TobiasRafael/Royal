import { IProperty } from './../property/IProperty.interface';
import { HousingService } from './../services/housing.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty>;

  constructor(private housing: HousingService) { 
    this.properties = [];
  }

  ngOnInit(): void {
    this.housing.getAllProperties().subscribe(
      data => {
        this.properties = data;
      }, error => {
        console.log(error);
      }
    )
  }

}
