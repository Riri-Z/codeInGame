const data = ['60 cl de lait', '400g de farine', '3 oeufs', '50 g de beurre fondu']
const NBR_PERSON = 2
function findRightQuantity(initialRecipe, nbrPerson) {

  let finalRecipe = initialRecipe.map(recipe => {
    let number = recipe.replace(/[^0-9]/g, '');
    let rightQuantity = number * nbrPerson
    let result = recipe.replace(number.toString(), rightQuantity.toString())
    return result
  })

  return finalRecipe
}

it('should return the recipe with the quantity modified for the right number of person', () => {
  const expected = ['120 cl de lait', '800g de farine', '6 oeufs', '100 g de beurre fondu']
  expect(findRightQuantity(data, NBR_PERSON)).toEqual(expected)
})