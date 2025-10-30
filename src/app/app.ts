import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './services/pokemon';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-pokedex');
  private pokemonService = inject(Pokemon);
  protected data = signal<any>(null);
  
  constructor() {
    this.pokemonService.all().subscribe((result) => {
      this.data.set(result);
    });
  }
}
