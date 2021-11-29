import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import {useState } from 'react'

function Otherwork() {
  
    
    return (
        <div className="container p-5">
          <h1 className=" display-2 text-center border">Other Projects</h1>  

          <h1 className="display-5 m1 p-7  text-right mb-4" >Weather app</h1>
<Image

  onClick={event => window.location.href='https://weather-this.netlify.app/'}
  alt="Weather"
  src="/weather.png"  
  width="500px"
  height="300px"
/>

    <p className="lead text-right mt-4 mb-4">
     Weather app that utilises an API call.
</p>

<h1 className="display-5 m1 p-7 text-right mb-4" >Teaching site</h1>
<Image

onClick={event => window.location.ref='https://teacher-esl.com/'}
  alt="Teaching"
  src="/myteachsite.PNG"  
  width="500px"
  height="300px"
/>
    
    <p className="lead text-right mt-4 mb-4">
    A Teaching site built with Nextjs, Bootstrap, Stripe, Firebase and Mailchimp.
</p>


<h1 className="display-5 m1 p-7 text-right mb-4" >Google clone</h1>
<Image

onClick={event => window.location.ref='https://googlecl1.netlify.app/'}
  alt="Google"
  src="/googleclone.png"  
  width="500px"
  height="300px"
/>
    
    <p className="lead text-right mt-4 mb-4">
    A Google clone that uses just HTML and CSS.
</p>


<h1 className="display-5 m1 p-7   text-right mb-4" >Tesla Clone</h1>
<Image
onMouseEnter ={()=> setIsShown(true)} 
onClick={event => window.location.ref='https://tesla-shar-clone.netlify.app/'}
  alt="Tesla"
  src="/teslaclone.PNG"  
  width="500px"
  height="300px"
/>
    
    <p className="lead text-right mt-4 mb-4">
     A clone Tesla site using React.JS and Redux.
</p>

        </div>
    )
}

export default Otherwork
