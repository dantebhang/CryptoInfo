import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//headers from RapidApi
const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': '7b3a0606bfmsh9c4e08ae5eca17ep10a2bejsn426c6d96a9f6'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
  //creating a hook to call data from API 
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi; 