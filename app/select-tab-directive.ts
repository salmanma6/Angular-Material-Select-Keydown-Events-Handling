import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appSelectTab]'
})
export class SelectTabDirective {
mouseThere=false;
constructor(private el: ElementRef) { console.log('init in directive') }
@HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(this.mouseThere && event.code.toLowerCase() == "tab"){
      // console.log(event)
    // console.log(this.el)
    let wholeValue=this.el.nativeElement.getAttribute('ng-reflect-value').split("-");
    let value=wholeValue[0];
    let i=parseInt(wholeValue[1]);
    console.log(`You pressed tab on ${i+1} option whose value is ${value}`)

    }
}
@HostListener('mouseenter', ['$event']) mouseEnterHandler(event: MouseEvent) {
 // console.log("Mouse Enter")
   // console.log(event)
    this.mouseThere=true;
}
@HostListener('mouseleave', ['$event']) mouseLeaveHandler(event: MouseEvent) {
    //console.log("Mouse leave")
    //console.log(event)
   this.mouseThere=false;
}

}