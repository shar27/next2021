import Link from 'next/link'
import Pulse from 'react-reveal/Pulse';



function Nav () {
    
  
  return (

<div>
  <title>About</title>


<ul  className="nav justify-content-end m-1 p-1 col-12 pe-auto text-white fw-bold">
<Pulse>

  <li className="nav-item">
  <Link  href="About">
    <a  className="nav-link m-2 p-1  pe-auto text-white">About me</a>
    </Link>
  </li>
  <li className="nav-item">
  <Link  href="Blog">
    <a  className="nav-link m-2 p-1  pe-auto text-white">Blog</a>
    </Link>
  </li>
  </Pulse>

  <Pulse>
  <li className="nav-item">
    <Link href="#services"> 
    <a className="nav-link m-2 p-1   text-white">Services</a>
    </Link>
  </li>
  </Pulse>
  
  <Pulse>
  <li className="nav-item">
  <Link href="#testimonials"> 
    <a className="nav-link m-2 p-1   text-white" >Testimonials</a>
  </Link>
  </li>
  </Pulse>
  
  <Pulse>
  <li className="nav-item">
  <Link href="#contact"> 
    <a className="nav-link m-2 p-1   text-white">Contact</a>
    </Link>
 </li>
 </Pulse>
</ul>

</div>
    )
}

export default Nav