// Simple Moving average
// Calculate like this
// (P1 + P2 + Px) / n
// where Px is the closing price of a period 
// and n is the numberr of period

export const getSma = async (exchange, pair, period) => {
    let candles = await exchange.fetchOHLCV(pair, '1h', undefined, period)
    candles = candles.map((candle) => {
        candle[0] = new Date(candle[0]).toString()
        return candle
    })
    console.table(candles)
}