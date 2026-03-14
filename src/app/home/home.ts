import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  fullName: string = "Hoang";
  age: number = 20;

  sayHello() {
    alert("Xin chào Angular ");
}
}
