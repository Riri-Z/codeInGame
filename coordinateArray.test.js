const data = [
  {
    x: 2,
    y: 12
  }, {
    x: 5,
    y: 10
  },
  {
    x: 20,
    y: 30
  },
  {
    x: 24,
    y: 36
  },
]

function findRectangleCoordinate(arrayDots) {
  let result = {
    Xmin: null, Xmax: null, Ymin: null, Ymax: null, longeur: null, largeur: null
  }

  result.Xmin = Math.min(...arrayDots.map(coordinate => coordinate.x))
  result.Xmax = Math.max(...arrayDots.map(coordinate => coordinate.x))
  result.Ymin = Math.min(...arrayDots.map(coordinate => coordinate.y))
  result.Ymax = Math.max(...arrayDots.map(coordinate => coordinate.y))
  result.largeur = result.Xmax - result.Xmin
  result.longeur = result.Ymax - result.Ymin
  return result
}

it('should return the coordinate of a rectangle (Xmin, Xmax, Ymin, Ymax, longeur, largeur) wich surround all dots ', () => {
  const expected = {
    Xmin: 2, Xmax: 24, Ymin: 10, Ymax: 36, longeur: 26, largeur: 22
  }

  expect(findRectangleCoordinate(data)).toEqual(expected)

})