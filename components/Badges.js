import Image from 'next/image'
import Fade from 'react-reveal/Fade'

function Badges () {
    return (
        <div className="bg-white d-flex justify-content-center bg-light">
        <div  className="row">
        <Fade top>
        <div className="col-12 text-center">
        
        <h1 className="bg-white display-2 text-sm-start text-md-center mb-5 text-dark  fw-bold">Technology</h1>
  <Image
    alt="tech" 
    className="pe-1"
    src="/reacticon.png"
    width="150"
    height="150"

    />

<Image
    alt="tech" 
    className="pe-1"
    src="/mysql.png"
    width="150"
    height="150"

    />
<Image
    alt="tech" 
    className="pe-1"
    src="/nodejs.png"
    width="150"
    height="150"

    />

  <Image
  alt="tech"
    className="pe-2 ps-2 "
    
    src="/nextjs2.png"
    width="150"
    height="150"

    />

<Image
alt="tech"
    className="pe-2 ps-2"
    src="/gatsbyjs.jpg"
    width="170"
    height="150"

    />




<div className="col">



<Image
    alt="tech" 
    className="pe-1"
    src="/redis.png"
    width="150"
    height="150"

    />
    
<Image
    alt="tech" 
    className="pe-1"
    src="/Servicenow.png"
    width="250"
    height="250"

    />


<Image
    alt="tech" 
    className="pe-1"
    src="/graphql.png"
    width="200"
    height="200"

    />


      

<Image
alt="tech"
    className="pe-1"
    src="/firebase.png"
    width="170"
    height="150"

    />
    

    <div className="col">
<Image
alt="tech"
    className=" ps-4"
    src="/bootstrap.png"
    width="150"
    height="150"
/>

<Image
alt="tech"
    className="pe-1"
    src="/matui.png"
    width="170"
    height="150"

    />


<Image
alt="tech"
    className="pe-2 ps-2"
    src="/matcss.png"
    width="170"
    height="150"

    />

    <Image
    alt="tech" 
    className="pe-1"
    src="/tailwind-css.png"
    width="150"
    height="150"

    />


<Image
alt="tech"
    className="pe-1 ps-1"
    src="/mailchimp.png"
    width="170"
    height="150"

    />

<div className='col'>
<Image
alt="tech"
    className="pe-1 ps-1"
    src="/wp.png"
    width="170"
    height="150"

    />
<Image
alt="tech"
    className="pe-1 ps-1"
    src="/shopify.png"
    width="170"
    height="150"

    />
<Image
alt="tech"
    className="pe-1 ps-1"
    src="/contentful.png"
    width="170"
    height="150"

    />

<Image
alt="tech"
    className="pe-1 ps-1"
    src="/strapilogo.png"
    width="200"
    height="200"

    />

<Image
alt="tech"
    className="pe-1 ps-1"
    src="/stripe.png"
    width="200"
    height="200"

    />

    

</div>
    </div>
    </div>

</div>
</Fade>
</div>

</div>

    )
}

export default Badges