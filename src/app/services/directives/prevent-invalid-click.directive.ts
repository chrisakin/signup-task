import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventInvalidClick]'
})
export class PreventInvalidClickDirective {
  @Input() userId: number = 0;
  @Input() targetUserId: number = 0;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (this.userId + 1 != this.targetUserId) {
      event.preventDefault();
      event.stopPropagation();
      this.el.nativeElement.classList.add('disabled-button');
    }
  }
}
