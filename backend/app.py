from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

GROQ_API_KEY = os.getenv('GROQ_API_KEY')
NEWS_API_KEY = os.getenv('NEWS_API_KEY')

@app.route('/api/news/<symbol>', methods=['GET'])
def get_news(symbol):
    url = f'https://newsapi.org/v2/everything?q={symbol}&apiKey={NEWS_API_KEY}'
    response = requests.get(url)
    return jsonify(response.json())

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    url = 'https://api.groq.com/predict'
    headers = {'Authorization': f'Bearer {GROQ_API_KEY}'}
    response = requests.post(url, json=data, headers=headers)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
