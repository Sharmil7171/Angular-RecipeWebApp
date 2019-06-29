import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('First Recipe','This is Recipe 1 Description','https://img.taste.com.au/akfTFTDQ/w720-h480-cfill-q80/taste/2018/05/creamy-chicken-piccata-pasta-137359-1.jpg'),
        new Recipe('Second Recipe','This is Recipe 2 Description','https://images-gmi-pmc.edge-generalmills.com/551055cb-497f-4c8f-8836-f4a2e8d05723.jpg'),
      ];

    getRecipe() {
        return this.recipes.slice();
    }
}