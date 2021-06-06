import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  // 1. 定義一個 private 屬性的 heroService
  // 2. 把它標記為 HeroService 的注入點
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Select hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
}


