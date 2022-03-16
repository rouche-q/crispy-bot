export const loadMarket = async (exchange) => {
    await exchange.loadMarkets()
    console.log('Market loaded')
}

export const getBalance = async (exchange, currency) => {
    let balance = await exchange.fetchBalance()
    return balance[currency]
}

export const sellCurrency = async (exchange, currency, amount) => {

}

export const buyCurrency = async (exchange, currency, amount) => {

}