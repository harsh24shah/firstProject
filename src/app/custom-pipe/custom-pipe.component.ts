import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})


export class CustomPipeComponent implements OnInit {

  birthday = new Date(1988, 3, 15); 
  simpleString = "This is a simple string";

  constructor() { }

  ngOnInit() {
  }

}
