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
<ul className="nav justify-content-end m-3">
  
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link m-2 p-1  text-dark">Home</a>
  </Link>
  </li>
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link m-2 p-1   text-dark" >Services</a>
    </Link>
  </li>
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link m-2 p-1   text-dark"  >Testimonials</a>
    </Link>
  </li>
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link m-2 p-1   text-dark"  >Contact</a>
    </Link>
  </li>
</ul>


<div className="container d-flex align-items-center">
  <Image 
  className="rounded-circle d-flex align-items-center"
  alt="profile" 
  src="/profile-warsaw.jpg" 
  alt="me"
  width="400"
  height="400"
  priority
  />
  

  

  </div>
  <section className={styles.intro}> 
  
  <h5 className=" display-4 mt-5 -5 mb-5 pt-4 pb-4  text-sm-center text-md-center text-lg-center">Hello, Hola, Cześć!</h5>
  <h5 className="display-4 mt-5 mb-5 m-5 pt-4 pb-4  text-sm-center text-md-center text-lg-center">  你好, سلام   </h5>
  
  <h5 className="display-5 mt-5 m-5 p-2 text-sm-center text-md-center text-lg-center" >My name is Shar and I am a web developer from the UK!</h5> 
  </section>
        
<div  className="container"> 
    <h1 className="display-3 m-5 border text-center shadow-sm " >About me</h1>
    <p className="lead text-center mb-5">Hello and welcome to my site. My name is Shar and I am from the UK. I was born and raised in a small
    town called High Wycombe. Currently I am based in Poznan, Poland. You see, I love traveling and I love exploring the unknown.
    If you already can't tell, a byproduct of traveling is learning a new language, a new way of thinking and an opportunity for growth.
    To date, I have visited 27 countries and I have lived in 3 of them. </p>
    
    <div className="container shadow d-flex flex-row justify-content-center mt-4">
          
        <ol className="text-left">
       <h5><span>Human Languages</span></h5>
            <li>English</li>
            <li>Spanish</li>
            <li>Mandarin</li>
            <li>Punjabi</li>
            <li>Urdu</li>
        </ol>
        <ol>
        <h5 className="text-start"><span>Machine Languages</span></h5>
            <li>React.js</li>
            <li>Gatsby.js</li>
            <li>Next.js</li>
            <li>Bootstrap</li>
            <li>Materialise</li>
           
        </ol>
    </div>
    
    <div>
      <h1 className="display-4 text-center mt-4">Portfolio links</h1>
          <p className="lead text-center mt-4 mb-5">If you are interested in some of my work, please visit my github</p>
     <div className="d-flex justify-content-center">
      <GitHubIcon 
      onClick={event => window.location.href='https://github.com/shar27/'} 
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
    
    
    )
}

