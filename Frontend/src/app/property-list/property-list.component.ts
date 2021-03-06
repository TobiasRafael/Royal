
import { IProperty } from './../property/IProperty.interface';
import { HousingService } from '../services/housing/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: IProperty[];

  constructor(private route: ActivatedRoute, private housing: HousingService) {
    this.properties = [];
  }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.housing.getAllProperties(+this.SellRent).subscribe(
      data => {
        this.properties = data;
      }, error => {
        console.log(error);
      }
    )
  }

}
