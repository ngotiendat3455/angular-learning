import { Component } from '@angular/core';
import { CocktailService } from '../../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  // standalone: true,
  // imports: [],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
  loading = this.cocktailService.getLoading();
  cocktails = this.cocktailService.getCocktails();
  
  constructor(private cocktailService: CocktailService) {
  }
  
}
