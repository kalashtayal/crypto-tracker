import React from 'react'
import "./style.css";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';
import { Link } from "react-router-dom";
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import StarIcon from '@mui/icons-material/Star';

function List({coin}) {

  
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
    <td >
            <img src={coin.image} className='td-img' />
           
            </td>
            
            <td>
            <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name}</p>
            </div>
        </td>
        <Tooltip placement='bottom-start' title="Price change in 24Hrs">
        {coin.price_change_percentage_24h > 0 ?(
          <td className='chip-flex'>
          <div className='chip-btn'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='chip-icon td-icon'>
            <TrendingUpIcon/>
          </div>
        </td>
        ):(
          <td className='chip-flex'>
          <div className='chip-btn btn-red'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='chip-icon chip-red td-icon'>
            <TrendingDownIcon/>
          </div>
        </td>
        )}
        </Tooltip>
        <Tooltip title="current-price">
       <td>
       <h3 className='coin-price td-center' style={{color:coin.price_change_percentage_24h > 0 ?
       "var(--green)": "var(--red)"
       }}
       >${coin.current_price.toLocaleString()}</h3></td></Tooltip>
     <td>  <p  className='list-vol td-right td-vol-total'>${coin.total_volume.toLocaleString()}</p>
     </td>
    <td id='desk-td-mkt'>
      <p className='list-vol td-right'>${coin.market_cap.toLocaleString()}</p>
      
    </td>
   
    <td id='mobile-td-mkt'> 
      <p className='list-vol td-right'>${convertNumber(coin.market_cap)}</p>
    </td>
       

    </tr>
    </Link>
  )
}

export default List ;

