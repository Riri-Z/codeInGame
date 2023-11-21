const data = {
  listString: ['nos', 'memos', 'sommes', 'en', 'nous', 'trouve', 'voiture'],
  msg: 'nizs smmoes en vuroite'


}
function decode(listWordAvailable, cryptedMsg) {
  /*
  PSEUDO-CODE :
  - je split le message crypté pour obtenir un array de mots que je stock dans arrMsg
  - je parcours cet array via .map pour retouver le mot dans ma liste de mots en respectant trois conditions :
        - la longeur des deux mots doit être identique
        - le debut de chaque mot doit etre identique
        - la fin de chaque mot doit être identique
        => je remplace le mot crypte par le mot qui respecte ma condition
      - je 'join' mon array afin d'obtenir de nouveau une string, et retourne le résultat
*/

  let arrMsg = cryptedMsg.split(' ')

  let resultat = arrMsg.map(word => {
    let wordLength = word.length
    let start = word.charAt(0)
    let end = word.charAt(wordLength - 1)

    let found = listWordAvailable.find(e => e.length === wordLength && e.charAt(0) === start && e.charAt(e.length - 1) === end)

    return found
  })

  return resultat.join(' ')
}

it('should return the right message', () => {
  const expected = 'nous sommes en voiture'

  expect(decode(data.listString, data.msg)).toEqual(expected)
})