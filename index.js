import cctx from 'ccxt'
import 'dotenv/config'
import { getBalance, loadMarket } from './src/exchange.js'
import { getSma } from './src/indicator.js'

const binance = new cctx.binance(
   {
      apiKey: process.env.API_KEY,
      secret: process.env.SECRET,
      timeout: 50000
   }
)

const run = async () => {
   loadMarket(binance)
   getSma(binance, 'BTC/USDT', 7)
}

run()
