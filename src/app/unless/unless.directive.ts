import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input('appUnless') set unless(condition: boolean) {
    if (!condition) {
      this.vsRef.createEmbeddedView(this.ref)
    } else {
      this.vsRef.clear();
    }
  } 

  constructor(private ref: TemplateRef<any>, private vsRef: ViewContainerRef) { }

}
