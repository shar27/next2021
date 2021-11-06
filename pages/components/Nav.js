import Link from 'next/link'


function Nav () {
    
  
  return (

<div>
  <title>About</title>


<ul  className="nav justify-content-end m-1 p-1 col-12 pe-auto">
   
  <li className="nav-item">
  <Link  href="About">
    <a  className="nav-link m-2 p-1  pe-auto text-dark">About me</a>
    </Link>
  </li>
  
  <li className="nav-item">
    <Link href="#services"> 
    <a className="nav-link m-2 p-1   text-dark">Services</a>
    </Link>
  </li>
  <li className="nav-item">
  <Link href="#testimonials"> 
    <a className="nav-link m-2 p-1   text-dark" >Testimonials</a>
  </Link>
  </li>
  <li className="nav-item">
  <Link href="#contact"> 
    <a className="nav-link m-2 p-1   text-dark">Contact</a>
    </Link>
 </li>
</ul>

</div>
    )
}

export default Nav