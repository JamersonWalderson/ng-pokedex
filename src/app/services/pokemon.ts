import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class Pokemon {
  private http = inject(HttpClient)
  
  all(): Promise<any> {
    return lastValueFrom(this.http.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/refs/heads/master/pokedex.json').pipe(delay(3000)));
  }
}
