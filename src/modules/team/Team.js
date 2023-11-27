import { Team_card } from "./Team_card";
import logo from "../../assets/images/logo.png";
import nehaMaam from '../../assets/images/nehaMaam.jpeg';
import gaurav from '../../assets/images/Gaurav.jpeg';
import muskanNisar from '../../assets/images/MuskanNisar.jpg';
import Danish from '../../assets/images/Danish.jpg';
import soniya from '../../assets/images/Soniya.jpg';
import simriti from '../../assets/images/Simriti.jpg';
import snehaVerma from '../../assets/images/SnehaVerma.jpg';
import shreyaGirotra from '../../assets/images/ShreyaGirotra.jpg';
import prachiBisht from '../../assets/images/PrachiBisht.jpg';
import smritiSingh from '../../assets/images/SmritiSingh.jpg';
import rudrakantTiwari from '../../assets/images/RudrakantTiwari.JPEG';
import IshaMehra from '../../assets/images/IshaMehra.jpg';
import AbhishekKumar from '../../assets/images/AbhishekKumar.jpg';
import ishitaThakur from '../../assets/images/Ishita_thakur.jpg';
import manish from '../../assets/images/manish.jpeg';
import uday from '../../assets/images/Uday.jpg';
import trijalSingh from '../../assets/images/trijal_singh.jpg';
import aditiEM from '../../assets/images/Aditi_EMhead.jpeg';
import hiteshEM from '../../assets/images/Hitesh_EMHead.jpg';
import harshKumar from '../../assets/images/HARSHKUMAR.jpg';
import aryanNarula from '../../assets/images/AryanNarula.jpg';
import aryanZutshi from '../../assets/images/AryanZutshi_Outreach.jpg';
import himanshiChauhan from '../../assets/images/HimanshiChauhan.jpg';
import monuKumar from '../../assets/images/Monukumar.jpg';
import namanGupta from '../../assets/images/NamanGupta.jpg';
import musharrafHayat from '../../assets/images/Musharrafhayat.jpg';
import surbhiSingh from '../../assets/images/Surbhisinghhead.jpg';
import gungun from '../../assets/images/Gungun.jpg';
import faisalAyub from '../../assets/images/FaisalAyub.jpg';
import bhavyaKumar from '../../assets/images/BhavyaKumar.jpg';
import ayesha from '../../assets/images/Ayesha_CnDHead.jpg';
import vrinda from '../../assets/images/vrinda_cndViceHead.jpeg';
import harshSharma from '../../assets/images/HarshSharma.png';
import vishesh from '../../assets/images/Vishesh.jpg';

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
        <div className="text-center my-16 text-4xl font-bold">Core Team</div>
        <div className="text-center mt-2 text-2xl font-bold">Lead Core Team</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Muskan Nisar"
            designation="Vice Chairperson"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={Danish}
          />
          <Team_card
            name="Gaurav"
            designation="Chairperson"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={gaurav}
          />
          <Team_card
            name="Md Danish"
            designation="Vice Chairperson"
            instagram="https://www.instagram.com/_devaanshii_/"
            linkedin="https://www.linkedin.com/in/devanshi-singh-211427212"
            photo={muskanNisar}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Soniya"
            designation="Joint Secretary"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={soniya}
          />
          <Team_card
            name="Smriti Chaudhary"
            designation="Treasurer"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={simriti}
          />
          <Team_card
            name="Sneha Verma"
            designation="Co Joint Secretary"
            instagram="https://www.instagram.com/_devaanshii_/"
            linkedin="https://www.linkedin.com/in/devanshi-singh-211427212"
            photo={snehaVerma}
          />
        </div>
        <div className="text-center my-16 text-4xl font-bold">Department Heads</div>
        <div className="text-center mt-2 text-2xl font-bold">Design Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Prachi bisht"
            designation="Design Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={prachiBisht}
          />
          <Team_card
            name="Shreya Girotra"
            designation="Creativity Lead"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={shreyaGirotra}
          />
          <Team_card
            name="Smriti"
            designation="Design Head"
            instagram="https://www.instagram.com/_devaanshii_/"
            linkedin="https://www.linkedin.com/in/devanshi-singh-211427212"
            photo={smritiSingh}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Rudrakant Tiwari"
            designation="Design Vice Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={rudrakantTiwari}
          />
          <Team_card
            name="Isha mehra"
            designation="Design Vice Head"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={IshaMehra}
          />
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Technical Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Abhishek Kumar"
            designation="Technical Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={AbhishekKumar}
          />
          <Team_card
            name="Manish Sharma"
            designation="Technical Lead"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={manish}
          />
          <Team_card
            name="Ishita Thakur"
            designation="Technical Head"
            instagram="https://www.instagram.com/_devaanshii_/"
            linkedin="https://www.linkedin.com/in/devanshi-singh-211427212"
            photo={ishitaThakur}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Trijal Singh"
            designation="Technical Vice Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={trijalSingh}
          />
          <Team_card
            name="Uday Garg"
            designation="Technical Vice Head"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={uday}
          />
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Event Management Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Aditi"
            designation="EM Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={aditiEM}
          />
          <Team_card
            name="Hitesh"
            designation="EM Head"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={hiteshEM}
          />
        </div><div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Aryan Narula"
            designation="EM Vice Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={aryanNarula}
          />
          <Team_card
            name="Harsh Kumar"
            designation="EM Vice Head"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={harshKumar}
          />
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Outreach Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Monu Kumar"
            designation="Outreach Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={monuKumar}
          />
          <Team_card
            name="Aryan zutshi"
            designation="Outreach Lead"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={aryanZutshi}
          />
          <Team_card
            name="Himanshi chauhan"
            designation="Outreach Head"
            instagram="https://www.instagram.com/_devaanshii_/"
            linkedin="https://www.linkedin.com/in/devanshi-singh-211427212"
            photo={himanshiChauhan}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Musarraf Hayat"
            designation="Outreach Vice Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={musharrafHayat}
          />
          <Team_card
            name="Naman Gupta"
            designation="Outreach Vice Head"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={namanGupta}
          />
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Social Media &amp; Publicity Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Surbhi Singh"
            designation="SM Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={surbhiSingh}
          />
          <Team_card
            name="Anju"
            designation="SM Head"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={logo}
          />
        </div><div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Gungun"
            designation="SM Vice Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={gungun}
          />
          <Team_card
            name="Faisal Ayub"
            designation="SM Vice Head"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={faisalAyub}
          />
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Content &amp; Documentation Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Bhavya"
            designation="C&amp;D Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={bhavyaKumar}
          />
          <Team_card
            name="Ayesha"
            designation="C&amp;D Head"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={ayesha}
          />
        </div><div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Subhangi"
            designation="C&amp;D Vice Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={logo}
          />
          <Team_card
            name="Vrinda"
            designation="C&amp;D Vice Head"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={vrinda}
          />
        </div>
        <div className="text-center mt-2 text-2xl font-bold">Video Editing Heads</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Harsh Sharma"
            designation="Video Editing Head"
            instagram="https://www.instagram.com/paarth1674/"
            linkedin="www.linkedin.com/in/paarth-bhasin"
            photo={harshSharma}
          />
          <Team_card
            name="Vishesh"
            designation="Video Editing Head"
            instagram="https://www.instagram.com/gauravvv_1"
            linkedin="https://www.linkedin.com/in/notgaurav/"
            photo={vishesh}
          />
        </div>
      </div>
      
    </>
  );
};
