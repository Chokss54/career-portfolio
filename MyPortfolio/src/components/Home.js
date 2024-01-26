import "./Home.css";
import "./Wave.css";
import Profile from "../images/Profile.png";
import ProfilePic from "../images/graduatepic.png";
import Languages from "../images/Programming languages.png";
import React, { useEffect } from 'react';


function Home() {

  return (
    <div className="overflow-y-auto h-screen overscroll-none h-screen">
      <div id="main" className="bg-custom0 w-screen relative">
        <header className="flex flex-row justify-between">
          <button className="text-white font-logo text-3xl m-6 hover:text-custom1 transition ease-in-out delay-100">JODEV</button>
          <div className="flex space-x-6 items-center m-6">
            <button className="text-white font-body text-xl hover:text-custom1 transition ease-in-out delay-100 hidden xl:block">MY RESUME</button>
            <button className="text-white font-body text-xl hover:text-custom1 transition ease-in-out delay-100 hidden xl:block">CONTACT ME</button>
            <div
              className="space-y-2 xl:hidden"
            >
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            </div>
          </div>
        </header>

        <div className="mx-auto w-[500px] flex flex-col items-center justify-center mt-6">
          <div className="text-white text-6xl font-bold mb-4 font-header">JOEL YANG</div>
          <div className="text-white mb-4 font-body text-custom2 text-xl font-semibold">Graduate Software Engineer / Developer</div>
          <p className="text-white text-center mb-8">
            I am a software engineer who has a passion for
            project management, software development
            and data warehousing, currently looking for a
            graduate position to grow
          </p>
          <div className="wrapper mb-12">
            <div className="profile"></div>
          </div>
          <img src={Languages} alt="Programming languages" />

        </div>
      </div>

      <div className="h-[150px] relative bg-custom0">
        <div className="wave" id="wave1 " style={{ '--i': 1 }}></div>
        <div className="wave" id="wave2" style={{ '--i': 2 }}></div>
        <div className="wave" id="wave3" style={{ '--i': 3 }}></div>
        <div className="wave" id="wave4" style={{ '--i': 4 }}></div>
      </div>

      <div id="projects" className=" w-screen bg-custom2 relative items-center flex flex-col items-center pb-20">
        <div className="text-white text-5xl font-bold mb-4 font-header mt-10 text-custom0">Selected Projects</div>

        <div className="flex flex-col lg:flex-row lg:space-x-20">
          <div class="relative flex flex-col mt-20 text-custom0 bg-gray-200 drop-shadow-lg bg-clip-border rounded-xl w-96">
            <div
              class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl">
              <img
                alt="intake" />
            </div>
            <div class="p-6">
              <h5 class="block mb-2 text-xl text-custom0 font-body font-semibold">
                INTAKE
              </h5>
              <p class="block font-body">
                Empowering Mental Health Triage in Medical Fields: Native App Tool for Streamlined Processing
              </p>
              <button
                class="mt-4 select-none text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom0 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none font-body font-semibold"
                type="button">
                Read More
              </button>
            </div>
          </div>

          <div class="relative flex flex-col mt-20 text-custom0 bg-gray-200 drop-shadow-lg bg-clip-border rounded-xl w-96">
            <div
              class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl">
              <img
                alt="TMT" />
            </div>
            <div class="p-6">
              <h5 class="block mb-2 text-xl text-custom0 font-body font-semibold">
                Teach Me Talkback
              </h5>
              <p class="block font-body">
                Unlocking Independence: Android TalkBack Tutorial App for Visually Impaired Users
              </p>
              <button
                class="mt-4 select-none text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom0 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none font-body font-semibold"
                type="button">
                Read More
              </button>
            </div>
          </div>
        </div>

      </div>

      <div id="contactMe" className="h-screen w-screen bg-custom4 relative items-center flex flex-col items-center">
      <div className="text-white text-5xl font-bold mb-4 font-header mt-10 text-custom0">Get In Touch</div>
      </div>

    </div>
  )
}

export default Home;