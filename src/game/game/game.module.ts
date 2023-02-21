import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { MoveDownDirective } from './components/move/moveDown.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [GameComponent, MoveDownDirective],
  exports: [GameComponent],
})
export class GameModule {}
