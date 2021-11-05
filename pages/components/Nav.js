import Link from 'next/link'


function Nav () {
    
  
  return (

<div>
  <title>About</title>


<ul  class="nav justify-content-end m-3 pe-auto">
   
  <li class="nav-item">
  <Link href="About">
    <a  class="nav-link m-2 p-1 border border-dark pe-auto text-dark">About me</a>
    </Link>
  </li>
  
  <li class="nav-item">
    <Link href="/"> 
    <a class="nav-link m-2 p-1 border border-dark  text-dark">Services</a>
    </Link>
  </li>
  <li class="nav-item">
  <Link href="/"> 
    <a class="nav-link m-2 p-1 border border-dark  text-dark" >Testimonials</a>
  </Link>
  </li>
  <li class="nav-item">
  <Link href="/"> 
    <a class="nav-link m-2 p-1 border border-dark  text-dark">Contact</a>
    </Link>
 </li>
</ul>

</div>
    )
}

export default Nav