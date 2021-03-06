import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string) {
    alertyfy.confirm(message);
  }

  error(message: string) {
    alertyfy.error(message);
  }
}
