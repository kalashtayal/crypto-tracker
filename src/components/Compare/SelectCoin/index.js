import React ,{useEffect, useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import "./style.css"
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { get100Coins } from '../../../functions/get100Coin';

function SelectCoin({crypto1,crypto2,handleCoinChange}) {
    
    const [allCoins,setAllCoins] = useState([]);

    const styles = {
        height:"2.5rem",
          color:"var(--white)",
          "& .MuiOutlinedInput-notchedOutlined" :{
            borderColor:"var(--white)",
          },
          "& .MuiSvgIcon-root":{
            color:"var(--white)",
          },
          "&:hover": {
            "&& fieldset":{
              borderColor:"#3a680e9",
            },
          },
    }
   

    useEffect(() =>{
        getData()
    },[])

 async function getData(){
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
      
    }
  return (
    <div className='coins-flex'>
    <p>Cryoto-1</p>
        <Select
        sx={styles}
          value={crypto1}
          label="Crypto 1"
          onChange={(e)=>handleCoinChange(e , false)}
        >
         {allCoins
         .filter((item)=>item.id !== crypto2)
         .map((coin ,i)=> <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>)}
          
        </Select>
        <p>Cryoto-2</p>
        <Select
        sx={styles}
          value={crypto2}
          label="Crypto 2"
          onChange={(e)=>handleCoinChange(e , true)}
        >
         {allCoins
          .filter((item)=>item.id !== crypto1)
         .map((coin ,i)=> <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>)}
          
        </Select>
    </div>
  )
}

export default SelectCoin;