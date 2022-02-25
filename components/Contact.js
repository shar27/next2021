



function Contact () {
  
  const openEmail = (e) => {
    e.preventDefault();
    window.open('mailto:shariq.ahmed@hotmail.co.uk?subject&body=Hi')
  }
  
    return (


  <div id='contact' className="bg-white flex justify-center mt-10 mb-5 ml-10 md:ml-0 lg:ml-0">
  
    <button onClick={openEmail} 
    type="submit" 
    className="bg-blue-500 p-5 text-white font-bold rounded-lg "
    
    >Contact me</button>

</div>
    )
}

export default Contact