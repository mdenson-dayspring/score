import { Pipe, PipeTransform } from '@angular/core';
/*
 * Returns the person in the place.
 * Takes an number argument that defaults to 1 (first).
 * Usage:
 *   value | place:1
*/
@Pipe({name: 'place'})
export class PlacePipe implements PipeTransform {
  transform(value: any, place: string): string {
    let places = [
        {name:'c', score: value.c}, 
        {name:'d', score: value.d}, 
        {name:'j', score: value.j}, 
        {name:'s', score: value.s}];
    places = places.sort((a, b) => {
        return b.score - a.score;
    });
    return places[+place-1].name;
  }
}