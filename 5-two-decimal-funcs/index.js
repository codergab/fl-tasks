function toDecimal(base, sequence) {
  return parseInt(sequence, base)
}

function fromDecimal(int, decimal) {
  return parseInt(decimal).toString(int)
}

function main() {
  const baseNumber = 7
  const sequence = '5160362'

  console.log(`Given number in base ${baseNumber} is ${sequence}`)
  
  const decimalNumber = toDecimal(baseNumber, sequence)
  console.log(`Converted decimal number is ${decimalNumber}`)

  const baseNumberRecover = fromDecimal(baseNumber, decimalNumber)

  console.log(`Recovered number in base ${baseNumber} is ${baseNumberRecover}`)

  const correct = sequence === baseNumberRecover
  console.log(`Is the code working correctly ${correct}`)

}

main()