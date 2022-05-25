const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const createIngredientsElements = (items) => {
  return items.map((item) => {
    const navEl = document.createElement("li");
    navEl.classList = "item";
    navEl.textContent = item;
    return navEl;
  });
};

const ingredientsEl = createIngredientsElements(ingredients);

ingredientsList.append(...ingredientsEl);
