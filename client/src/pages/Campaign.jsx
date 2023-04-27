import { drug1 } from "../assets";
import { useState,useEffect } from "react";
import { img3 } from "../assets";
import { drg } from "../assets";
import { drg3 } from "../assets";
import { drg4 } from "../assets";
import CardCampaign from "../components/CardCampain";


function Campaign() {
    const [isHovering, setIsHovering] = useState(false);
    const [buttonStyle, setButtonStyle] = useState({
      zIndex: 1, // set the initial z-index value of the button
    });
    const [Opacity, setOpacity] = useState({
        opacity:100
    })
  
    const handleMouseEnter = () => {
      setIsHovering(true);
      setButtonStyle({
        ...buttonStyle,
        zIndex: 2, // set the z-index to a higher value on hover
      });
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
      setButtonStyle({
        ...buttonStyle,
        zIndex: 1, // reset the z-index back to its initial value when the mouse leaves
      });
    };
  
    return (
        <>
      <div className="relative">
        <img
          src={drug1}
          alt="Example image"
          className="w-full opacity-100 hover:opacity-75 transition-opacity duration-300"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
        {isHovering && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500  py-2 px-4 shadow-lg opacity-100 transition-opacity duration-300 z-2 w-1/2 text-white font-semibold rounded-[20px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={buttonStyle} // set the style of the button using state
          >
            FOLLOW NOW!
          </button>
        )}
        </div>
        
        <div className = "flex flex-wrap align-center items-center mt-4 justify-center">
            <CardCampaign title={"drugs are not good"} hash1 = {"drug"} hash2= {"addict"} src = { img3 } info = {'Addiction is a disease that affects your brain and behavior. When you’re addicted to drugs, you can’t resist the urge to use them,...'}/>
            <CardCampaign title={" never do drugs"} hash1 = {"addiction"} hash2= {"notodrugs"} src = { drg } info={'Drug addiction isn’t about just heroin, cocaine, or other illegal drugs. You can get addicted to alcohol, nicotine, sleep...'}/>
            <CardCampaign title={"why you should not do drugs"} hash1 = {"health"} hash2 = {"body"} src = { drg3 } info= { ' You can also get addicted to prescription or illegally obtained narcotic pain medications, or opioids...'}/>
            <CardCampaign title={"why drugs do to your body"} hash1 = {"harmful"} hash2 = {"India"} src = {drg4} info={'Different types of drugs can affect your body in different ways, and the effects associated with drugs can vary from person to person...'}/>
        </div>
      
      </>
    );
  }

export default Campaign;