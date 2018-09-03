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
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent Chrome <= 67 from automatically showing the prompt
      event.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = event;
      // Update the install UI to notify the user app can be installed
    });
  }

  public addToHomeScreen(): void {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        alert('User accepted the A2HS prompt');
      } else {
        alert('User dismissed the A2HS prompt');
      }
      // Clear the saved prompt since it can't be used again
      this.deferredPrompt = null;
    });
  }
}
