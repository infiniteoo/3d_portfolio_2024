import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow img" className="w-4 h-4 object-contain " />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Troy</span>👋
      <br />
      Adrift in the universe, I am in search of a new home.
    </h1>
  ),
  2: (
    <InfoBox
      text="I've been to many galaxies and have picked up valuable skills along the way."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Broken hearts, triumphant victories and everything in between.  See the results."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="I'm ready to make an impact when I join your team. I'm just a few light-years away."
      link="/contact"
      btnText="Make First Contact"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
