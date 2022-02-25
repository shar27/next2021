import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import { useState } from "react";
import Fade from "react-reveal/Fade";

function Otherwork() {
  const [isShown, setIsShown] = useState(false);

const hoverStyle = {
  cursor: 'pointer'
}

  return (

  <div className="mt-20">
    <h1 className="text-6xl text-black text-center font-serif  ">Projects</h1>
  
    <div style={hoverStyle} className="container p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 m-5 ml-20 ">
 
<div className="text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-white shadow-slate-500 bg-white hover:opacity-95 rounded-lg container p-5">
<h1 className="text-3xl  ">E-commerce store</h1>
<Image

  src="/shopify.png"
  width="100"
    height="100"

/>
<Image 
className="mt-10 rounded-lg"
  onClick={event => window.location.href='https://spendlet.com/'}
  alt="spendlet"
  src="/spendlet.PNG"  
  width="500px"
  height="300px"
/>



  <br/>
<br/>
<Link href="https://spendlet.com/">
<a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 text-white font-bold rounded-lg p-4 text-lgxt-white">Live site</a>
</Link>

</div>

<div className="text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-white shadow-slate-500 bg-white hover:opacity-95 rounded-lg container p-5">
<h1 className="text-3xl ">Podcast</h1>
<Image

  src="/gatsbyjs.jpg"
  width="100"
  height="100"

/>
<Image
  src="/contentful.png"
  width="100"
  height="100"

/>
<Image
  src="/graphql.png"
  width="100"
  height="100"

/>
<Image
  src="/tailwind-css.png"
  width="100"
  height="100"

/>
<Image 
className="mt-10 rounded-lg"
  onClick={event => window.location.href='https://github.com/shar27/gatsby-contentful-podcast'}
  alt="podcast"
  src="/podcast.jpg"  
  width="500px"
  height="300px"
/>

  <br/>
<br/>
<Link href="https://github.com/shar27/gatsby-contentful-podcast">
<a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 font-bold rounded-lg p-4 text-lgg text-white">In production.</a>
</Link>

</div>

<div className="text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-white shadow-slate-500 bg-white hover:opacity-95 rounded-lg container p-5">
<h1 className="text-3xl  ">Candle landing page</h1>
<Image
  src="/gatsbyjs.jpg"
  width="100"
  height="100"

/>

<Image
  src="/tailwind-css.png"
  width="100"
  height="100"

/>
<Image 
className="mt-10 rounded-lg "
  onClick={event => window.location.href='https://teacher-esl.com'}
  alt="wise"
  src="/candles.jpg"  
  width="500px"
  height="300px"
/>

<br/>  

  <br/>
<br/>
<Link href="https://teacher-esl.com">
<a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 text-white font-bold rounded-lg p-4 text-lgxt-white">In production</a>
</Link>

</div>
<div className="text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-white shadow-slate-500 bg-white hover:opacity-95 rounded-lg container p-5">
<h1 className="text-3xl ">User profiles</h1>
<Image
  src="/reactjs.png"
  width="100"
  height="100"

/>
<Image
  src="/ts.png"
  width="100"
  height="100"

/>
<Image
  src="/tailwind-css.png"
  width="100"
  height="100"

/>
<Image
  src="/jest.png"
  width="100"
  height="100"

/>

<Image 
className="mt-10 rounded-lg "
  onClick={event => window.location.href='https://www.wycombehive.org/'}
  alt="wise"
  src="/user-profiles.PNG"  
  width="500px"
  height="300px"
/>

  <br/>
<br/>
<Link href="https://www.wycombehive.org/">
<a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 text-white font-bold rounded-lg p-4 text-lg">Live site</a>
</Link>
</div>
<div className="text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-white shadow-slate-500 bg-white hover:opacity-95 rounded-lg container p-5">
        <h1 className="text-2xl  text-black">
          Teaching-ESL
        </h1>
        <Image
  src="/nextjs.png"
  width="100"
  height="100"

/>
<Image
  src="/stripe.png"
  width="100"
  height="100"

/>
<Image
  src="/tailwind-css.png"
  width="100"
  height="100"

/>
<Image
  src="/contentful.png"
  width="100"
  height="100"

/>

        <Image
        className="rounded-lg"
          onClick={(event) =>
            (window.location.ref = "https://teaching-esl-shar27.vercel.app/")
          }
          alt="Teaching"
          src="/teachsite.PNG"
          width="500px"
          height="300px"
        />
       <br/>
       <br/>

<br/>
        <Link href="https://teacher-esl.com/">
          <a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 font-bold rounded-lg p-4 text-lgg text-white">Live site</a>
        </Link>
        <br/>
       <br/>
         <br/>
      
        <Link href="https://github.com/shar27/teaching-esl">
          <a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 font-bold rounded-lg p-4 text-lgg text-white">
            Github repo
          </a>
        </Link>
        </div>
        <div className="text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-white shadow-slate-500 bg-white hover:opacity-95 rounded-lg container p-5">
        <h1 className="text-2xl  text-black  mb-4">
          Local storage with hooks
        </h1>
        <Image
  src="/nextjs.png"
  width="100"
  height="100"

/>
<Image
  src="/tailwind-css.png"
  width="100"
  height="100"

/>
<Image
  src="/jest.png"
  width="100"
  height="100"

/>
        <Image
        className="rounded-lg"
          onClick={(event) =>
            (window.location.ref = "https://teaching-esl-shar27.vercel.app/")
          }
          alt="Teaching"
          src="/github-finest.PNG"
          width="500px"
          height="300px"
        />
       <br/>
       <br/>

<br/>
        <Link href="https://teacher-esl.com/">
          <a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 font-bold rounded-lg p-4 text-lgg text-white">Live site</a>
        </Link>
        <br/>
       <br/>
         <br/>
       
        <Link href="https://github.com/shar27/RepoFavs">
          <a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 font-bold rounded-lg p-4 text-lgg text-white ms-4">
            Github repo
          </a>
        </Link>
        </div>
      </div>
</div>
      


    
  );
}

export default Otherwork;
