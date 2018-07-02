import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  hello: string;
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: any;

  constructor() {
    console.log('constructor ran');
  }

  ngOnInit() {
    console.log('ngon init ran');


    this.name = 'Harsha';
    this.age = 30;
    this.address = {
      street : '50 xyz street',
      city : 'Atlanta',
      state: 'Georgia'
    };
    this.hobbies = ['write code', 'play games', 'read articles'];
    this.hello = 'hello';
  }

  onClick() {
    this.name = 'Ram';
    this.hobbies.push('New Hobbie');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    // console.log(hobby);
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }

    }
    this.hobbies.pop(hobby);
  }

}


interface Address {
    street: string;
    city: string;
    state: string;
  }
