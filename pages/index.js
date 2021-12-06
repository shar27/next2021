import Head from 'next/head'
import Image from 'next/image'
import WebIcon from '@mui/icons-material/Web';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';
import styles from '../styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Services from './components/Services'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Otherwork from './components/Otherwork';
import Nav from './components/Nav'
import { spacing } from '@mui/system';
import React, {useState} from 'react';
import IconText from './components/IconText'
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import Grid from '@material-ui/core/Grid';
import Badges from './components/Badges';
import FadeIn from 'react-fade-in';
import CookieConsent from 'react-cookie-consent'



export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  

  

  const theme = {
    spacing: 8,
  }

  const hoveredStyle = {
    cursor: 'pointer'
  };
  
  
  return (
    
<div className={styles.backgrounddiv}>
   <Head>
     <title>Home</title>
     <meta name="description" content="Cheap good quality websites built with the latest technology" />
    </Head>
 <div className={styles.nav}>
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
  


  

  <FadeIn delay={100} >
 <h1 className="display-4 text-center col-sm-12 mt-3 pt-4 mb-0 pb-0 text-white" >Did you know?</h1>
  <section> 
  
    <figure className="text-center col-sm-12 mb-4 m-5 mt-0 p-5 text-white" >
    <blockquote className="blockquote text-white">
    <p className={styles.pquote}><em>" In a study commissioned by Google and conducted by 55 and Deloitte,
     decreasing mobile site load times by just one tenth of a second resulted in major increases in conversion 
     rates — specifically, 8.4% for retail sites and 10.1% for travel sites. (Deloitte, 2019)"</em></p>
    </blockquote>
  <figcaption className="blockquote-footer text-white">
  <cite title="Source Title">Deloitte & Google</cite>
  </figcaption>
  </figure>
  
  </section>
  </FadeIn>

   
  



<FadeIn>


<Badges/>

</FadeIn>

<hr/>

<FadeIn delay={100}>
<Services/>
</FadeIn>
<FadeIn delay={100}>
<Testimonials/>
</FadeIn>
<Otherwork/>
<CookieConsent
  location="bottom"
  buttonText="Sure man!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  
</CookieConsent>
<Contact/>
<p className="lead text-center text-white fw-bold">If you would like to see more of my work please visit my Github and my Portfolio site(the middle icon).</p>

<div className="d-flex justify-content-center text-white fw-bold"> 
<GitHubIcon onClick={event => window.location.href='https://github.com/shar27/'} 
style={hoveredStyle} 
fontSize="large" 
sx={{ 
  mb: 2,
  display: 'flex-inline'
  
    }}/>
       <WebIcon 
      
      onClick={event => window.location.href='https://app.netlify.com/teams/shar27/sites'} 
      style={hoveredStyle} 
      fontSize="large" 
      sx={{ 
        
      display: 'inline-flex',   
      justifyContent: 'center',
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
