import {EventEmitter, Injectable, Output} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "./ingredient";
import {Headers, Http, RequestOptions, Response} from '@angular/http';


@Injectable()
export class RecipeService {
  @Output() recipeChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
      new Recipe('Schnitzel', 'Very tasty', 'http://spicedblog.com/wp/wp-content/uploads/2017/02/Grilled-Jerk-Chicken-Sandwich3-600x400.jpg', [
      new Ingredient('Checkin', 1), new Ingredient('Salade', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor(private http: Http) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(recipeIndex: number){
    return this.recipes[recipeIndex];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('https://recipebook-7610a.firebaseio.com/recipes.json', body, options);
  }

  fetchData(){
    return this.http.get('https://recipebook-7610a.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipeChanged.emit(this.getRecipes());
        }
      );
  }
}
