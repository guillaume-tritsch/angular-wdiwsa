import { Directive, ElementRef } from '@angular/core';
import { SleepService } from './../../service/sleep.service';

@Directive({
  selector: '[moveDown]',
  providers: [SleepService],
})
export class MoveDownDirective {
  topPos: number = 0;

  constructor(public element: ElementRef, public sleepService: SleepService) {
    element.nativeElement.style.background = 'black';
    element.nativeElement.style.height = '100px';
    element.nativeElement.style.width = '100px';
    element.nativeElement.style.position = 'absolute';
    element.nativeElement.style.top = this.topPos + 'px';
    (async () => {
      while (true) {
        await sleepService.sleep(10);
        this.topPos += 10;
        element.nativeElement.style.top = this.topPos + 'px';
      }
    })();
  }
}
