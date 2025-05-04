import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-cocktail',
  // standalone: true,
  // imports: [],
  templateUrl: './single-cocktail.component.html',
  styleUrl: './single-cocktail.component.scss'
})
export class SingleCocktailComponent implements OnInit {
  loading = false;
  cocktail: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.fetchCocktail(id);
    });
  }

  fetchCocktail(id: string) {
    this.loading = true;
    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe({
        next: (data: any) => {
          const drink = data.drinks?.[0];
          if (drink) {
            const {
              strDrink: name,
              strDrinkThumb: image,
              strAlcoholic: info,
              strCategory: category,
              strGlass: glass,
              strInstructions: instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            } = drink;

            const ingredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            ].filter(Boolean); // remove nulls

            this.cocktail = {
              name,
              image,
              info,
              category,
              glass,
              instructions,
              ingredients,
            };
          } else {
            this.cocktail = null;
          }
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        }
      });
  }
}
