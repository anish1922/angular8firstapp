import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  _celcius: number;
  _fehrenheit: number;

  constructor() { }

  ngOnInit(): void {
  }
  covertFtoC(event: number) {

    this._celcius = (event - 32) * (5.0/9.0);

  }

  convertCtoF(event: number) {
    this._fehrenheit = event * (9.0 / 5.0) + 32;
    console.log(this._fehrenheit);
  }
}
