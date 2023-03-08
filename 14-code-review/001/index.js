const promos = [
  { code: 'LEGAL10', amount: 10, isActive: true },
  { code: 'SUPER20', amount: 20, isActive: false },
  { code: 'HIPER50', amount: 50, isActive: true }
]

function getDiscount(code) {
  // promos.forEach((promo) => {
  //   const promoCheck = code === promo.code
  //   if(promoCheck && promo.isActive) {
  //     console.log(`você tem um desconto de ${promo.amount}%!`)
  //   } else if (promoCheck && promo.isActive === false) {
  //     console.log(`esse código está inativo`)
  //   }
  // })
  code = code.toUpperCase()
  const promo = promos.find(promo => promo.code === code)
  if(promo && promo.isActive) {
    console.log(`você tem um desconto de ${promo.amount}%!`)
    return promo.amount / 100
  } return 0 
}

function calculateFinalPrice(basePrice, userCode) {
  if(userCode) {
    const discount = getDiscount(userCode)
    const finalPrice = basePrice - basePrice * discount
    return finalPrice
  } return basePrice
}

