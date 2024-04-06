import { Button } from "@/components/ui/button"
import theEarth from "./assets/JPG/earthLightFromSpace.jpg"

import "./app.css"

function App() {

  return (
    <div className=" bg-black w-[100%] pt-[4rem] px-[6rem]">
      <MainApp />
    </div>
  )
}







function MainApp() {


  return (
    <div className=" text-white flex flex-col">





      <div className=" w-[100%] flex justify-end">



        {/* THE SIGN IN BUTTON */}
        <div>
          <Button className=" rounded-none font-inter text-xl bg-black w-[8rem] h-[3rem]">Sign In</Button>
        </div>



        {/* THE SIGN UP BUTTON */}
        <div>
          <Button className=" bg-white text-black hover:bg-white hover:text-black text-xl font-inter w-[8rem] h-[3rem] rounded-none">Sign In</Button>
        </div>
      </div>









      {/* THE MAIN HEADING */}
      <div className=" text-white font-inter font-55 w-[100%] flex justify-center mt-[6rem] zIndex-2">

        <h1>Street Light Fault Detector</h1>

      </div>


      {/* THE SUB HEADING */}
      <div className=" text-white font-inter flex justify-center font-21  relative bottom-3 zIndex-2">
        <p>Centralized Monitoring System for Street Light Fault Detection and Location Tracking
        </p>
      </div>


      {/* THE IMAGE */}
      <div className=" relative bottom-[4rem] flex justify-center">
        <img className=" w-[70%]" src={theEarth} alt="An Image of the earth" />
      </div>


    </div>
  );
}

export default App
