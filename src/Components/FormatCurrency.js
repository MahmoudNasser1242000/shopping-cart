const CURRENCY =  new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency'
})


const FormatCurrency = (number) => {
  return CURRENCY.format(number)
}

export default FormatCurrency
