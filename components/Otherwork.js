import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import { useState } from "react";
import Fade from "react-reveal/Fade";

function Otherwork() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container p-5 text-white fw-bold">
      <h1 className=" display-2 text-center border fw-bold">Other Projects</h1>

      <div className="container p-5 text-white fw-bold">
        <div className="row">
          <Fade left>
            <div className="col-lg-6 col-sm-12">
              <h1 className="display-5 m1 p-7 text-right mb-4">
                Teaching site
              </h1>
              <Image
                onClick={(event) =>
                  (window.location.ref =
                    "https://teaching-esl-shar27.vercel.app/")
                }
                alt="Teaching"
                src="/teachsite.PNG"
                width="500px"
                height="300px"
              />

              <p className="lead text-right mt-4 mb-4">
                A Teaching site built with Nextjs, Tailwindcss, contentful,
                Stripe, Google analytics, adroll ,Nodejs, Mongodb and Mailchimp.
              </p>
              <Link href="https://teacher-esl.com/">
                <a className="btn btn-primary text-white">Live site</a>
                
              </Link>
              <Link href="https://github.com/shar27/teaching-esl" >
                <a className="btn btn-primary text-white ms-4" >Github repo</a>
                </Link>
            </div>
          </Fade>
          <Fade left>
            <div className="col-lg-6 col-sm-12">
              <h1 className="display-5 m1 p-7  text-right mb-4">Blog site</h1>
              <Image
                onClick={(event) =>
                  (window.location.href =
                    "https://next-contentful-teaching-blog.vercel.app/")
                }
                alt="blog"
                src="/teachingblog.PNG"
                width="500px"
                height="300px"
              />

              <p className="lead text-right mt-4 mb-4">
                A website made with NEXTJS and contentful, a free open source
                CMS.
              </p>
              <Link href="https://next-contentful-teaching-blog.vercel.app/">
                <a className="btn btn-primary text-white">Live site</a>
              </Link>
              
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-6 col-sm-12">
              <h1 className="display-5 m1 p-7  text-right mb-4">Weather app</h1>
              <Image
                onClick={(event) =>
                  (window.location.href = "https://weather-this.netlify.app/")
                }
                alt="Weather"
                src="/weather.png"
                width="500px"
                height="300px"
              />

              <p className="lead text-right mt-4 mb-4">
                Weather app that utilises an API call.
              </p>
              <Link href="https://weather-this.netlify.app/">
                <a className="btn btn-primary text-white">Live site</a>
              </Link>
              <Link href="https://github.com/shar27/Weather">
                  <a className="btn btn-primary text-white ms-4">Repo</a>
              </Link>
            </div>
          </Fade>

          
          <Fade left>
            <div className="col-lg-6 col-sm-12">
              <h1 className="display-5 m1 p-7 text-right mb-4">Tesla Clone</h1>
              <Image
                onMouseEnter={() => setIsShown(true)}
                onClick={(event) =>
                  (window.location.ref =
                    "https://tesla-shar-clone.netlify.app/")
                }
                alt="Tesla"
                src="/teslaclone.PNG"
                width="500px"
                height="300px"
              />

              <p className="lead text-right mt-4 mb-4">
                A clone Tesla site using React.JS and Redux.
              </p>
                
              <Link href="https://tesla-shar-clone.netlify.app/">
                <a className="btn btn-primary text-white">Live site</a>
              </Link>
              <Link href="https://github.com/shar27/tesla-clone">
                <a className="btn btn-primary text-white ms-4">Repo</a>

                </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Otherwork;
