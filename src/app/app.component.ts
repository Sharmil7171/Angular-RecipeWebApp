import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe';
  recipeDisplay = true;

  getDisplayPage(page:string){
    if(page === "Recipe"){
      this.recipeDisplay = true;
    } else if(page === "ShoppingList"){
      this.recipeDisplay = false;
    }
  }
}
