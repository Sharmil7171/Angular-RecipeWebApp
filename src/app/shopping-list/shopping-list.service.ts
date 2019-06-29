import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Potatoes', 7)
    ]

    getIngredinet() {
        return this.ingredients.slice();
    }
}