import Link from 'next/link'
import React, { forwardRef ,useRef} from 'react'

function Nav () {
    const titleRef = useRef()

    

    function handleServiceClick () {
      titleRef.current.scrollIntoView({behaviour: 'smooth'})
    }
  
  return (

<div>
  <title>About</title>


<ul  className="nav justify-content-end m-1 p-1 col-12 pe-auto">
   
  <li className="nav-item">
  <Link  href="About">
    <a  className="nav-link m-2 p-1 border border-dark pe-auto text-dark">About me</a>
    </Link>
  </li>
  
  <li className="nav-item">
    <Link href="/"> 
    <a className="nav-link m-2 p-1 border border-dark  text-dark">Services</a>
    </Link>
  </li>
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link m-2 p-1 border border-dark  text-dark" >Testimonials</a>
  </Link>
  </li>
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link m-2 p-1 border border-dark  text-dark">Contact</a>
    </Link>
 </li>
</ul>

</div>
    )
}

export default Nav