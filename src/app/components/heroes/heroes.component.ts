import { Component } from '@angular/core';
import { IHero } from '../../interfaces/hero';
import { CommonModule } from '@angular/common';
import { HEROES } from '../../../../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: IHero;

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }
}
