import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesComponent} from "./recipes.component";

const recipeRoutes: Routes = [
  {
 // rendered at the root level
    path: '',
    component: RecipesComponent,
    children: [
      {
	// start from recipe route
        path: '',
        component: RecipeStartComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      },
      { path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RecipeRoutingModule {}
