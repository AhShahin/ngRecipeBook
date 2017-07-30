import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import "rxjs/add/operator/map";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { DropdownDirective } from './dropdown.directive';
import {RecipeService} from "./recipes/recipe.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from "./auth/auth.service";
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {shoppingListModule} from "app/shopping-list/shopping-list.module";
import { RecipesModule } from "./recipes/recipes.module";
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    shoppingListModule,
    RecipesModule,
    ReactiveFormsModule
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
