import { HttpClient } from '@angular/common/http';
import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  loading = signal<boolean>(false);
  cocktails = signal<any[]>([]);
  searchTerm = signal<string>('');

  constructor(private http:HttpClient) {
    effect(() => {
      this.fetchDrinks(this.searchTerm())
    }, {
      allowSignalWrites: true
    })  
  }

  getLoading() {
    return this.loading.asReadonly()
  }

  getCocktails() {
    return this.cocktails.asReadonly()
  }
  private fetchDrinks(term: string) {
    this.loading.set(true);
    this.http.get<any>(this.url + term).subscribe({
      next: (data) => {
        const { drinks } = data;
        if (drinks) {
          const mapped = drinks.map((item: any) => ({
            id: item.idDrink,
            name: item.strDrink,
            image: item.strDrinkThumb,
            info: item.strAlcoholic,
            glass: item.strGlass,
          }));
          this.cocktails.set(mapped);
        } else {
          this.cocktails.set([]);
        }
        this.loading.set(false);

      },
      error: (error) => {
        console.error('Error fetching drinks:', error);
        this.loading.set(false);
      },
    })

  }

  setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }
}
