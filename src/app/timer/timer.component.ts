import {Component} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent {
  time = 1500;
  loops = 0;
  interval;

  constructor() {
  }

  start() {
    this.interval = setInterval(() => {
      this.time = this.time - 1;
      if (this.time === 0) {
        clearInterval(this.interval);
        if (this.loops === 8) {
          this.time = 30 * 60;
          this.loops = 0;
        }
        if (this.loops % 2 === 0) {
          this.time = 5 * 60;
        } else {
          this.time = 25 * 60;
        }
        this.loops++;
        // this.ring();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.time = 1500;
  }

  pause() {
    clearInterval(this.interval);
    this.interval = null;
  }

  showMessage(loop: number): string {
    if (this.loops === 8) {
      return 'Long break';
    }
    if (this.loops % 2 === 0) {
      return 'Work time';
    } else {
      return 'Short break';
    }
  }

  ring() {
    const audio = new Audio('https://fsa.zobj.net/download/bfhM55aJhR6rREGudMW_etdW-2iqoI_wfSuF_A9_TvF-w0-XHFWBmziBBUpc4y9ZIwqar8qtiCzCxnORPXO_rrrb5X8mdYa8rJHV_HhwHr4BqvRj5tYvQQFZqC_M/?a=web&c=72&f=bell_3d.mp3&special=1533302996-10PiIZia6b6%2BD2wk9lS%2FEdxHQ7zOy8itp%2BuW16tqciM%3D');
    audio.play();
  }
}
