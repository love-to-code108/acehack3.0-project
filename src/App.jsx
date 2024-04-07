// CHAD CN UI IMPORTS
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"






// IMAGE IMPORTS
import theEarth from "./assets/JPG/earthLightFromSpace.jpg"

// CSS IMPORTS
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
    <div className=" text-white flex flex-col font-inter">





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









      {/* PART 2 */}
      <div className=" mb-[8rem] zIndex-2 relative bottom-[4rem]">





        {/* THE SECOND HEADING STREET LIGHT FAULT DETECTOR  */}
        <div className=" w-[100%] font-55 font-inter flex justify-center mb-8">
          <h1>Street Light Fault Detector</h1>
        </div>


        {/* THE FIRST PARAGRAPH */}
        <div className=" w-[100%] font-13 font-inter flex justify-center mb-8">
          <p className=" w-[1166px] text-center">Electricity is the critical need for progress of the livelihood.ln many Indian cities, the maintenance of street lights has become a challenging and inefficient process due to the lack of a centralized monitoring system. ldentifying faults, such as non- functioning lights, current leakage and cable breakage, relies on citizen grievances, leading to delays, increased costs, and safety concerns. Linemen spend valuable time manually searching for faults, diagnosing issues, and fixing them, which can take several days to complete. The absence of precise fault location information further complicates the process. To overcome these obstacles, we seek an innovative solution that provides realtime fault detection, accurate identification of fault types, and precise location tracking of faulty street lights. This solution aims to empower linemen with efficient fault management capabilities, reducing their workload and ensuring timely maintenance. Moreover, it should enable the local authorities to proactively address faults, enhance service quality, and optimize street light maintenance processes in their respective cities..The prime aim of this problem statement is to develop a Automated Defect Detection and Prevention Assistance with Effective Governance for Cities in India</p>
        </div>

      </div>







      {/* PART 3 */}
      <div>



        {/* HEADING FOR STATUS OF STREET LIGHT NEAR YOU */}
        <div>
          <h1>Status of Street light near you</h1>
        </div>



        {/* CHOOSE YOUR LOCATION */}
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

        </div>



        {/* HEADING FOR FAULTY STREET LIGHT AND WORKING ONES */}
        <div>
          <h1>Working Street Lights</h1>
          <h1>Faulty Street Lights</h1>

        </div>



        {/* TABLE FOR WORKING STREET LIGHT AND FAULTY STREET LIGHT */}
        <div>

          {/* COLUMN FOR WORKING STREET LIGHTS */}
          <div>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the cli.
              </AlertDescription>
            </Alert>

          </div>

          {/* COLUMN FOR FAULTY STREET LIGHTS */}
          <div>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the cli.
              </AlertDescription>
            </Alert>
          </div>
        </div>









        {/* CONTACT  */}


      </div>


    </div>
  );
}

export default App
