# CryptoInfo 
> A React application using public APIs to display cryptocurrency details and news. 

## Description
This responsive application was built using React best practices while utilizing API state management through Redux Toolkit. Ant Design was implemented to create the UI and line charts with Chart.js. Data was fetched using multiple sources:

1. [Coinranking API](https://developers.coinranking.com/api/documentation) was used to list all cryptocurrencies and related information. 
2. [Bing News Search API](https://www.microsoft.com/en-us/bing/apis/bing-news-search-api) was used to get the latest crypto news. 
3. [Coin Gecko API](https://www.coingecko.com/en/api) was used to get exchange information for each cryptocurrency. 


 Feel free to see a live demo [here.](https://cryptoinfosho.netlify.app/)

## Installation
1. Fork/Clone this repository. 
2. Run `npm install` to install all project dependencies. 
3. Run `npm start` to launch project locally. 

## Screenshots and Details
**Homepage**
- The homepage is displayed at `/` route.
- Global statistics of cryptocurrencies are displayed at the top of the page. 
- Top 10 current cryptocurrencies will be followed next which are displayed in clickable cards to show more information of each crypto. *Show more* will take you to the `/cryptocurrencies` route. 
- The latest crypto news are also displayed as clickable cards that will lead you to each respectable news article. *Show more* will take you to `/news` route. 


https://user-images.githubusercontent.com/87205105/157776580-22146606-80ee-4aef-80e4-371724c5d6a5.mp4




**Cryptocurrencies**
- The cryptocurrencies page is displayed at `/cryptocurrencies` route. 
- Each crypto is displayed in descending order of most popular with name, price, market cap, and daily change displayed. 
- A simple search bar is also added to find a specific cryptocurrency you may have in mind. 

https://user-images.githubusercontent.com/87205105/157777147-a3c6f90a-8acb-4c04-b501-3b1c29be5fc8.mp4


**Exchanges**
- The exchanges page is displayed at `/exchange` route. 
- The cryptocurrency exchanges are displayed on a table in descending order with rank, name, 24h trade volume, date established, country it is based in, and trust score. 
- Each crypto has a clickable link that will take you to each corresponding crypto homepage. 

<img width="955" alt="exchangesPage" src="https://user-images.githubusercontent.com/87205105/157777188-685cf39e-b72b-41a5-9f2a-41423e666f6d.PNG">


**News**
- The news page is displayed at `/news` route. 
- The latest 12 new article cards of all cryptocurrencies are displayed. 
- Each card will take you to the news article's page for a detailed read. 
- A select/search option is implemented at the top of the page to specify if you want news for a specific cryptocurrency. 



https://user-images.githubusercontent.com/87205105/157777209-7f10a948-ea8f-490f-bf6f-162fd8ea2412.mp4



## Comments 
I picked up this project to introduce myself to React Redux but ending picking up other skills like Ant Design and Chart.js. This is my first time using these technologies and it's been a great learning experience. I really enjoyed how simple it was to handle state management utilizing React Redux Toolkit and can see the many benefits this would bring for handling a larger website with more data. The implementation of detailed error messages was also an added plus! I initially wanted to display more live data in the Exchanges page but was unable to find a free API that gave me the latest exchanges of cryptocurrency.   

## Technology and Tools

React, Redux Toolkit, Ant Design, JavaScript, HTML, CSS, Moment.js, Chart.js, Millify and HTMLReactParser. 

**Deployed on Netlify**
