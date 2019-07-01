import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appImageResize]'
})
export class ImageResizeDirective implements OnInit {

  @Input() isWeekly = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.isWeekly) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'width', '20px');
      this.renderer.setStyle(this.elementRef.nativeElement, 'height', '20px');
      return;
    }
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', '60px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', '60px');
  }
}
