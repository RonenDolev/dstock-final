import { useState } from 'react';

const STOCK_LIST = [
 {symbol: 'AAPL', name: 'Apple Inc.'}
{symbol: 'MSFT', name: 'Microsoft Corporation'}
{symbol: 'NVDA', name: 'NVIDIA Corporation'}
{symbol: 'AMZN', name: 'Amazon.com, Inc.'}
{symbol: 'GOOGL', name: 'Alphabet Inc. (Class A)'}
{symbol: 'META', name: 'Meta Platforms, Inc.'}
{symbol: 'BRK.B', name: 'Berkshire Hathaway Inc. (Class B)'}
{symbol: 'GOOG', name: 'Alphabet Inc. (Class C)'}
{symbol: 'AVGO', name: 'Broadcom Inc.'}
{symbol: 'TSLA', name: 'Tesla, Inc.'}
{symbol: 'LLY', name: 'Eli Lilly and Company'}
{symbol: 'JPM', name: 'JPMorgan Chase & Co.'}
{symbol: 'WMT', name: 'Walmart Inc.'}
{symbol: 'V', name: 'Visa Inc.'}
{symbol: 'XOM', name: 'Exxon Mobil Corporation'}
{symbol: 'MA', name: 'Mastercard Incorporated'}
{symbol: 'UNH', name: 'UnitedHealth Group Incorporated'}
{symbol: 'ORCL', name: 'Oracle Corporation'}
{symbol: 'NFLX', name: 'Netflix, Inc.'}
{symbol: 'COST', name: 'Costco Wholesale Corporation'}
{symbol: 'JNJ', name: 'Johnson & Johnson'}
{symbol: 'PG', name: 'The Procter & Gamble Company'}
{symbol: 'ABBV', name: 'AbbVie Inc.'}
{symbol: 'HD', name: 'The Home Depot, Inc.'}
{symbol: 'BAC', name: 'Bank of America Corporation'}
{symbol: 'TMUS', name: 'T-Mobile US, Inc.'}
{symbol: 'CRM', name: 'Salesforce, Inc.'}
{symbol: 'CVX', name: 'Chevron Corporation'}
{symbol: 'WFC', name: 'Wells Fargo & Company'}
{symbol: 'CSCO', name: 'Cisco Systems, Inc.'}
{symbol: 'ABT', name: 'Abbott Laboratories'}
{symbol: 'KO', name: 'The Coca-Cola Company'}
{symbol: 'PEP', name: 'PepsiCo, Inc.'}
{symbol: 'MRK', name: 'Merck & Co., Inc.'}
{symbol: 'PFE', name: 'Pfizer Inc.'}
{symbol: 'TMO', name: 'Thermo Fisher Scientific Inc.'}
{symbol: 'INTC', name: 'Intel Corporation'}
{symbol: 'CMCSA', name: 'Comcast Corporation'}
{symbol: 'DIS', name: 'The Walt Disney Company'}
{symbol: 'ADBE', name: 'Adobe Inc.'}
{symbol: 'PYPL', name: 'PayPal Holdings, Inc.'}
{symbol: 'ACN', name: 'Accenture plc'}
{symbol: 'NVDA', name: 'Nvidia Corporation'}
{symbol: 'ASML', name: 'ASML Holding N.V.'}
{symbol: 'TM', name: 'Toyota Motor Corporation'}
{symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Company Limited'}
{symbol: 'SIEGY', name: 'Siemens AG'}
{symbol: 'RMS.PA', name: 'Hermès International Société en commandite par actions'}
{symbol: 'SAP', name: 'SAP SE'}
{symbol: 'AZN', name: 'AstraZeneca PLC'}
{symbol: 'NESN.SW', name: 'Nestlé S.A.'}
{symbol: 'SHELL', name: 'Shell plc'}
{symbol: 'HSBC', name: 'HSBC Holdings plc'}
{symbol: 'BABA', name: 'Alibaba Group Holding Limited'}
{symbol: 'LVMUY', name: 'LVMH Moët Hennessy Louis Vuitton SE'}
{symbol: 'TCEHY', name: 'Tencent Holdings Limited'}
{symbol: 'NVO', name: 'Novo Nordisk A/S'}
{symbol: 'ORAN', name: 'Orange S.A.'}
{symbol: 'SNY', name: 'Sanofi'}
{symbol: 'ROG.SW', name: 'Roche Holding AG'}
{symbol: 'BP', name: 'BP p.l.c.'}
{symbol: 'TM', name: 'Toyota Motor Corp'}
{symbol: 'RELX', name: 'RELX PLC'}
{symbol: 'UL', name: 'Unilever PLC'}
{symbol: 'SHEL', name: 'Shell PLC'}
{symbol: 'CVX', name: 'Chevron Corp.'}
{symbol: 'XOM', name: 'Exxon Mobil Corp.'}
{symbol: 'JPM', name: 'JPMorgan Chase & Co.'}
{symbol: 'BAC', name: 'Bank of America Corp.'}
{symbol: 'BNPQY', name: 'BNP Paribas SA'}
{symbol: 'TD', name: 'The Toronto-Dominion Bank'}
{symbol: 'RY', name: 'Royal Bank of Canada'}
{symbol: 'C', name: 'Citigroup Inc.'}
{symbol: 'MS', name: 'Morgan Stanley'}
{symbol: 'GS', name: 'The Goldman Sachs Group, Inc.'}
{symbol: 'AXP', name: 'American Express Co.'}
{symbol: 'MA', name: 'Mastercard Inc.'}
{symbol: 'V', name: 'Visa Inc.'}
{symbol: 'NEE', name: 'NextEra Energy, Inc.'}
{symbol: 'SO', name: 'The Southern Company'}
{symbol: 'DUK', name: 'Duke Energy Corporation'}
{symbol: 'NGG', name: 'National Grid plc'}
{symbol: 'D', name: 'Dominion Energy, Inc.'}
{symbol: 'NEE', name: 'NextEra Energy Inc.'}
{symbol: 'TSN', name: 'Tyson Foods, Inc.'}
{symbol: 'ADM', name: 'Archer-Daniels-Midland Company'}
{symbol: 'MO', name: 'Altria Group, Inc.'}
{symbol: 'PM', name: 'Philip Morris International Inc.'}
{symbol: 'KMB', name: 'Kimberly-Clark Corporation'}
{symbol: 'CL', name: 'Colgate-Palmolive Company'}
{symbol: 'MDLZ', name: 'Mondelez International, Inc.'}
{symbol: 'SBUX', name: 'Starbucks Corporation'}
{symbol: 'MCD', name: 'McDonald's Corporation'}
{symbol: 'HD', name: 'The Home Depot, Inc.'}
{symbol: 'LOW', name: 'Lowe's Companies, Inc.'}
{symbol: 'TGT', name: 'Target Corporation'}
{symbol: 'COST', name: 'Costco Wholesale Corporation'}
{symbol: 'NKE', name: 'NIKE, Inc.'}
{symbol: 'GM', name: 'General Motors Company'}
{symbol: 'F', name: 'Ford Motor Company'}
{symbol: 'TM', name: 'Toyota Motor Corporation'}
{symbol: 'HMC', name: 'Honda Motor Co., Ltd.'}
{symbol: 'RACE', name: 'Ferrari N.V.'}

];

export default function InvestmentForm({ onAnalyze }) {
  const [selectedSymbol, setSelectedSymbol] = useState(STOCK_LIST[0].symbol);
  const [amount, setAmount] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(selectedSymbol, amount);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Select Stock:
        <select
          value={selectedSymbol}
          onChange={(e) => setSelectedSymbol(e.target.value)}
          style={{ width: '100%', padding: '8px', fontSize: '14px', marginTop: '5px' }}
        >
          {STOCK_LIST.map((stock) => (
            <option key={stock.symbol} value={stock.symbol}>
              {stock.name} ({stock.symbol})
            </option>
          ))}
        </select>
      </label>

      <label style={{ display: 'block', margin: '10px 0' }}>
        Investment Amount ($):
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '100%', padding: '8px', fontSize: '14px', marginTop: '5px' }}
        />
      </label>

      <button
        type="submit"
        style={{
          padding: '10px 16px',
          backgroundColor: '#008A40',
          color: '#fff',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Analyze
      </button>
    </form>
  );
}
