import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor(private ref: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
//    this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventListener: Event) {
   // this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventListener: Event) {
 //   this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
