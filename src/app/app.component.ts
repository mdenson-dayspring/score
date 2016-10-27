import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  af: AngularFire;
  items: FirebaseListObservable<any[]>;
  keys: any[];

  constructor(af: AngularFire) {
    this.af = af;
    this.items = af.database.list('/items');

    this.keys = [{}, {}, {}, {}, {}];
    this.items
      .subscribe(arr => {
        arr.forEach(value => {
          this.keys[value.pk] = value;
        });
      });
  }

  resetList() {
    let items = this.af.database.list('/items');

    items.remove()
      .then(_ => items.push({ pk: 0, name: "1. Showmanship", c:0, d:0, j:0, s:0 }))
      .then(_ => items.push({ pk: 1, name: "2. Height", c:0, d:0, j:0, s:0 }))
      .then(_ => items.push({ pk: 2, name: "3. Aesthetics", c:0, d:0, j:0, s:0 }))
      .then(_ => items.push({ pk: 3, name: "4. Creativity", c:0, d:0, j:0, s:0 }))
      .then(_ => items.push({ pk: 4, name: "Overall", c:0, d:0, j:0, s:0 }))
      .catch(err => console.log(err, 'You do not have access!'));
  }

  resetScores() {
    this.resetList();
    return false;
  }
  addScores(text: String) {
    console.log(this.keys);
    const chars = ['c', 'd', 'j', 's'];
    let scores = [{}, {}, {}, {}, {}];
    this.keys.forEach((value, index) => {
      scores[value.pk] = {c: value.c, d: value.d, j: value.j, s: value.s};
    });

    let a = text.split(/\r?\n/);
    for (let line=0; line<a.length; line++) {
      for (let i=0; i<chars.length; i++) {
        let score = a[line].indexOf(chars[i]);
        if (score > -1) {
          scores[line][chars[i]] += score;
          scores[4][chars[i]] += score;
        }
      }
    }  
    console.log(scores);
    scores.forEach((value, index) => {
      this.items.update(this.keys[index].$key, value)
       .catch(err => console.error(err));
    });
    console.log(this.keys);
    return false;
  }
}
