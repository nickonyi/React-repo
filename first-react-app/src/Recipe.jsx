import { recipes } from './recipedata';

function RecipeComp({ id, name, ingredients }) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <RecipeComp
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
          />
        ))}
      </ul>
    </div>
  );
}
