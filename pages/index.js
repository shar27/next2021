import Head from "next/head";
import Image from "next/image";
import WebIcon from "@mui/icons-material/Web";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import styles from "../styles/Home.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Otherwork from "../components/Otherwork";
import Nav from "../components/Nav";

import React, { useState } from "react";

import Badges from "../components/Badges";
import FadeIn from "react-fade-in";
import CookieConsent from "react-cookie-consent";
import Link from 'next/link'
import Fade from "react-reveal/Fade";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);

  const theme = {
    spacing: 8,
  };

  const hoveredStyle = {
    cursor: "pointer",
  };

  return (
    <div className={styles.backgrounddiv}>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="I am Shar a FRONTEND Developer"
        />
      </Head>
      <div className={styles.nav}>
        <Nav />
      </div>

      <div className="position-relative">
        <div className="container"></div>

        <div>
          <ReactPlayer
            priority
            autoPlay
            loop
            muted
            className="react-player"
            url="https://player.vimeo.com/external/241674181.hd.mp4?s=2c996895e8d51489ca31eba756f0c8fdca6017fb&profile_id=174"
            playing={isPlaying}
            height="100%"
            width="100%"
          />
        </div>
        
      </div>

      <Fade top>
        <h1 className="display-4 text-center col-sm-12 mt-3 pt-4 mb-0 pb-0 text-white">
          Hey I am Shar and I am a Front-end developer.
        </h1>
        <Fade right>
        <section>
          <figure className="text-center col-sm-12 mb-4 m-5 mt-0 p-5 text-white">
            <blockquote className="blockquote text-white">
              <p className={styles.pquote}>
                <em>
                  I am a react developer with a strong interest in Edutech and SEO. I particulary enjoy using it's
                  frameworks like Nextjs and Gatsbyjs.<br/> <br/> For more information about myself you can visit my 
                  about me page by clicking About.<br/> For tech - Scroll down. <br/> For projects
                  click projects <br/> 
                  <Link href="/About"><a className="border btn btn-outline-dark ms-4 fw-bold text-light mt-4">About</a></Link>
                  
                </em>
              </p>
              
            </blockquote>
            <Link href="#projects"><a className="border btn btn-outline-dark fw-bold ms-4 text-light">Projects</a></Link> 
                      
          
           
            
            <Fade right>
        <Image
          src="/idea.png"
          width="500"
          height="400"
          alt="me"
        />
        </Fade>
          </figure>
        </section>
        </Fade>
      </Fade>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L1440,256L1440,320L0,320Z"
        ></path>
      </svg>

      <FadeIn>
      
        <Badges />
      </FadeIn>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,192L1440,32L1440,0L0,0Z"
        ></path>
      </svg>
      <FadeIn delay={100}>
        <Services />
      </FadeIn>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
<div id="projects"></div>
      <FadeIn delay={100}>
        <Testimonials />
      </FadeIn>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,192L1440,32L1440,0L0,0Z"
        ></path>
      </svg>
      <Otherwork />
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      <Contact />
      <p className="lead text-center text-white fw-bold">
        If you would like to see more of my work please visit my Github and my
        Portfolio site(the middle icon).
      </p>

      <div className="d-flex justify-content-center text-white fw-bold">
        <GitHubIcon
          onClick={(event) =>
            (window.location.href = "https://github.com/shar27/")
          }
          style={hoveredStyle}
          fontSize="large"
          sx={{
            mb: 2,
            display: "flex-inline",
          }}
        />
        <WebIcon
          onClick={(event) =>
            (window.location.href =
              "https://app.netlify.com/teams/shar27/sites")
          }
          style={hoveredStyle}
          fontSize="large"
          sx={{
            display: "inline-flex",
            justifyContent: "center",
          }}
        />
        <LinkedInIcon
          onClick={(event) =>
            (window.location.href = "https://www.linkedin.com/in/shar-ahmed")
          }
          style={hoveredStyle}
          fontSize="large"
          sx={{
            mb: 2,
            display: "flex-inline",
          }}
        />
      </div>
    </div>
  );
}
