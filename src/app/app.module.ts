import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TimerComponent } from './timer/timer.component';
import { MinuteToSecondsPipe } from './minute-to-seconds.pipe';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const config = {
  apiKey: 'AIzaSyC-sLDvcyvjR5h4N4qMCTQ-qGHrXbRDjCY',
  authDomain: 'time-evolve.firebaseapp.com',
  databaseURL: 'https://time-evolve.firebaseio.com',
  projectId: 'time-evolve',
  storageBucket: 'time-evolve.appspot.com',
  messagingSenderId: '433462159797'
};

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    MinuteToSecondsPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
