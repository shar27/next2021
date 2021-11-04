import { InlineWidget } from "react-calendly";



function Services () {

  return (


<div class="container p-5" >
<h1  class="display-2 m-4 p-10 text-center border" >Services</h1>
<div class="row">
<div class="col">

<h1 class=" display-2 m3 p-10 text-left">1. Consultation</h1>
<img  class="shadow-lg" src="./consult.jpg"  
  width="500px"
  height="300px"
/>
    <p class="lead text-left mt-4 ">
  A free 30 minute phone call, with no strings attached. Where we discuss your goals, objectives and timelines.
</p>

<h1 class="display-2 m1 p-7  text-left" >3. Development</h1>
<img class="shadow"  src="./code3.jpg"  
  width="500px"
  height="300px"
/>
    
    <p class="lead text-left mt-4">
      This is where I transform the design to a powerful website.
</p>

    
</div>

<div class="col">

<h1 class="display-2 m3 p-10  text-left " > 2. Design</h1>
<img class="shadow" src="./design.jpg"  
  width="500px"
  height="300px"
/>
    
    <p class="lead text-left mt-4">
  
  Need a design but not sure where to begin? I am happy to take over this process and walk you through each step. 
  
</p>

    <h1 class="display-2 m3 p-10 text-left" >4. Deployment</h1>
    <img class="shadow" src="./deployment.jpg"  
  width="500px"
  height="300px"
/>
    
<p class="lead text-left mt-4">
This is where we put your site live for the world to see!  
</p>
</div>

<div class="col">
<h1 class="display-2 m3 p-10  text-left" >5. Maintenance</h1>
<img class="shadow" src="./maintena.jpg"  
  width="500px"
  height="300px"
/>
    
<p class="lead text-left mt-4">
1 free month of maintenance to ensure your site is functioning as it should be. 
</p>
</div>

  <div  id="div" class="col">
<h1 class="display-2 m3 p-10  text-center">Calendar</h1>
<InlineWidget styles={{height: '400px'}} url="https://calendly.com/shariqahmed" />
    
<p class="lead text-left mt-4">
Seen enough? Check out my availability here.
</p>
</div>


</div>
</div>
    )
}

export default Services