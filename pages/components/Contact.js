



function Contact () {
  
  const openEmail = (e) => {
    e.preventDefault();
    window.open('mailto:shariq.ahmed@hotmail.co.uk?subject&body=Hi')
  }
  
    return (


  <div class="container d-grid gap-2 col-6 mx-auto ">
  
    <button onClick={openEmail} 
    type="submit" 
    class="m-5 btn btn-outline-primary btn-lg item-center"
    
    >Contact me</button>

</div>
    )
}

export default Contact