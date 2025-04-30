import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function StockTable() {
  const { data, error, isLoading } = useSWR('/api/stockTable', fetcher, {
    refreshInterval: 60000, // 60 seconds
  });

  if (error) return <p style={{ color: 'red' }}>❌ Failed to load stock data.</p>;
  if (isLoading) return <p>Loading stock data...</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ fontSize: '24px', color: '#231F20' }}>📈 Live NASDAQ Stocks</h2>
      <table style={{ width: '100%', fontSize: '14px', fontFamily: 'Bahnschrift', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th align="left">Symbol</th>
            <th align="left">Price</th>
            <th align="left">Trend</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>${stock.price.toFixed(2)}</td>
              <td style={{ color: stock.trend === 'up' ? '#008A40' : '#B92027' }}>
                {stock.trend === 'up' ? '🔼' : '🔽'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
