import React from 'react';
import TMTDemo from "../images/TMT demo pic.png";
import TMTTeam from "../images/TMT team.jpg";
import { Link } from 'react-router-dom';

function TeachMeTalkback() {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center relative w-full bg-custom1 pb-14">
        <div className="mt-8 text-3xl sm:text-5xl lg:text-6xl text-white font-bold mb-8 font-header text-center">Teach Me Talkback
        </div>
        <div className="max-w-[300px] sm:max-w-[500px] lg:max-w-[800px] flex flex-col justify-center items-center">
          <img src={TMTDemo} alt="INTAKE" className="object-center" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center relative w-full pb-10">
        <div className=" px-4 max-w-[1000px] flex flex-col">
          <div className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 font-header text-custom0">The Talkback Accessibility Tool</div>
          <p className="text-justify font-body text-sm sm:text-base">Android TalkBack is an accessibility feature designed to assist users with visual impairments in navigating and interacting with their Android devices. It provides spoken feedback and audible cues, such as describing on-screen elements, reading text aloud, and announcing actions or notifications, enabling users to operate their devices through touch gestures and auditory feedback. TalkBack enhances the usability and accessibility of Android devices, empowering individuals with visual impairments to effectively use smartphones and tablets.</p>
          <div className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 font-header text-custom0">Why TMT?</div>
          <p className="text-justify font-body text-sm sm:text-base">
            While Android does offer its own built-in tutorial for the TalkBack accessibility tool, there have been concerns regarding its learnability. Many users find it challenging to grasp these features quickly. The goal of the Teach Me TalkBack (TMT) app is to address these issues by providing an intuitive, interactive, and engaging learning experience. Its aim is to make learning Android accessibility both easy and enjoyable, ensuring users can quickly familiarize themselves with the TalkBack accessibility tool.</p>
          <div className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 font-header text-custom0">Meet the team</div>
          <div className=" flex flex-col justify-center items-center">
            <img src={TMTTeam} alt="TMT" className="object-center" />
          </div>
          <div className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 font-header text-custom0">Demo</div>
          <iframe class="w-full aspect-video ..." src="https://www.youtube.com/embed/rrcBq8TtFaM"></iframe>
          <p className="text-justify font-body mt-5 text-sm sm:text-base">
            The video demonstrates a small fraction of our app's feature. Please visit our youtube channel (Teach Me Talkback) if you're interested in watching all other lessons and modes.</p>
          <div className='mt-10 flex flex-col items-center'>
            <Link to="/"
              className="sm:w-[300px] md:w-[400px] mx-6 select-none text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm sm:text-lg py-3 px-6 rounded-lg bg-custom0 text-white shadow-md shadow-gray-900/10 hover:bg-custom1 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none font-body font-semibold">
              Finish Reading
            </Link>
          </div>

        </div>


      </div>
    </div>

  )
}

export default TeachMeTalkback;