import { User } from './../../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  AddUser(user: User){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users') || '{}');
      users = [user, ...[users]];
    }else {
      users = [user]
    }
    localStorage.setItem('Users', JSON.stringify(user));
  }
}
