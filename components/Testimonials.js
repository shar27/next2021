import Image from 'next/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

function Testimonials () {
  
  
  
  return (

<div id='testimonials' className="p-5 bg-light text-dark" >

<h1  className="display-2 mb-5 m-3 p-10 col-12 text-sm-center text-md-center  text-lg-center">What do people say....</h1>
<div className="row">
<Fade left>
<div className="col">

<h1 className="display-2 mt-5 m3 p-10 text-md-start text-sm-center">E-commerce store</h1>
<Image 
  onClick={event => window.location.href='https://spendlet.com/'}
  alt="spendlet"
  src="/spendlet.PNG"  
  width="500px"
  height="300px"
/>
<p className="lead text-left mt-4">
"I hired Shariq A. to help with my Shopify store's SEO, loading speed/performance and rebranding. 
He was efficient and had a quick turnaround. He took the time to understand what I wanted to achieve, was very responsive and kept me in the loop all the time. 
Given that English is both of our native languages, it was also easier for us to communicate. 
I had previously worked with another developer where English wasn't their first language and it was harder for me to explain what I wanted. Shariq also helped me to understand each part of what he was doing 
by providing me with relevant resources. Overall, Shariq is an excellent communicator and has a great work ethic. Will definitely use him again for future projects. Highly recommend!"
</p>

<Link href="https://spendlet.com/">
<a className="btn btn-primary text-white">Live site</a>
</Link>

<h1 className="display-2 mt-5 m3 p-10 text-md-start text-sm-center">Podcast</h1>
<Image 
  onClick={event => window.location.href='https://github.com/shar27/gatsby-contentful-podcast'}
  alt="podcast"
  src="/podcast.jpg"  
  width="500px"
  height="300px"
/>
<p className="lead text-right mt-4 mb-4">
      "Shariq was really knowledgeable and he explained each step to me. He also explained each tech he planned on using.
      He was also available as and when I needed him which was great."
</p>
<Link href="https://github.com/shar27/gatsby-contentful-podcast">
<a className="btn btn-primary text-white">In production.</a>
</Link>

<h1 className="display-2 mt-5 m3 p-10 text-md-start text-sm-center">Landing page</h1>
<Image 
  onClick={event => window.location.href='https://www.wycombehive.org/'}
  alt="wise"
  src="/wise.PNG"  
  width="500px"
  height="300px"
/>
<p className="lead text-right mt-4 mb-4">
      "Shariq has been maintaining our site as well as helping us migrate to a more stable site. He has been 
      very communciative and has kept us in the know at all times."
</p>
<Link href="https://www.wycombehive.org/">
<a className="btn btn-primary text-white">Live site</a>
</Link>


<h1 className="display-2 m1 p-7  text-right mb-4" >Restaurant</h1>
<Image 
  alt="Restaurant"
  src="/background1.jpg"  
  width="500px"
  height="300px"
/>
    
    <p className="lead text-right mt-4 mb-4">
      "Shariq was really helpful and efficient, I reached out to him because I had been running a successful business
      offline and I wanted to make the switch to online. I am not the most technical person however he explained each
      step really well and kept me in the loop at all times."
</p>

<Link href="www.shar-ahmed.com">
<a className="btn btn-primary text-white">In production.</a>
</Link>


    
</div>
</Fade>
</div>

</div>

    )
}
export default Testimonials