import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: true
})
export class HighlightDirective {
    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') enter() {
        this.el.nativeElement.style.background = 'yellow';
    }

    @HostListener('mouseleave') leave() {
        this.el.nativeElement.style.background = '';
    }
}
