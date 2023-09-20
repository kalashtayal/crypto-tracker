import React from 'react';
import "./style.css";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Link } from "react-router-dom"

function Grid({coin}) {

  return (
    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}>
        <div className='info-flex'>
            <img src={coin.image} className='info-logo'/>
            <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name}</p>
            </div>
        </div>
        {coin.price_change_percentage_24h > 0 ?(
          <div className='chip-flex'>
          <div className='chip-btn'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='chip-icon'>
            <TrendingUpIcon/>
          </div>
        </div>
        ):(
          <div className='chip-flex'>
          <div className='chip-btn btn-red'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='chip-icon chip-red'>
            <TrendingDownIcon/>
          </div>
        </div>
        )}
       <div>
       <h3 className='coin-price' style={{color:coin.price_change_percentage_24h > 0 ?
       "var(--green)": "var(--red)"
       }}
       >${coin.current_price.toLocaleString()}</h3>
       <p className='total-vol'> Total Volume : {coin.total_volume.toLocaleString()}</p>
       <p className='total-vol'>Market Cap: ${coin.market_cap.toLocaleString()}</p>
       </div>
    </div>
    </Link>
  )
}

export default Grid;