import { useState } from "react";
import calender from "../images/calendar.png";
import contact from "../images/contact.webp";
import keep from "../images/keep.png";
import map from "../images/map.webp";
import task from "../images/task.webp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && (
        <div className={`right-sidebar ${isOpen ? "open" : "closed"}`}>
          <div className="flex z-70 float-right">
            <div className="flex-col h- p-3 bg-white w-17">
              <a href="https://calendar.google.com/calendar/u/0/r" className="flex justify-center pb-6" >
                <img className="option h-7 w-7 calendar" src={calender} alt="calendar" /> <Tooltip className="toolTip" anchorSelect=".calendar" place="bottom">Calendar</Tooltip>
              </a>
              <a href="https://keep.google.com/u/0/" className="flex justify-center pb-6" >
                <img className="option h-7 w-7 keep" src={keep} alt="keep" /><Tooltip className="toolTip" anchorSelect=".keep" place="bottom">Keep</Tooltip>
              </a>
              <a href="https://developers.google.com/tasks" className="flex justify-center pb-6" >
                <img className="option h-7 w-7 task" src={task} alt="task" /><Tooltip className="toolTip" anchorSelect=".task" place="bottom">Task</Tooltip>
              </a>
              <a href="https://accounts.google.com/InteractiveLogin/signinchooser?service=contacts&ifkv=Af_xneHG-_rR7xLvDwyrLkvY8hUXGtyrr5Vq6IStjQRenZKLbWbihZXToDxiGkDHGPocsnjGbctQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="flex justify-center pb-6 " >
                <img className="option h-7 w-7 contact" src={contact} alt="contact" /><Tooltip className="toolTip" anchorSelect=".contact" place="bottom">Contact</Tooltip>
              </a>
              <a href="https://www.google.com/maps/" className="flex justify-center pb-6" >
                <img className="option h-7 w-7 map" src={map} alt="map" /><Tooltip className="toolTip" anchorSelect=".map" place="bottom">Map</Tooltip>
              </a>
              <a className="flex justify-center pb-6">
                <hr className="w-6"></hr>
              </a>
              <a href="https://support.google.com/docs/answer/2942256?hl=en&co=GENIE.Platform%3DDesktop" className="flex justify-center option rounded-full text-3xl add" >
                + <Tooltip className="toolTip" anchorSelect=".add" place="bottom">Get Add-Ons</Tooltip>
              </a>
            </div>
          </div>
        </div>
      )}
      
      <div className={`${isOpen?'toggle-icon-open':'toggle-icon-close'}`} onClick={toggleSidebar}>
        {isOpen ?<FaAngleRight /> :<FaAngleLeft />  } 
      </div>
    </>
  );
}

export default SideBar;
