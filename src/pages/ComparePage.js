import React ,{useEffect, useState} from 'react'
import Header from '../components/Common/Header';
import SelectCoin from '../components/Compare/SelectCoin';
import SelectDays from '../components/Coins/SelectDays';
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from '../functions/getCoinPrices';
import { coinObject } from '../functions/convertObject';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coins/CoinInfo';
import {settingChartData} from '../functions/settingChartData';
import TogglePriceType from '../components/Coins/PriceType';
import LineChart from '../components/Coins/LineChart';
import Footer from '../components/Common/Footer';




function ComparePage() {
    const [crypto1,setCrypto1] = useState("bitcoin");
    const [crypto2,setCrypto2] = useState("ethereum");
    const [crypto1Data ,setCrypto1Data] = useState({});
    const [crypto2Data ,setCrypto2Data] = useState({});
    const [days,setDays] = useState(30);
    const [isLoading , setIsLoading] = useState(true);
    const [priceType , setPriceType] = useState("prices");
    const [chartData , setChartData] = useState({});

    async function handleDaysChanges(e){
    setIsLoading(true);
    setDays(e.target.value);
    const prices1 = await getCoinPrices(crypto1 , e.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2 , e.target.value, priceType);
    settingChartData(setChartData ,prices1 , prices2)
    setIsLoading(false);
    }
    useEffect(()=>{
       getData();
    },[])

    const handlePriceTypeChanges = async (e,newType) =>{
     
      setIsLoading(true);
      setPriceType(newType);
      const prices1 = await getCoinPrices(crypto1 , days, newType);
    const prices2 = await getCoinPrices(crypto2 , days, newType);
    settingChartData(setChartData ,prices1 , prices2)
    setIsLoading(false);
    }

  async function getData(){
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    if (data1){
      const data2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data , data1);
      if(data2){
        coinObject(setCrypto2Data,data2);
        const prices1 = await getCoinPrices(crypto1 , days, priceType);
        const prices2 = await getCoinPrices(crypto2 , days, priceType);
       settingChartData(setChartData ,prices1 , prices2)
       console.log("print--", prices1,prices2);
       setIsLoading(false);
      }
    }
    

  }

    const handleCoinChange = async (e , isCoin2)=>{
      setIsLoading(true);
      if(isCoin2){
          setCrypto2(e.target.value);
          const data = await getCoinData(e.target.value);
          coinObject(setCrypto2Data , data);
          const prices1 = await getCoinPrices(crypto1 , days , priceType);
          const prices2 = await getCoinPrices(crypto2 , days , priceType);
         if(prices1.length > 0 && prices2.length > 0){
        console.log("print--", prices1,prices2);
        // setIsLoading(false);
      }
      // setIsLoading(false);
    }else{
          setCrypto1(e.target.value);
          const data = await getCoinData(e.target.value);
         
          coinObject(setCrypto1Data , data);
      }
      setIsLoading(false);
          }
         

  return (
    <div>
        <Header/>
        {isLoading ? (
          <Loader />
        ):(<>
          <div className='coin-days-flex'>
        <SelectCoin
            crypto1={crypto1}
            crypto2={crypto2}
            handleCoinChange={handleCoinChange}
        />
        <SelectDays 
        days={days}
        handleDaysChanges={handleDaysChanges}
        noPTag={true}
        />
        </div>
         <div className='grey-wrap'>
    <List coin={crypto1Data} />
  </div>
  <div className='grey-wrap'>
    <List coin={crypto2Data} />
  </div>
  <div className='grey-wrap'>
  <TogglePriceType priceType={priceType} handlePriceTypeChanges={handlePriceTypeChanges}/>
    <LineChart chartData={chartData}
     priceType={priceType}
      multiAxis={true}/>
  </div>
  <CoinInfo heading={crypto1Data.name} des={crypto1Data.desc}/>
  <CoinInfo heading={crypto2Data.name} des={crypto2Data.desc}/>
        
        </>)}
        <Footer/>
    </div>
  )
}

export default ComparePage