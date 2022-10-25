import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-age',
  templateUrl: './enter-age.component.html',
  styleUrls: ['./enter-age.component.css']
})
export class EnterAgeComponent implements OnInit {
  age : number = 0;
  adult : number = 3;
  name: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  checkAge(){
    if(this.age >= 18){
      this.adult = 1;
    }
    if(this.age < 18){
      this.adult = 0;
    }
  }


}
