import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Services from './components/Services'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Nav from './components/Nav'
import { spacing } from '@mui/system';


export default function Home() {
  
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

<Nav/>
    
  <div className="container">
  <img src="profile-warsaw.jpg" className={styles.imgprofile} alt="me"></img>
  
  </div>

   <section className={styles.intro}> 
  
   <h5 class="display-4 m-5 pb-0 p-5">Hello, Hola, 你好！，سلام ,  Kiddan!</h5>
   
   <h5 class="display-5 m-5" >My name is shar and I am a web developer from the UK!</h5> 
   </section>

    

   <section className={styles.containerabout}> 
   <figure class="text-center m-5 p-5 " >
    <blockquote class="blockquote">
    <p className={styles.pquote}>"I am the master of my fate, I am the captain of my soul"</p>
    </blockquote>
  <figcaption class="blockquote-footer">
    William Ernst Henley,<cite title="Source Title"> Invictus</cite>
  </figcaption>
  </figure>
  </section>
   

<hr/>


<Services/>

<Testimonials/>
<Contact/>
<div class="d-flex justify-content-center"> 
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
