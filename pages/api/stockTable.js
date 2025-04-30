// pages/api/stockTable.js

import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

// Curated list of 50 NASDAQ tickers
const TICKERS = [
  'AAPL', 'MSFT', 'GOOG', 'AMZN', 'TSLA',
  'NVDA', 'META', 'ADBE', 'NFLX', 'INTC',
  'PYPL', 'PEP', 'COST', 'AVGO', 'AMD',
  'QCOM', 'CSCO', 'TXN', 'SBUX', 'AMAT',
  'BKNG', 'ISRG', 'GILD', 'VRTX', 'REGN',
  'LRCX', 'ADI', 'INTU', 'MDLZ', 'MNST',
  'ASML', 'ZM', 'DOCU', 'CRWD', 'ROKU',
  'WDAY', 'TEAM', 'BIDU', 'NXPI', 'PDD',
  'JD', 'ZS', 'MRNA', 'ILMN', 'TTD',
  'SNPS', 'ORLY', 'CTSH', 'KLAC', 'CHKP'
  'JPM', 'V', 'MA', 'UNH', 'ORCL'
  'JNJ', 'PG', 'ABBV', 'HD', 'BAC'
  'CVX', 'WFC', 'ABT', 'KO', 'MRK'
  'PFE', 'TMO', 'CMCSA', 'DIS', 'ACN'
  'ASML', 'TM', 'TSM', 'SIEGY', 'RMS.PA'
  'SAP', 'AZN', 'NESN.SW', 'SHELL', 'HSBC'
  'BABA', 'LVMUY', 'TCEHY', 'NVO', 'ORAN'
  'SNY', 'ROG.SW', 'BP', 'RELX', 'UL'
  'SHEL', 'XOM', 'BNPQY', 'TD', 'RY'
  'C', 'MS', 'GS', 'AXP', 'NEE'
  'SO'
];

// Keep a persistent rotating index across requests
let tickerIndex = 0;

export default async function handler(req, res) {
  const count = 5; // fetch 5 stocks per request
  const results = [];

  for (let i = 0; i < count; i++) {
    const symbol = TICKERS[(tickerIndex + i) % TICKERS.length];

    try {
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
      const response = await axios.get(url);
      const quote = response.data['Global Quote'];

      if (!quote || !quote['05. price']) continue;

      const price = parseFloat(quote['05. price']);
      const change = parseFloat(quote['09. change']);
      const trend = change >= 0 ? 'up' : 'down';

      results.push({ symbol, price, trend });
    } catch (err) {
      console.error(`Error fetching ${symbol}:`, err.message);
    }
  }

  tickerIndex = (tickerIndex + count) % TICKERS.length;

  res.status(200).json(results);
}
