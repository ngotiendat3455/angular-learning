import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CocktailService } from '../../cocktail.service';

@Component({
  selector: 'app-search-form',
  // standalone: true,
  // imports: [],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent implements AfterViewInit{
  @ViewChild('searchInput') searchInput!:ElementRef<HTMLInputElement>;

  constructor(private cocktailService: CocktailService) {
  }
  ngAfterViewInit(): void {
      this.searchInput.nativeElement.focus();
  }

  handleSubmit(event: Event){
    event.preventDefault();
  }

  searchCocktail() {
    const temp = this.searchInput.nativeElement.value;
    this.cocktailService.setSearchTerm(temp);
  }
}
