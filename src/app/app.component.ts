import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public deferredPrompt = null;

  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit() {
    this.initAppToScreen();
  }

  public initAppToScreen() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load new Version?')) {
          window.location.reload();
        }
      });
    }
    window.addEventListener('beforeinstallprompt', (event) => this.deferredPrompt = event);
  }

  public addToHomeScreen(): void {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then(() => this.deferredPrompt = null);
  }
}
