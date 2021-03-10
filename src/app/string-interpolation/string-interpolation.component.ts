import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = "John"
  person = {
    firstName: "Carla",
    lastName: "Doe",
    age: 100,
    address: 'Rua Padre 1002'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
