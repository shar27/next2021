import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@material-ui/core/styles'
import { alpha } from '@mui/material/styles';
import { flexbox } from '@mui/system';
import { spacing } from '@mui/system';
import Head from 'next/head';
import Fade from 'react-reveal/Fade'
import WebIcon from '@mui/icons-material/Web';


export default function About () {
  
const theme = {
  spacing: 8,
}

  const hoveredStyle = {
    cursor: 'pointer'
  };
  
  return (
        
<div>
<Head>
  <title>About</title>
  <meta name="description" content="An introduction on who I am and what technology I like to use for my site" />
</Head>
<ul className="nav justify-content-end m-3 bg-white">
  
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link m-2 p-1  text-dark fw-bold">Home</a>
  </Link>
  </li>
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link m-2 p-1   text-dark fw-bold" >Services</a>
    </Link>
  </li>
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link m-2 p-1   text-dark fw-bold"  >Testimonials</a>
    </Link>
  </li>
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link m-2 p-1   text-dark fw-bold"  >Contact</a>
    </Link>
  </li>
</ul>



  

  
<div className={styles.backgrounddiv}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L1440,32L1440,0L0,0Z"></path></svg>
  <section className={styles.intro}> 
  
  <div className="container mt-4">
  <Fade top>
  <h5 className=" display-4 me-4 mt-4 ">Hello, Hola, Cześć!</h5>
  <h5 className="display-4 mt-5 mb-5 m-5 pt-4 pb-4 ms-4 ">  你好, سلام   </h5>
  </Fade>
  </div>
  <Fade bottom>
  <h5 className="display-5 text-center me-4" >My name is Shar and I am a web developer from the UK!</h5> 
  </Fade>
  </section>
        
<div  className="container text-white"> 
<Fade left>
    <h1 className="display-3 m-5 border text-center shadow-sm  " >About me</h1>
    <p className="lead text-center mb-5">Hello and welcome to my site. My name is Shar and I am from the UK. I was born and raised in a small
    town called High Wycombe. Currently I am based in Poznan, Poland. You see, I love traveling and I love exploring the unknown.
    A byproduct of traveling is learning a new language, a new way of thinking and an opportunity for growth.
    To date, I have visited 27 countries and I have lived in 3 of them. </p>
    </Fade>
    <div className="container shadow d-flex flex-row justify-content-center mt-4">
          <Fade right>
        <ol className="list-unstyled">
       <h5 className=" mb-4"><span className="me-4">Human Languages</span></h5>
            <li>English</li>
            <li>Spanish</li>
            <li>Mandarin</li>
            <li>Punjabi</li>
            <li>Urdu</li>
        </ol>
        </Fade>
        <Fade left>
        <ol className="list-unstyled">
        <h5 className="text-center me-4 mb-4"><span>Machine Languages</span></h5>
            <li>React.js</li>
            <li>Gatsby.js</li>
            <li>Next.js</li>
            <li>Bootstrap</li>
            <li>Materialise</li>
           
        </ol>
        </Fade>
        <Fade right>
        <ol className="list-unstyled">
        <h5 className="text-start me-4 mb-4"><span>Services</span></h5>
            <li>Firebase</li>
            <li>Mailchimp</li>
            <li>Keystone.js</li>
            <li>Dropbox</li>
            <li>Calendly</li>
            <li>Stripe</li>
            <li>Paypal</li>
           
        </ol>
        </Fade>
    </div>
    
    <div>
      <h1 className="display-4 text-center mt-4">Portfolio links</h1>
          <p className="lead text-center mt-4 mb-5">If you are interested in some of my work, please visit my github/portfolio site (middle icon).</p>
     <div className="d-flex justify-content-center">
      <GitHubIcon 
      onClick={event => window.location.href='https://github.com/shar27/'} 
      style={hoveredStyle} 
      fontSize="large" 
      sx={{ 
        
      display: 'inline-flex',   
      justifyContent: 'center',
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
       
        display: 'inline-flex',
        justifyContent: 'center',
        mb: 1,
         }} />
         </div>
    </div>
    
    </div>
    </div>
</div>    
    
    )
}

