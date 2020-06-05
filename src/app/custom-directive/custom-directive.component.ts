import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})

export class CustomDirectiveComponent implements OnInit {
  private directiveString : string = "Demo String";
  
  constructor() { }

  ngOnInit() {

  }

  
  test(){
    alert("test alert");
  }

}