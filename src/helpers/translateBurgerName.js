const translateBurgerName = ings => {

  const bacon = ings.bacon > 0
  const cheese = ings.cheese > 0
  const salad = ings.salad > 0
  const meat = ings.meat > 0

  const complete = () => {
    const isComplete = bacon && cheese && salad && meat
    return isComplete ? 'Completa' : ''
  }

  const stacker = () => {
    const isStacker = bacon && meat && !salad
    const isMilky = isStacker && cheese
    return [
      isStacker ? 'Stacker' : '', 
      isMilky ? 'Con Queso' : ''
    ].join(' ')
  }

  const meatCounter = (meatQty) => {
    const options = {
      0: '',
      1: 'Simple',
      2: 'Doble',
      3: 'Triple',
      4: 'Cuádruple',
      5: 'Monstruosa'
    }
    return options.hasOwnProperty(meatQty.toString()) ? options[meatQty] : options[5]
  }

  const meatOnly = () => {
    const isMeatOnly = !bacon && !cheese && !salad && meat
    return isMeatOnly ? '(Solo Carne)' : ''
  }

  const cheeseOnly = () => {
    const isCheeseOnly = !bacon && !salad && cheese
    return isCheeseOnly ? '(Solo Queso)' : ''
  }

  const light = () => {
    const isAntiLight = salad && meat && bacon && !cheese
    const isLight = salad && meat && !bacon
    const isMilky = isLight && cheese
    return [
      isAntiLight ? 'Anti-Light' : '',
      isLight ? 'Light' : '',
      isMilky ? 'Con Queso' : ''
    ].join(' ')
  }

  const veggie = () => {
    const isVeggie = salad && !meat && !bacon
    const isMilky = isVeggie && cheese
    return [
      isVeggie ? 'Veggie' : '',
      isMilky ? 'Con Queso' : ''
    ].join(' ')
  }

  const inedible = () => {
    const isInedible = bacon && !meat
    return isInedible ? 'Incomible' : ''
  }

  return [
    complete(),
    stacker(),
    light(),
    meatCounter(ings.meat),
    meatOnly(),
    cheeseOnly(),
    veggie(),
    inedible()
  ].join(' ')
}

export default translateBurgerName