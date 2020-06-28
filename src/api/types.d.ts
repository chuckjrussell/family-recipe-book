type RecipeId = string;
type UserId = string;

interface User {
  _id: UserId;
}

interface Ingredient {}

interface Recipe {
  _id: RecipeId;
  title: string;
  authorId: UserId;
  sourceName?: string;
  sourceUrl?: string;
  servings?: number;
  tags?: string[];
  imageUrl: string;
  steps?: string[];
  ingredients?: Ingredient[];
}
