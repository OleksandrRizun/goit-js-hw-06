const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrLi = ingredients.map(elem => {
  const liElem = document.createElement("li")
  liElem.textContent = elem
  liElem.classList.add ("item")
  return liElem
})
document.getElementById ("ingredients").append (...arrLi)