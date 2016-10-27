import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlacePipe } from './place.pipe';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyDD9UGMGKB9jpj4M2ZUpJsxZ-T-f7KikgY",
    authDomain: "scoreboard-633ed.firebaseapp.com",
    databaseURL: "https://scoreboard-633ed.firebaseio.com",
    storageBucket: "scoreboard-633ed.appspot.com",
    messagingSenderId: "1008099998524"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    PlacePipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
