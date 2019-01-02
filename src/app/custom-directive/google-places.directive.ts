import { Directive, OnInit, ElementRef , HostListener } from '@angular/core';


@Directive({
  selector: '[yellowHeilight]'
})

export class GooglePlacesDirective implements OnInit{
  private element: HTMLInputElement;

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = "yellow";
  }

  ngOnInit() {
   
  }

  

  
}
