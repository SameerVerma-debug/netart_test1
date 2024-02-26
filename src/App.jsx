import "./App.css";
import { FaPhone } from "react-icons/fa6";
import { ImSphere } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";

function App() {
  return (
    <div className="home">
      <div className="header">
        <img className="logo" src="logo.png" alt="logo" />
      </div>
      <div className="main">
        <img className="trophy" src="1.png" alt="award" />
        <div className="main-description">
        <p className="heading trophy-text" style={{marginBottom:"1rem"}}>
            C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
            4th time
          </p>
          <div className="list-img">
          <ul>
          
            <li className="text">
              C.R.I's energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy
            </li>
            <li className="text">
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img className="main-img" src="2.png" alt="main-img"></img>
          </div>
          <p className="text award-text">
            Government of India has awarded the{" "}
            <span style={{ fontWeight: "bold" }}>
              "National Energy Conservation Award 2018".
            </span>{" "}
            Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>

      <div className="pumpsets">
        <p className="text">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img className="pumps" src="3.png" alt="pumps" />
        <p className="caption">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
      </div>

      <div className="segments-container">
        <p className="heading">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <div className="segments">
          <p className="segement">CHEMICALS & PROCESS</p>
          <p className="segement">POWER</p>
          <p className="segement">WATER & WASTE WATER</p>
          <p className="segement">OIL & GAS</p>
          <p className="segement">PHARMA</p>
          <p className="segement">SUGARS & DISTILLERIES</p>
          <p className="segement">PAPER & PULP</p>
          <p className="segement">MARINE & DEFENCE</p>
          <p className="segement">METAL & MINING</p>
          <p className="segement">FOOD & BEVERAGE</p>
          <p className="segement">PETROCHEMICAL & REFINERIES</p>
          <p className="segement">SOLAR</p>
          <p className="segement">BUILDING</p>
          <p className="segement">HVAC</p>
          <p className="segement">FIREFIGHTING</p>
          <p className="segement last">AGRICULTURE & RESIDENTIAL</p>
        </div>
      </div>
      <div className="footer">
        <div className="phone">
          <FaPhone />
          <p>
            Toll free <span style={{ fontWeight: "bold" }}>1800 200 1234</span>
          </p>
        </div>
        <div className="facebook">
          <FaFacebook />
          <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
        </div>
        <div className="site">
          <ImSphere />
          <a href="www.crigroups.com">www.crigroups.com</a>
        </div>
      </div>
    </div>
  );
}

export default App;
