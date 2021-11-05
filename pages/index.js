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
   autoPlay={true} loop
   className='react-player'
    url="https://player.vimeo.com/external/241674181.hd.mp4?s=2c996895e8d51489ca31eba756f0c8fdca6017fb&profile_id=174"    
    playing={isPlaying}
    height = '100%'
    width = '100%'
     
  />
  </div>
  </div>
    
    

  


   <section className={styles.intro}> 
  
   <h5 className=" display-4 m-5 pb-0 p-5 text-sm-start text-md-center text-lg-center">Hello, Hola, 你好！，سلام ,  Kiddan!</h5>
   
   <h5 className="display-5 m-5 text-sm-start text-md-center text-lg-center" >My name is shar and I am a web developer from the UK!</h5> 
   </section>

    

   <section className={styles.containerabout}> 
   <figure className="text-center m-5 p-5 " >
    <blockquote className="blockquote">
    <p className={styles.pquote}>"I am the master of my fate, I am the captain of my soul"</p>
    </blockquote>
  <figcaption className="blockquote-footer">
    William Ernst Henley,<cite title="Source Title"> Invictus</cite>
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
