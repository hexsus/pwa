import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public deferredPrompt = null;

  ngOnInit() {
    this.initAppToScreen();
  }

  public initAppToScreen() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // e.preventDefault();
      this.deferredPrompt = e;
    });
  }

  public addToHomeScreen(): void {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then(() => (this.deferredPrompt = null));
  }
}
