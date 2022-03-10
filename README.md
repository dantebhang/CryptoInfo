# CryptoInfo 
> A React application using public APIs to display cryptocurrency details and news. 

## Description
This application was built using React best practices while utilizing API state management through Redux Toolkit. Ant Design was implemented to create the UI and line charts with Chart.js. Data was fetched using multiple sources:

[Coinranking API](https://developers.coinranking.com/api/documentation)
[Bing News Search API](https://www.microsoft.com/en-us/bing/apis/bing-news-search-api)
[Coin Gecko API](https://www.coingecko.com/en/api)


 Feel free to see a live demo [here.](https://cryptoinfosho.netlify.app/)

## Installation
1. Fork/Clone this repository. 
2. Run `npm install` to install all project dependencies. 
3. Run `npm start` to launch project locally. 

## Screenshots
**Homepage**
- The homepage is displayed at `/` route.
- Global statistics of cryptocurrencies are displayed at the top of the page. 
- Top 10 current cryptocurrencies will be followed next which are displayed in clickable cards to show more information of each crypto. Show more will take you to the `/cryptocurrencies` route. 
- The latest crypto news are also displayed as clickable cards that will lead you to each respectable news article. Show more will take you to `/news` route. 