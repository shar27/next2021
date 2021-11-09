import Image from 'next/image'


function Badges () {
    return (
        <div className="container d-flex justify-content-center">
        <div  className=" row">
        <div className="col-12">
        <h1 className="display-5 text-center mb-4">Technology</h1>
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

<div className="col">
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