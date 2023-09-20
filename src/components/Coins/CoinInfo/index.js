import React,{useState} from 'react';
import "./style.css";

function CoinInfo({heading , des}) {
    const shortDesc = des.slice(0,350)+ "<p style='color:var(--grey)'> .....Read More.....</p>";
    const longDesc = des  + "<p style='color:var(--grey)'> .....Read Less.....</p>";
  const [flag,setFlag] = useState(false);
  
    return (
    <div className='main-div' style={{padding:"0rem 1rem"}}>
        <h1  className='coin-info-heading'
        >{heading}</h1>
        {
            des.length > 350 ? (
                <p
            onClick={()=>setFlag(!flag)}
            className='coin-info-desc'
            dangerouslySetInnerHTML={{__html: !flag ? shortDesc :longDesc }}
        />
            ):(
                <p
                    dangerouslySetInnerHTML={{__html:des}}
                />
            )
        }
        
    </div>
  )
}

export default CoinInfo;
