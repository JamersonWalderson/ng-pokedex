import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './services/pokemon';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'ng-pokedex';
  protected pokemonService = inject(Pokemon);
  
  query = injectQuery(() => ({
    queryKey: ['todos'],
    queryFn: () => this.pokemonService.all(),
  }))
}
