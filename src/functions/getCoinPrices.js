import axios from "axios"
export const getCoinPrices = (id, days , priceValue)=>{
  const myPrice = axios
  .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      , { crossDomain:true }
        )
  .then((response)=>{
        console.log('prices >>>>',response.data)
        return response.data[priceValue];
      })
  .catch((error)=>{
        console.log('Error >>>>', error)
        
      });
      return myPrice;
}