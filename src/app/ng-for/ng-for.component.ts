import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0;

  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Fortaleza", state: "CE"},
    {name: "Curitiba", state: "PR"},
    {name: "Rio de Janeiro", state: "RJ"},
  ];

  clients = [] as any;

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.clients.push(
      {
      name: this.name,
      address: this.address,
      city: this.city,
      age: this.age,
      phone: this.phone
    }
  );
  console.log("Vetor " + this.clients)

  this.cancel();
  }

  cancel(){
    this.name = "";
    this.address = "";
    this.city = "";
    this.age = 0;
    this.phone = "";
  }

  delete(i : number){
    console.log("delete: " + i);
      this.clients.splice(i, 1)
  }
}
