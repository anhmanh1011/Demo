import { Component } from '@angular/core';
import { Hero } from '../app//hero/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heros: Hero[] = [{
    name: 'dao manh',
    age: 15
  }, {
    name: 'dao manh2',
    age: 17
  }];
  selectedHero: Hero;
  onselect(hero: Hero): void {
    this.selectedHero = hero;
    console.log( ` ok  ${this.selectedHero.name}`);
  }

}
