import Image from 'next/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

function Testimonials () {
  
  
  
  return (

<div id='testimonials' className="p-5 bg-black text-white " >

<h1  className="text-6xl font-serif text-center  mb-5 m-3 p-10 font-bold">Projects</h1>


<div>

<div>
<h1 className="text-3xl mt-5 m3 p-10 text-md-start text-sm-center">E-commerce store</h1>
<Image 
  onClick={event => window.location.href='https://spendlet.com/'}
  alt="spendlet"
  src="/spendlet.PNG"  
  width="500px"
  height="300px"
/>


<br/>
<Link href="https://spendlet.com/">
<a className="border bg-blue-500 p-4 text-white">Live site</a>
</Link>

</div>

<div>
<h1 className="text-3xl mt-5 m3 p-10 text-md-start text-sm-center">Podcast</h1>
<Image 
  onClick={event => window.location.href='https://github.com/shar27/gatsby-contentful-podcast'}
  alt="podcast"
  src="/podcast.jpg"  
  width="500px"
  height="300px"
/>
<br/>
<Link href="https://github.com/shar27/gatsby-contentful-podcast">
<a className="bg-blue-500 p-4 rounded-lg text-white">In production.</a>
</Link>

</div>

<div>
<h1 className="text-3xl mt-5 m3 p-10 text-md-start text-sm-center">Candle landing page</h1>
<Image 
  onClick={event => window.location.href='https://teacher-esl.com'}
  alt="wise"
  src="/candles.jpg"  
  width="500px"
  height="300px"
/>
<br/>
<Link href="https://teacher-esl.com">
<a className="border bg-blue-500 p-4 text-white">In production</a>
</Link>

</div>
<div>
<h1 className="text-3xl mt-5 m3 p-10 text-md-start text-sm-center">Landing page</h1>
<Image 
  onClick={event => window.location.href='https://www.wycombehive.org/'}
  alt="wise"
  src="/wise.PNG"  
  width="500px"
  height="300px"
/>
<br/>
<Link href="https://www.wycombehive.org/">
<a className="border bg-blue-500 p-4  text-white">Live site</a>
</Link>
</div>

</div>
</div>









    )
}
export default Testimonials