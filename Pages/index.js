import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DStock - Stock Analysis Generator</title>
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
          <p>This panel will include:</p>
          <ul>
            <li>🔍 Stock selector dropdown</li>
            <li>💵 Investment amount input</li>
            <li>📈 Real-time stock table</li>
            <li>▶️ Analyze button</li>
          </ul>
        </div>

        {/* Right panel */}
        <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '24px', color: '#231F20', marginBottom: '10px' }}>
            Charts & Investment Strategy
          </h2>
          <p>This panel will show:</p>
          <ul>
            <li>📊 Candlestick Chart</li>
            <li>📉 Price Trend Chart</li>
            <li>📘 Strategy with expected returns</li>
          </ul>
        </div>

        {/* Right margin */}
        <div></div>
      </main>
    </>
  );
}
