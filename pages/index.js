import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';
import styles from '../styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Services from './components/Services'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Nav from './components/Nav'
import { spacing } from '@mui/system';
import React, {useState} from 'react';





export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  

  

  const theme = {
    spacing: 8,
  }

  const hoveredStyle = {
    cursor: 'pointer'
  };
  
  
  return (
<div>
   <Head>
     <title>Home</title>
    </Head>
 <div>
   <Nav/>
   </div>
   
    <div className="player-wrapper">
   <div className="container">
    
   </div>

    <div>
   
    <ReactPlayer 
   priority
   autoPlay 
   loop
   muted
   className='react-player'
    url="https://player.vimeo.com/external/241674181.hd.mp4?s=2c996895e8d51489ca31eba756f0c8fdca6017fb&profile_id=174"    
    playing={isPlaying}
    height = '100%'
    width = '100%'
     
  />
  </div>
  </div>
    
    

   <section className={styles.containerabout}> 
   <figure className="text-center m-5 p-5 " >
    <blockquote className="blockquote">
    <p className={styles.pquote}>"53% of mobile users abandon slow websites after just 3 seconds"</p>
    </blockquote>
  <figcaption className="blockquote-footer">
  <cite title="Source Title">Google</cite>
  </figcaption>
  </figure>
  </section>
   

<hr/>


<Services/>

<Testimonials/>
<Contact/>
<div className="d-flex justify-content-center"> 
<GitHubIcon onClick={event => window.location.href='https://github.com/shar27/'} 
style={hoveredStyle} 
fontSize="large" 
sx={{ 
  mb: 2,
  display: 'flex-inline'
  
    }}/>
<LinkedInIcon onClick={event => window.location.href='https://www.linkedin.com/in/shar-ahmed'} 
style={hoveredStyle} 
fontSize="large" 
sx={{
  mb: 2,
  display: 'flex-inline'
}} />
    </div>
   </div>
   
      
   
    )
}
