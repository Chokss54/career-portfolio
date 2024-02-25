import React from 'react';
import IntakeDemo from "../images/Intake demo pic.png";
import IntakeFunctionality from "../images/Intake Functionality.png";
import { Link } from 'react-router-dom';

function Intake() {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center relative w-full bg-custom1 relative pb-14">
        <div className="mt-8 text-3xl sm:text-5xl lg:text-6xl text-white font-bold mb-8 font-header text-center">INTAKE
        </div>
        <div className="max-w-[300px] sm:max-w-[500px] lg:max-w-[800px] flex flex-col justify-center items-center">
          <img src={IntakeDemo} alt="INTAKE" className="object-center" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center relative w-full pb-10">
        <div className=" px-4 max-w-[1000px] flex flex-col">
          <div className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 font-header text-custom0">What is Intake?</div>
          <p className="mx-auto text-justify font-body text-sm sm:text-base">Intake is a mobile app tool that aids healthcare professionals, particularly nurses, in performing triage for mental health patients admitted to the emergency department. The app aims to streamline the triage documentation process, which is currently done using pen and paper, by allowing nurses to input information digitally. By doing so, the app helps reduce the likelihood of inaccurate patient triage and minimizes the risk of important details being lost during shift turnover. Additionally, the app ensures that all recorded information can be easily handed over to the next shift, improving continuity of care for patients. This project is developed by a team of 6 individuals collaborating to address the challenges faced in the triage process.</p>
          <div className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 font-header text-custom0">Functionality</div>
          <div className=" flex flex-col justify-center items-center">
            <img src={IntakeFunctionality} alt="INTAKE" className="object-center" />
          </div>
          <div className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 font-header text-custom0">Demo</div>
          <iframe class="w-full aspect-video ..." src="https://www.youtube.com/embed/rj6vawIVE68"></iframe>
          <div className='mt-10 flex flex-col items-center'>
            <Link to="/career-portfolio"
              className="sm:w-[300px] md:w-[400px] mx-6 select-none text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm sm:text-lg py-3 px-6 rounded-lg bg-custom0 text-white shadow-md shadow-gray-900/10 hover:bg-custom1 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none font-body font-semibold">
              Finish Reading
            </Link>
          </div>

        </div>


      </div>
    </div>

  )
}

export default Intake;