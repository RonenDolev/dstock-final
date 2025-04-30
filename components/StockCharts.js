import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function StockCharts({ symbol }) {
  const [series, setSeries] = useState([]);
  const [lineSeries, setLineSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  const [range, setRange] = useState('3M'); // Default time range

  const timeFrames = {
    '1M': 22,
    '3M': 66,
    '6M': 132,
    '1Y': 252,
    '5Y': 1250,
  };

  useEffect(() => {
    if (!symbol) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`;
        const res = await axios.get(url);
        const raw = res.data['Time Series (Daily)'];

        const data = Object.entries(raw).map(([date, values]) => ({
          x: new Date(date),
          y: [
            parseFloat(values['1. open']),
            parseFloat(values['2. high']),
            parseFloat(values['3. low']),
            parseFloat(values['4. close']),
          ],
        })).slice(0, timeFrames[range]).reverse();

        const trend = data.map(item => ({
          x: item.x,
          y: item.y[3], // close price
        }));

        setSeries([{ data }]);
        setLineSeries([{ name: 'Close Price', data: trend }]);
      } catch (err) {
        console.error('Chart fetch error:', err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [symbol, range]);

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        Timeframe:
        {['1M', '3M', '6M', '1Y', '5Y'].map(r => (
          <button
            key={r}
            onClick={() => setRange(r)}
            style={{
              marginLeft: '5px',
              padding: '5px 10px',
              fontWeight: r === range ? 'bold' : 'normal',
            }}
          >
            {r}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading chart...</p>
      ) : (
        <>
          <h3>Candlestick Chart</h3>
          <Chart
            options={{
              chart: { type: 'candlestick', height: 300 },
              xaxis: { type: 'datetime' },
              yaxis: { tooltip: { enabled: true } },
            }}
            series={series}
            type="candlestick"
            height={300}
          />

          <h3 style={{ marginTop: '30px' }}>Price Trend</h3>
          <Chart
            options={{
              chart: { type: 'line' },
              xaxis: { type: 'datetime' },
            }}
            series={lineSeries}
            type="line"
            height={300}
          />
        </>
      )}
    </div>
  );
}
