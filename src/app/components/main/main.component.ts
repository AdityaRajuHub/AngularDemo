import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {
  public user: string= "Aditya";
  constructor() { }

  ngOnInit() {
  }

}
