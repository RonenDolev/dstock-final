import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import StockTable from '../components/StockTable';
import InvestmentForm from '../components/InvestmentForm';
import StockCharts from '../components/StockCharts';

export default function Home() {
  const [selectedStock, setSelectedStock] = useState(null);
  const [investment, setInvestment] = useState(100);

  const handleAnalyze = (symbol, amount) => {
    setSelectedStock(symbol);
    setInvestment(amount);
    console.log('Analyzing:', symbol, '$' + amount);
  };

  return (
    <>
      <Head>
        <title>Stock Analysis Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        style={{
          display: 'grid',
          gridTemplateColumns: '10% 40% 40% 10%',
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          fontFamily: 'Bahnschrift, sans-serif',
        }}
      >
        {/* Left margin */}
        <div></div>

        {/* Left Column */}
        <div style={{ padding: '20px' }}>
          {/* Logo and Title */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Image
              src="/logo.png"
              alt="dstock logo"
              width={48}
              height={48}
              style={{ marginRight: '12px' }}
            />
            <h1 style={{ fontSize: '60px', margin: 0, color: '#231F20' }}>
              Stock Analysis Generator
            </h1>
          </div>

          {/* Market Trend Bar */}
          <div
            style={{
              backgroundColor: '#444',
              color: '#fff',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '14px',
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '10px',
              marginBottom: '20px',
            }}
          >
            <div>📈 S&P 500</div>
            <div>📊 Nasdaq 100</div>
            <div>🏦 Dow Jones</div>
            <div>📉 Russell 2000</div>
            <div>💰 Gold</div>
            <div>🥈 Silver</div>
            <div>💶 EUR/USD</div>
            <div>🇪🇺 EUR/ILS</div>
            <div>🇺🇸 USD/ILS</div>
          </div>

          {/* Stock Selector + Real-Time Table */}
          <InvestmentForm onAnalyze={handleAnalyze} />
          <StockTable />
        </div>

        {/* Right Column */}
        <div style={{ padding: '20px' }}>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)',
              minHeight: '300px',
            }}
          >
            <h2 style={{ fontSize: '24px', color: '#231F20' }}>
              {selectedStock
                ? `📊 Analysis for ${selectedStock} ($${investment})`
                : '📊 Chart & Strategy Area'}
            </h2>

            {selectedStock ? (
              <StockCharts symbol={selectedStock} />
            ) : (
              <p>
                Please select a stock and investment amount, then click <strong>Analyze</strong>.
              </p>
            )}
          </div>
        </div>

        {/* Right margin */}
        <div></div>
      </main>
    </>
  );
}
