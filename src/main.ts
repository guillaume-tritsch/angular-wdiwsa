import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { GameModule } from './game/game/game.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, GameModule],
  template: `
    <app-game></app-game>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
