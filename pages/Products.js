import Link from 'next/link'
import Image from 'next/image'

function Products () {
   
   const hoveredStyle = {
       cursor: 'pointer'
   }
   
    return (

        <div>
        <title>Products</title>
        <ul  className="nav justify-content-end m-1 p-1 col-12 pe-auto">
   
        <li className="nav-item">
        <Link  href="/">
          <a  className="nav-link m-2 p-1  pe-auto text-dark">Home</a>
          </Link>
        </li>
        
        <li className="nav-item">
          <Link href="/#services"> 
          <a className="nav-link m-2 p-1   text-dark">Services</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link href="/#About"> 
          <a className="nav-link m-2 p-1   text-dark">About me</a>
          </Link>
       </li>
        <li className="nav-item">
        <Link href="/#testimonials"> 
          <a className="nav-link m-2 p-1   text-dark" >Testimonials</a>
        </Link>
        </li>
        <li className="nav-item">
        <Link href="/#contact"> 
          <a className="nav-link m-2 p-1   text-dark">Contact</a>
          </Link>
       </li>
      </ul>
      
        <div className="container ">
        <div className="row ">
        <div className="col">
        <h1 className="display-4 text-center">Coming soon!</h1>
        <p className="lead text-center" ><strong>Ready made templates that are easily customised to your preference.</strong></p>
        
        

        </div>
        </div>
        </div> 
        
        
        

      </div>
      
    )
}

export default Products