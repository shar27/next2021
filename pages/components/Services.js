import { InlineWidget } from "react-calendly";
import Image from 'next/image'



function Services () {


  return (


<div className="container p-5" >
<h1  className="display-2 m-4 p-10 text-center border" >Services</h1>
<div className="row">
<div className="col">

<h1 className=" display-2 m3 p-10 text-left">Consultation</h1>
<Image alt="something"  
  className="shadow-lg" 
  src="/consult.jpg"  
  width="500px"
  height="300px"
  priority
/>
    <p className="lead text-left mt-4 ">
  A free 30 minute phone call, with no strings attached. Where we discuss your goals, objectives and timelines.
</p>

<h1 className="display-2 m1 p-7  text-left" >Development</h1>
<Image alt="something" className="shadow"  src="/code3.jpg"  
  width="500px"
  height="300px"
  priority
/>
    
    <p className="lead text-left mt-4">
      This is where I transform the design to a powerful website.
</p>

    
</div>

<div className="col">

<h1 className="display-2 m3 p-10  text-left " > Design</h1>
<Image alt="something" className="shadow" src="/design.jpg"  
  width="500px"
  height="300px"
  priority
/>
    
    <p className="lead text-left mt-4">
  
  Need a design but not sure where to begin? I am happy to take over this process and walk you through each step. 
  
</p>

    <h1 className="display-2 m3 p-10 text-left" >Deployment</h1>
    <Image alt="something" className="shadow" src="/deployment.jpg"  
  width="500px"
  height="300px"
  priority
/>
    
<p className="lead text-left mt-4">
This is where we put your site live for the world to see!  
</p>
</div>

<div className="col">
<h1 className="display-2 m3 p-10  text-left" >Maintenance</h1>
<Image alt="something" className="shadow" src="/maintena.jpg"  
  width="500px"
  height="300px"
  priority
/>
    
<p className="lead text-left mt-4">
1 free month of maintenance to ensure your site is functioning as it should be. 
</p>
</div>

  <div  id="div" className="col">
<h1 className="display-2 m3 p-10  text-center">Calendar</h1>
<InlineWidget styles={{height: '400px'}} url="https://calendly.com/shariqahmed" />
    
<p className="lead text-left mt-4">
Seen enough? Check out my availability here.
</p>
</div>


</div>
</div>
    )
}

export default Services