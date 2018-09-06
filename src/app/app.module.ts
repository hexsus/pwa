import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TimerComponent } from './timer/timer.component';
import { MinuteToSecondsPipe } from './minute-to-seconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    MinuteToSecondsPipe
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
