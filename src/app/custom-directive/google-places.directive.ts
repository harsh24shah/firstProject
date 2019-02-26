import { Directive, OnInit, ElementRef , HostListener } from '@angular/core';


@Directive({
  selector: '[yellowHeilight]'
})

export class GooglePlacesDirective implements OnInit{
  private element: HTMLInputElement;
  private touchTimeout: any;
  constructor(private el: ElementRef) { 
    //this.el.nativeElement.style.backgroundColor = "yellow";
  }

  ngOnInit() {
   
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
   console.log('mouseenter');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    console.log('mouseleave');
  }

  @HostListener('touchstart') touchstart():void {
    this.touchTimeout = setTimeout(() => {
      this.highlight('yellow')
      console.log('touchstart');
    }, 2000); 
  }

  @HostListener('touchend') touchend():void {
    this.touchEnd();
    console.log('touchend');
  }

  @HostListener('touchcancel') touchcancel():void {
    this.touchEnd();
    console.log('touchcancel');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private touchEnd():void {
    this.highlight(null)
    clearTimeout(this.touchTimeout);
  }

  

  
}
