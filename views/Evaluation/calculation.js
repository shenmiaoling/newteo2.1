'use strict'
function calculation(prcies, options) {
  const finalPrices = howMuch(prcies, options)
  const term = howLong(options)
  return {
    finalPrices,
    term
  }
}

function howLong(options) {
  options = Number(options)
  switch(true) {
    case options < 10 :
    return '1 周以内'
    case options > 10 && options < 30 :
    return '2 － 3 周'
    case options > 30 && options < 50 :
    return '4 - 6  周'
    default:
    return '6 周以上'
  }
}

function howMuch(prices, options) {
  prices = Number(prices)
  const arg = arrange(options)
  switch(true) {
    case prices < 5000 :
    return '￥5000'
    default:
    return `￥${prices} - ￥${prices + arg} `
  }
}

function arrange(options) {
  options = Number(options)
  switch(true) {
    case options < 10 :
    return 500
    case options > 10 && options < 30 :
    return 3000
    case options > 30 && options < 50 :
    return 5000
    default:
    return 10000
  }
}


module.exports = calculation

