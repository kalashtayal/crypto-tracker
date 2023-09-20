import React , {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import "./style.css"
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectDays( {days,handleDaysChanges ,noPTag} ) {
  

  return (
    <div className='select-days'>
    {!noPTag &&  <p>Price change in last</p>}
    
   
        <Select
        sx={{
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
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChanges}
        >
         
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={60}>60 days</MenuItem>
          <MenuItem value={90}>90 days</MenuItem>
          <MenuItem value={120}>120 days</MenuItem>
          <MenuItem value={360}>1 year</MenuItem>
          
        </Select>
     
    </div>
  );
}
