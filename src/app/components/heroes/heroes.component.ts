import { Component } from '@angular/core';
import { IHero } from '../../interfaces/hero';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  heroes: IHero[] = [];
  selectedHero?: IHero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
}
