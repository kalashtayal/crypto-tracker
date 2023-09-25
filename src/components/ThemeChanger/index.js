import React,{useEffect,useState} from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function SwitchesSize() {
    const [theme ,setTheme] = useState('dark-theme');
    const change = () =>{
if(theme=== 'dark-theme'){
    setTheme('light-theme')
} else{
    setTheme('dark-theme')
}
    };
    useEffect(()=>{
        document.body.className = theme;
    },[theme]);
  return (
    <div>
    
      <Switch {...label} defaultChecked onClick={change}/> 
    </div>
  );
}




