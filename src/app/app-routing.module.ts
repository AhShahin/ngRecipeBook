import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {SignupComponent} from "app/auth/signup/signup.component";
import {SigninComponent} from "app/auth/signin/signin.component";
import {HomeComponent} from "./home.component";
const appRoutes: Routes = [
  { path: '',   component: HomeComponent },
  // asynchronous routing, which loads feature modules lazily, on     	request.
  { path: 'recipes', loadChildren: 	'app/recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
