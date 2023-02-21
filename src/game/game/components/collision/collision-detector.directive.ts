import {
  Directive,
  Output,
  Input,
  EventEmitter,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[collisionDetector]',
})
export class CollisionDetectorDirective {
  @Input() targetList: Array<HTMLElement> = [];
  @Output() collisionEvent = new EventEmitter<HTMLElement>();

  private element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  public detectCollision() {
    this.targetList.forEach((elem) => {
      if (this.checkCollision(this.element.nativeElement, elem)) {
        this.collisionEvent.emit(elem);
      }
    });
  }

  private checkCollision(
    element1: HTMLElement,
    element2: HTMLElement
  ): boolean {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  }
}
