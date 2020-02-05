export const updateObject = (object, newValues) => {
  return {
    ...object,
    ...newValues
  }
}

export const fixPrice = cents => {
  const dollars = (cents / 100).toFixed(2)
  return dollars
}