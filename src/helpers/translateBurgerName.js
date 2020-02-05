const complete = ings => {
  const complete = ings.bacon && ings.cheese && ings.salad && ings.meat && 'Completa'
  return [complete].filter(Boolean)
}

const stacker = ings => {
  const stacker = ings.bacon && ings.meat && !ings.salad && 'Stacker'
  const milky = stacker && ings.cheese && 'Con Queso'
  return [stacker, milky].filter(Boolean).join(' ')
}

const meatCounter = ings => {
  const [text = 'Monstruosa'] = [["", "Simple", "Doble", "Triple", "Cuádruple"][ings.meat]];
  return text
}

const meatOnly = ings => {
  const meatOnly = !ings.bacon && !ings.cheese && !ings.salad && ings.meat && '(Solo Carne)'
  return [meatOnly].filter(Boolean)
}

const cheeseOnly = ings => {
  const cheeseOnly = !ings.bacon && !ings.salad && ings.cheese && '(Solo Queso)'
  return [cheeseOnly].filter(Boolean)
}

const light = ings => {
  const antiLight = ings.salad && ings.meat && ings.bacon && !ings.cheese && 'Anti-Light'
  const light = ings.salad && ings.meat && !ings.bacon && 'Light'
  const milky = light && ings.cheese && 'Con Queso'
  return [antiLight, light, milky].filter(Boolean).join(' ')
}

const veggie = ings => {
  const veggie = ings.salad && !ings.meat && !ings.bacon && 'Veggie'
  const milky = veggie && ings.cheese && 'Con Queso'
  return [veggie,milky].filter(Boolean).join(' ')
}

const inedible = ings => {
  const inedible = ings.bacon && !ings.meat && 'Incomible'
  return [inedible].filter(Boolean)
}

export const translateBurgerName = ings => [
  complete,
  stacker,
  light,
  meatCounter,
  meatOnly,
  cheeseOnly,
  veggie,
  inedible
].map((fn) => fn(ings)).join(' ')