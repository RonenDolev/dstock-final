import Head from 'next/head';
import StockTable from '../components/StockTable';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stock Analysis Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main
        style={{
          display: 'grid',
          gridTemplateColumns: '10% 40% 40% 10%',
          backgroundColor: '#f5f5f5',
          fontFamily: 'Bahnschrift, sans-serif',
          minHeight: '100vh',
          padding: 0,
          margin: 0,
        }}
      >
        {/* Left margin */}
        <div></div>

        {/* Left panel */}
        <div style={{ padding: '20px' }}>
          <h1 style={{ fontSize: '60px', color: '#231F20', marginBottom: '20px' }}>
            Stock Analysis Generator
          </h1>

          <StockTable />
        </div>

        {/* Right panel */}
        <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '24px', color: '#231F20', marginBottom: '10px' }}>
            📊 Chart & Strategy Area (Coming Next)
          </h2>
          <p>This will display selected stock candlestick chart and investment strategy info.</p>
        </div>

        {/* Right margin */}
        <div></div>
      </main>
    </>
  );
}
