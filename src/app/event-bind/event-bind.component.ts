import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  buttonName = "My button";
  i = 0;
  mode: ProgressSpinnerMode = 'determinate';  
  btnEnable = true;
  values = '';
  selectDisabled = false;
  selectedOption = '';

  constructor() { }

  ngOnInit(): void {
  }
  save() {
    console.log("salvo")
  }

  inc() {
    this.i++; //coloco o this pois ele está pegando informações da mesma classe
    this.buttonName = "It was clicked " + this.i + " times";
  }

  disabled(){
    this.btnEnable = false;
    this.mode = 'indeterminate';
    setTimeout(() => {
      this.btnEnable = true;
      this.mode = 'determinate'
    }, 3000);
  }

  cbChange(checked: boolean){
    console.log("Clicado " + checked);
    this.selectDisabled = checked; //desabilita o select caso o checked estiver marcado
  }
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

  selectionChange(event : any){
    console.log(event);
    this.selectedOption = event.value;
    console.log(this.selectedOption);
  }
  
  
}
