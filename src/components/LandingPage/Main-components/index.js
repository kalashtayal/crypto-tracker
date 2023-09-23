import React from 'react'
import "./style.css"
import Button from '../../Common/Button';
import graid from '../../../assets/grad-img.png';
import iphone from "../../../assets/iphone-project.png"; 
import {motion} from 'framer-motion';

function LandingPage() {
  return (
    <div className='flex-box'>
        <div className='left-side'>

<motion.h1 className='track-heading'
initial={{opacity:0 , scale:0}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
>Tracker Crypto</motion.h1>

<motion.h1 className='real-heading'
initial={{opacity:0 , scale:0}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
>Real Time .</motion.h1>

<motion.p className='line-track'
initial={{opacity:0 , scale:0}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
>Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>

<motion.div className='btn-2'
initial={{opacity:0 , scale:0}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}>
<Button text={"Dashboard"}/>
<Button text={"Share"} outlined={true}/>
</motion.div>
        </div>
        <div className='phone-container'>
<motion.img src={iphone} className='iphone'
initial={{y:-10}}
animate={{y: 10}}
transition={{
  type: "smooth",
  repeatType:"mirror",
  duration:2,
  repeat:Infinity
  }}

/>
<img src={graid} className='gradient'/>

        </div>
    </div>
  )
}

export default LandingPage;
