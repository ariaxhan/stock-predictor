# Stock Sentiment Analyzer and Predictor

## Introduction
The **Stock Sentiment Analyzer and Predictor** is a simple web application that allows users to search for specific stocks, analyze the sentiment of recent news articles, and predict the stock’s future movement using the Groq API.

## Features
- Search for a specific stock.
- Analyze the sentiment of recent news articles related to the stock.
- Predict the stock’s future movement based on sentiment analysis.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Python (Flask)
- **APIs**:
  - Groq API for predictions.
  - News API for fetching news articles.

## Installation

### Prerequisites
- Node.js and npm
- Python 3.x

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/stock-sentiment-analyzer.git
    cd stock-sentiment-analyzer/backend
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate
    ```

3. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

4. Create a `.env` file with your API keys:
    ```env
    GROQ_API_KEY=your_groq_api_key
    NEWS_API_KEY=your_news_api_key
    ```

5. Start the Flask server:
    ```sh
    flask run
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install the required packages:
    ```sh
    npm install
    ```

3. Start the React development server:
    ```sh
    npm start
    ```

## Usage
1. Open your web browser and go to `http://localhost:3000`.
2. Use the search bar to search for a specific stock.
3. View the sentiment analysis results and stock movement predictions.
