import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss'
})
export class CocktailComponent {
 @Input() item: any;
}
