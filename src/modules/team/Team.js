import { Team_card } from "./Team_card";
import logo from "../../assets/images/logo.png";
import parth from '../../assets/images/paarthbhasinphoto.png';
import gaurav from '../../assets/images/Gaurav.jpeg';
import akriti from '../../assets/images/AkritiSaxena.jpg';
import tarushi from '../../assets/images/Tarushi_Mishra.jpeg';
import artok from '../../assets/images/Dhruv_Kotra.jpeg';
import chirag from '../../assets/images/Chirag_Jagyani.jpeg';
import ayush from '../../assets/images/Ayush_Dixit.jpeg';
import devanshi from '../../assets/images/devanshi.jpeg';
import manish from '../../assets/images/manish.jpeg';
import nehaMaam from '../../assets/images/nehaMaam.jpeg';
import adityaRaghav from '../../assets/images/adityaRaghav.jpeg';
import mayankGoel from '../../assets/images/mayankGoel.jpeg';

export const Team = () => {
  return (
    <>
      <div className="h-fit bg-black text-white" id="team">
        <div className="text-transparent">h</div>
        <div className="text-center mt-2 text-4xl font-bold">Meet Our Team</div>
        <div className="text-center mt-2 text-2xl font-bold">Faculty Mentor</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-4 m-auto w-fit mt-8">
        <div className="w-80 h-80 bg-red-900 rounded-lg m-5 team_card">
          <div className="rounded-full">
            <div className="text-transparent">h</div>
            <img
              src={nehaMaam}
              className="w-40 h-40 mt-2 m-auto"
              alt="cover..."
              style={{objectFit: "cover", borderRadius: "0.5rem"}}
            ></img>
            <div className="flex flex-row justify-around w-full mt-7 text-white">
              <div className="text-xl">
                Ms. Neha Gupta <br /> Faculty Mentor
              </div>
              <div className="flex flex-cols mt-3">
                <div>
                  <a href="https://www.google.com" target="__blank">
                    <i class="fa-brands fa-linkedin fa-xl m-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Lead Core</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          {/* <Team_card
            name="Akriti Saxena"
            designation="Vice Chairperson"
            instagram="https://www.instagram.com/Akritisaxena_08"
            linkedin="https://www.linkedin.com/in/akriti-saxena-083471203"
            photo={akriti}
          /> */}
          <Team_card
            name="Parth Bhasin"
            designation="Chairperson"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={parth}
          />
          <Team_card
            name="Gaurav"
            designation="Vice Chairperson"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={gaurav}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Devanshi Singh"
            designation="General Secretary"
            instagram="https://www.instagram.com/_devaanshii_/"
            linkedin="https://www.linkedin.com/in/devanshi-singh-211427212"
            photo={devanshi}
          />
          <Team_card
            name="Tarushi Mishra"
            designation="Treasurer"
            instagram="https://www.instagram.com/tarushi_mishra "
            linkedin="https://www.linkedin.com/in/tarushi-mishra-640759212/"
            photo={tarushi}
          />
        </div>
        <div className="text-center my-16 text-4xl font-bold">Department Heads</div>
        <div className="text-center mt-2 text-2xl font-bold">Design Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-4 m-auto w-fit mt-8">

          <Team_card
            name="Dhruv Kotra"
            designation="Design Head"
            instagram="https://instagram.com/artok.photography?igshid=YmMyMTA2M2Y="
            linkedin="https://www.linkedin.com/in/dhruv-kotra-2aa057252"
            photo={artok}
          />
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Technical Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">

          <Team_card
            name="Mayank Goel"
            designation="Technical Head"
            instagram="https://www.instagram.com/goel.mayank235/"
            linkedin="https://www.linkedin.com/in/yellowbeard36"
            photo={mayankGoel}
          />
          <Team_card
            name="Manish Sharma"
            designation="Technical Head"
            instagram="https://www.instagram.com/llmanish_17ll/"
            linkedin="https://www.linkedin.com/in/manish-sharma-2a6778212/"
            photo={manish}
          />
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Event Management Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-4 m-auto w-fit mt-8">

          <Team_card
            name="Chirag Jagyani"
            designation="Event Management Head"
            instagram="https://www.instagram.com/chirag_jagyani/"
            linkedin="http://www.linkedin.com/in/chirag-jagyani-3540061b6"
            photo={chirag}
          />
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Operation Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Ayush Dixit"
            designation="Operation Head"
            instagram="https://www.instagram.com/ayush_dixit_15/"
            linkedin="https://www.linkedin.com/in/ayush-dixit-013632203/"
            photo={ayush}
          />
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Social Media Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Aditya Raghav"
            designation="Social Media Head"
            instagram="https://www.instagram.com/i_am_addy_raghav/"
            linkedin="https://www.linkedin.com/in/aditya-56bbb6223/"
            photo={adityaRaghav}
          />
        </div>
        {/* <div className="text-center mt-2 text-2xl font-bold">Publicity Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Aditya Pant"
            designation="Publicity Head"
            instagram="https://www.google.com/"
            linkedin="http://www.linkedin.com/in/chirag-jagyani-3540061b6"
            photo={logo}
          />
        </div> */}
      </div>
    </>
  );
};
