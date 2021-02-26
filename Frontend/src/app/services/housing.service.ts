import { IProperty } from './../property/IProperty.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly propertiesArray: Array<IProperty>;
  constructor(private http: HttpClient) {
    this.propertiesArray = [];
  }

  getAllProperties(): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        for (const id in data) {
          this.propertiesArray.push(data[id]);
        }
        return this.propertiesArray;
      })
    );
  }
}
