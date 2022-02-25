import Image from "next/image";
import Fade from "react-reveal/Fade";

function Badges() {
  return (
    <div className="bg-white ">
      <h1 className=" text-black text-6xl md:text-6xl lg:text-6xl font-serif  text-center md:text-center lg:text-center mt-20 mb-10 ml-5 md:ml-0 lg:ml-0">
            Technology
          </h1>

      <Fade left>
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-4 ml-40 mb-10 ">
          <div>
          <Image
            alt="tech"
            className="pl-1"
            src="/reacticon.png"
            width="150"
            height="150"
          />

          <Image
            alt="tech"
            className="pl-1"
            src="/mysql.png"
            width="150"
            height="150"
          />
          <Image
            alt="tech"
            className="pl-1"
            src="/nodejs.png"
            width="150"
            height="150"
          />

          <Image
            alt="tech"
            className="pe-2 ps-2 "
            src="/nextjs2.png"
            width="150"
            height="150"
          />
          </div>
          <div>
            <Image
              alt="tech"
              className="pe-2 ps-2"
              src="/gatsbyjs.jpg"
              width="170"
              height="150"
            />

            <Image
              alt="tech"
              className="pl-1"
              src="/redis.png"
              width="150"
              height="150"
            />

            <Image
              alt="tech"
              className=""
              src="/Servicenow.png"
              width="200"
              height="200"
            />

            <Image
              alt="tech"
              className=""
              src="/graphql.png"
              width="200"
              height="200"
            />
             </div>
            <div>
              <Image
                alt="tech"
                className=""
                src="/firebase.png"
                width="170"
                height="150"
              />

              <Image
                alt="tech"
                className=""
                src="/contentful.png"
                width="150"
                height="150"
              />

              <Image
                alt="tech"
                className="pe-1"
                src="/matui.png"
                width="170"
                height="150"
              />

                <Image
                alt="tech"
                className=""
                src="/ts.png"
                width="200"
                height="200"
              />
          
               </div>
              <div>
                <Image
                  alt="tech"
                  className="pe-1"
                  src="/tailwind-css.png"
                  width="150"
                  height="150"
                />

                <Image
                  alt="tech"
                  className="pe-1 ps-1"
                  src="/mailchimp.png"
                  width="170"
                  height="150"
                />

                <Image
                  alt="tech"
                  className="pe-1 ps-1"
                  src="/wp.png"
                  width="170"
                  height="150"
                />
                <Image
                  alt="tech"
                  className="pe-1 ps-1"
                  src="/shopify.png"
                  width="170"
                  height="150"
                />
                 
               
                 </div>       
                 
                 
               

             
              

              </div>
            
         
       
      </Fade>
    </div>
  );
}

export default Badges;
