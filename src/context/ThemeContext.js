import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();



const ThemeContextProvider = (props) => {
   const body = document.querySelector("body");
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    const [svgMapStyle, setSvgMapStyle] = useState("lg");
    const reponsive =()=>{
      let width = window.innerWidth ;     
      if(width > 991){
        setSvgMapStyle("lg")
      }else if(width > 591){
        setSvgMapStyle("md")
      }else if(width > 200){
        setSvgMapStyle("sm")
      }
    }
    useEffect(() => {
      window.addEventListener('resize', reponsive)    
      return () => {
        window.removeEventListener('resize', reponsive)    
      }
    }, [])
	
    useEffect(() => {
      const body = document.querySelector("body");
        let resizeWindow = () => {
          setWindowWidth(window.innerWidth);
          setWindowHeight(window.innerHeight);
          window.innerWidth >= 768 && window.innerWidth < 1300
          ? body.setAttribute("data-sidebar-style", "mini")
          : window.innerWidth <= 768
          ? body.setAttribute("data-sidebar-style", "overlay")
          : body.setAttribute("data-sidebar-style", "compact");
        };
        body.setAttribute("data-typography", "poppins");
        body.setAttribute("data-theme-version", "light");
        body.setAttribute("data-layout", "vertical");
        body.setAttribute("data-nav-headerbg", "color_1");
        body.setAttribute("data-headerbg", "color_1");
        body.setAttribute("data-sidebar-style", "compact");
        body.setAttribute("data-sibebarbg", "color_1");
        body.setAttribute("data-primary", "color_1");
        body.setAttribute("data-sidebar-position", "fixed");
        body.setAttribute("data-header-position", "fixed");
        body.setAttribute("data-container", "wide");
        body.setAttribute("direction", "ltr");
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);
    return (
    <ThemeContext.Provider
      value={{
        body,
		    windowWidth,
		    windowHeight,
        svgMapStyle
	    }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
