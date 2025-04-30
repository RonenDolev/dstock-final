import Head from 'next/head';
import Image from 'next/image';
import StockTable from '../components/StockTable';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stock Analysis Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Page Grid: 10% | 40% | 40% | 10% */}
      <main
        style={{
          display: 'grid',
          gridTemplateColumns: '10% 40% 40% 10%',
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          fontFamily: 'Bahnschrift, sans-serif',
        }}
      >
        {/* Left Margin */}
        <div></div>

        {/* Left Panel */}
        <div style={{ padding: '20px' }}>
          {/* Header Row */}
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

          {/* Real-Time Table */}
          <StockTable />
        </div>

        {/* Right Panel */}
        <div style={{ padding: '20px' }}>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            }}
          >
            <h2 style={{ fontSize: '24px', color: '#231F20' }}>
              📊 Chart & Strategy Area (Coming Next)
            </h2>
            <p>This section will include candlestick chart, trend chart, and strategy output.</p>
          </div>
        </div>

        {/* Right Margin */}
        <div></div>
      </main>
    </>
  );
}
