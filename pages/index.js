import Head from "next/head";
import Image from "next/image";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Otherwork from "../components/Otherwork";
import Nav from "../components/Nav";
import React, { useState } from "react";
import Badges from "../components/Badges";
import CookieConsent from "react-cookie-consent";
import { motion } from "framer-motion";


export default function Home() {
  const theme = {
    spacing: 8,
  };

  const hoveredStyle = {
    cursor: "pointer",
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="backdrop-opacity-95 w-full h-96 md:w-full md:h-96 lg:w-full lg:h-96">
      <Head>
        <title>Home</title>
        <meta name="description" content="I am Shar a FRONTEND Developer" icon="/code3.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
          rel="icon" href="/code3.jpg"
        />
      
      </Head>
      
     
        
         <motion.div ainitial="hidden" animate="visible" variants={variants}>
        <h1 className=" text-black font-serif mt-20 md:mt-10 lg:mt-10 ml-12 md:ml-0 lg:ml-0 text-center md:text-center lg:text-center mb-20 text-6xl md:text-6xl lg:text-9xl">
          Hey,
          <br /> I'm Shar and I'm a Front-end developer.
        </h1>
      </motion.div>
      <Contact/>
        <section className=" text-center md:text-center lg:text-center  container mt-5 md:mt-5 lg:mt-5 mb-30 ml-10 md:ml-0 lg:ml-0">
          <p className="text-black  font-bold mb-20 text-sm  md:text-md lg:text-lg ">
            I am a react developer with a strong interest in Edutech and SEO. I
            particulary enjoy using it's frameworks like Nextjs and Gatsbyjs.
            </p>
            </section>
      
     
     <Otherwork/>
    <Badges/>
    <p className="text-center md:text-center lg:text-center ml-20 md:ml-0 lg:ml-20 text-black font-bold">
        If you would like to see more of my work please visit my Github and my
        Portfolio site(the middle icon).
      </p>
      <div className="flex justify-center bg-white text-black font-bold ml-10 md:ml-5 lg:ml-0 mt-10 md:mt-0 lg-mt-0">
        <GitHubIcon
          onClick={(event) =>
            (window.location.href = "https://github.com/shar27/")
          }
          style={hoveredStyle}
          fontSize="large"
          sx={{
            
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
            
            display: "flex-inline",
          }}
        />
      </div>
          <Contact/>
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
     
          </div>
    
     

     
  );
}
