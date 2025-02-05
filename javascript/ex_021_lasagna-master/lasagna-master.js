/// <reference path="./global.d.ts" />

export function cookingStatus(timer = -1){
  return timer < 0 ? 'You forgot to set the timer.' : timer ? 'Not done, please wait.' : 'Lasagna is done.';
}

export function preparationTime(layers, time_x_layer = 2){
  return layers.length * time_x_layer;
}

export function quantities(layers){
  const recipe = {'noodles': 50, 'sauce': 0.2};
  const output = {'noodles': 0, 'sauce': 0};
  for(let layer of layers)
    if(layer in output)
      output[layer] += recipe[layer];
  return output;
}

export function addSecretIngredient(friendsList, myList){
  myList[myList.length] = friendsList.at(-1);
}

export function scaleRecipe(recipe, number){
  const output = Object.create(recipe);
  for(let key in output)
    output[key] *= number / 2;
  return output;
}