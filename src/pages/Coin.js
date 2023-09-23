
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import { coinObject } from '../functions/convertObject';
import CoinInfo from '../components/Coins/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coins/LineChart';
import {convertDate} from '../functions/convertDate';
import SelectDays from '../components/Coins/SelectDays'
import { settingChartData } from '../functions/settingChartData';
import TogglePriceType from '../components/Coins/PriceType';
import Footer from '../components/Common/Footer';


function CoinPage() {
    const { id } = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [coinData , setCoinData] = useState();
    const [days , setDays] = useState(30);
    const [chartData , setChartData] = useState({});
    const [priceType ,setPriceType] = useState("prices");

    useEffect(()=>{
        if(id){
            getData();
    
          }
},[id]);

 async function getData(){
const data = await getCoinData(id);
if(data){
  coinObject(setCoinData , data)
  const prices = await getCoinPrices(id , days , priceType);
  // console.log(prices)
  
  if( prices.length > 0){
    console.log("hello")
    settingChartData(setChartData ,prices);
    setIsLoading(false);
  }
}
}

const handleDaysChanges =async (event) => {
  setIsLoading(true);
  setDays(event.target.value );
  const prices = await getCoinPrices (id,event.target.value , priceType );
  if(prices.length > 0){
    settingChartData(setChartData ,prices);
    setIsLoading(false);
  }
};

const handlePriceTypeChanges = async (event,newType) =>{
  console.log(newType)
  console.log("kalash");
  
  setIsLoading(true);
  setPriceType(newType);
  const prices = await getCoinPrices (id, days , newType);
  if(prices.length > 0){
    settingChartData(setChartData ,prices);
    setIsLoading(false);
  }
 
}

  return (
    <div>
    <Header/>
{ isLoading ? 
  (
    <Loader />
    ):( 
      <>
  <div className='grey-wrap'>
    <List coin={coinData} />
  </div>
  <div className='grey-wrap'>
  <SelectDays days={days} handleDaysChanges={handleDaysChanges}/>

  <TogglePriceType priceType={priceType} handlePriceTypeChanges={handlePriceTypeChanges}/>
   
    <LineChart chartData={chartData} priceType={priceType} />
  </div>
<CoinInfo heading={coinData.name} des={coinData.desc}/>
   </>
  )}
  <Footer/>
</div>
)
};

export default CoinPage;