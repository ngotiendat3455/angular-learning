import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from './app-rooting.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { SingleCocktailComponent } from './components/single-cocktail/single-cocktail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    NavbarComponent,
    SearchFormComponent,
    CocktailListComponent,
    LoadingComponent,
    CocktailComponent,
    SingleCocktailComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
