import{createApi,fetchBaseQuery} from '@reduxjs/toolkit/query';
  
const cryptoApiHeaders ={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '379b432aa4msh4652c562abcd968p1b4daejsnae0e0267afdd', 
}
   
const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest =(url)=>({url,headers : cryptoApiHeaders})

export const cryptoApi =createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});












// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '379b432aa4msh4652c562abcd968p1b4daejsnae0e0267afdd',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
