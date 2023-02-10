function convert (value) {
  let valueInMeters = value
  let valueInFeet = value * 3.281
  return valueInFeet.toFixed(3)
}

console.log(convert(20))