import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculate';
  num1=0;
  num2=0;
  result=0;
  op = "";

  operation=false;
  coma=false;

  sumar=false;
  restar=false;
  multiplicar=false;
  dividir=false;

  numero(num: Number): void {
    if (!this.operation && !this.coma) {
      this.num1 = Number(this.num1 + "" + num);

    } if (this.operation && !this.coma) {
      this.num2 = Number(this.num2 + "" + num);
      
    } if (this.operation && this.coma) {
      this.num2 = Number(this.num2 + "." + num);
      this.coma = false;

    } if (!this.operation && this.coma) {
      this.num1 = Number(this.num1 + "." + num);
      this.coma = false;
    }
  }

  punto(): void {
    this.coma = true;
  }

  igual(): void {
    switch (true) {
      case this.sumar: 
      this.result = (this.num1 * 1) + (this.num2 * 1);
      this.sumar = false;
      break;

      case this.restar: 
      this.result = (this.num1 * 1) - (this.num2 * 1);
      this.restar = false;
      break;

      case this.multiplicar: 
      this.result = (this.num1 * 1) * (this.num2 * 1);
      this.multiplicar = false;
      break;

      case this.dividir: 
      this.result = (this.num1 * 1) / (this.num2 * 1);
      this.dividir = false;
      break;
    }

    this.operation = false;

    this.num1 = 0;
    this.num2 = 0;
    this.coma = false;
  }

  operationn(value: String): void {
    this.operation = true;
    this.op = value + "";
    
    switch (value) {
      case "+": this.sumar = true;
      break;

      case "-": this.restar = true;
      break;

      case "*": this.multiplicar = true;
      break;

      case "/": this.dividir = true;
      break;

      case "=": this.igual();
      break;
    }
  }
}
