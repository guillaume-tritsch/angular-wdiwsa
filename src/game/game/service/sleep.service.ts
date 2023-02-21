import { Injectable } from '@angular/core';

@Injectable()
export class SleepService {
  constructor() {}

  sleep = (ms) => new Promise((res) => setTimeout(res, ms));
}
