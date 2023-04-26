import { drug1 } from "../assets";
import { useState,useEffect } from "react";
import Card from "../components/Card";


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
        <div className = "flex flex-wrap">
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    );
  }

export default Campaign;