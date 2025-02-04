/// <reference path="./global.d.ts" />
/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
const menu = {'Margherita': 7, 'Caprese': 9, 'Formaggio': 10, 'ExtraSauce': 1, 'ExtraToppings': 2}
export function pizzaPrice(pizza, ...extras) {
  let [first, ...rest] = extras;
  if(!first)
    return menu[pizza];
  return pizzaPrice(pizza,...rest) + menu[first];
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;
  for (let order of pizzaOrders)
    total += pizzaPrice(order.pizza, ...order.extras);
  return total;
}
