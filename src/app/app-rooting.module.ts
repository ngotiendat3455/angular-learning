import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleCocktailComponent } from './pages/single-cocktail/single-cocktail.component';
import { ErrorComponent } from './pages/error/error.component';
// import { HomeComponent } from './home.component';
// import { AboutComponent } from './about.component';
// import { SingleCocktailComponent } from './single-cocktail.component';
// import { ErrorComponent } from './error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cocktail/:id', component: SingleCocktailComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }