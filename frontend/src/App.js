import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [symbol, setSymbol] = useState('');
  const [news, setNews] = useState([]);
  const [prediction, setPrediction] = useState(null);

  const handleSearch = async () => {
    try {
      const newsResponse = await axios.get(`http://localhost:5000/api/news/${symbol}`);
      setNews(newsResponse.data.articles);

      const predictionResponse = await axios.post('http://localhost:5000/api/predict', { symbol });
      setPrediction(predictionResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Sentiment Analyzer and Predictor</h1>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter stock symbol"
        />
        <button onClick={handleSearch}>Search</button>
        {news.length > 0 && (
          <div>
            <h2>News Articles</h2>
            <ul>
              {news.map((article, index) => (
                <li key={index}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {prediction && (
          <div>
            <h2>Prediction</h2>
            <p>{prediction.result}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
