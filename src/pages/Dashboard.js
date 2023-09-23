import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import axios from 'axios';
import TabComponent from '../components/Dashboard/TabComponent';
import Search from '../components/Dashboard/Search';
import PaginationControlled from '../components/Dashboard/Paginations';
import Loding from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coin';
import Footer from '../components/Common/Footer';

function DashboardPage() {
  const [coins,setCoins] = useState([]);
  const [paginatedCoins,setPaginatedCoins] = useState([]);
  const [ search , setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading , setIsLoading] = useState(true);
  const handlePageChange = (event, value) => {
    setPage(value);
    var preIndex= (value-1) *10;
    setPaginatedCoins(coins.slice(preIndex , preIndex+10))
  };


  const onSearchChange = (e)=>{
    setSearch(e.target.value);
  }
  var filteredChange = coins.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())||
  item.symbol.toLowerCase().includes(search.toLowerCase())
);
useEffect(()=>{
getData()
  },[])

  const getData = async() =>{
    const myCoins = await get100Coins();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0 ,10));
      setIsLoading(false);
    }
    

  }
  return (
    <>
     <Header/>
     <BackToTop/>
    {
      isLoading ? (<Loding/>) : (
        <div>
       
        <Search search={search} onSearchChange={onSearchChange}/>
        <TabComponent coin={ search ? filteredChange : paginatedCoins}/>
        {!search &&
         <PaginationControlled page={page} handlePageChange={handlePageChange}/>
        }    
        
    </div>

      )
    }
    <Footer/>
    </>
    
  )
}

export default DashboardPage;