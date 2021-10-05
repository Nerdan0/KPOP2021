import { Component} from '@angular/core';

@Component({
  selector: 'lab3',
  templateUrl: './lab3.component.html'
  /*template: `<label>Введите имя:</label>
  <input [(ngModel)]="name" placeholder="name">
  <h1>Добро пожаловать {{name}}!</h1>`*/
  //styleUrls: ['./lab3.component.scss']
})
export class Lab3Component {
  a=0;
  b=0;
  c = Math.sqrt(this.a*this.a +this.b*this.b);
  s = this.a*this.b*0.5;
  calc($event:any):void
  {
    this.c = Math.sqrt(this.a*this.a +this.b*this.b);
    this.s = this.a*this.b*0.5;
  }
}
