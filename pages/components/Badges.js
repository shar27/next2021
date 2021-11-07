import Image from 'next/image'


function Badges () {
    return (
        <div className="container d-flex justify-content-around">
<div  className="row">
<div className="col-12 p-2 ">
  <Image 
  className="pe-1"
    src="/reacticon.png"
    width="150"
    height="150"

    />

  <Image
    className="pe-2 ps-2 "
    
    src="/nextjs2.png"
    width="150"
    height="150"

    />

<Image
    className="pe-2 ps-2"
    src="/gatsbyjs.jpg"
    width="170"
    height="150"

    />


<Image
    className="pe-2 ps-2"
    src="/matcss.png"
    width="170"
    height="150"

    />

<div className="col m-2 p-2 d-flex justify-content-around">
<Image
    className="pe-1"
    src="/matui.png"
    width="170"
    height="150"

    />


<Image
    className=" ps-4"
    src="/bootstrap.png"
    width="150"
    height="150"
/>


<Image
    className="pe-1 ps-1"
    src="/mailchimp.png"
    width="170"
    height="150"

    />

    
<Image
    className="pe-1"
    src="/firebase.png"
    width="170"
    height="150"

    />
    </div>
</div>
</div>
</div>

    )
}

export default Badges