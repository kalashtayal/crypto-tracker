import React from 'react';
import "./style.css";
import CircularProgress from "@mui/material/CircularProgress";

function Loding() {
  return (
    <div className='loading-page'>
        <CircularProgress />
    </div>
  )
}

export default Loding;