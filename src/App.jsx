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
import { Link, Terminal } from "lucide-react"



// MI UI ICONS
import EmailIcon from '@mui/icons-material/Email';





// IMAGE IMPORTS
import theEarth from "./assets/JPG/earthLightFromSpace.jpg"

// CSS IMPORTS
import "./app.css"
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  return (
    <div className=" bg-black w-[100%] pt-[4rem] px-[6rem]">
      <MainApp />
    </div>
  )
}
























function MainApp() {

  const arr = [1, 2, 3]




  // const [data, setData] = useState(null);
  const [lampNo, setLampNo] = useState(0);
  const [lampStatus, setlampStatus] = useState(0);

  const lampPostCheckingStuff = (data) => {
    console.log(data);

    setLampNo(data.lampNo)
    const lampNo = data.lampNo;
    setlampStatus(data.value);

    // if (lampNo == 1) {
    // }

  }





  setInterval(() => {
    axios.get('http://192.168.246.122:8080/data')
      .then(response => {

        lampPostCheckingStuff(response.data);
        // console.log(response.data);
        // console.log("This shit is working");
      })
      .catch(error => {
        console.error('Error fetching data:', error);

      });
  }, 10000)




















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
      <div className=" flex flex-col items-center">



        {/* HEADING FOR STATUS OF STREET LIGHT NEAR YOU */}
        <div className=" font-55 mb-12">
          <h1>Status of Street light near you</h1>
        </div>



        {/* CHOOSE YOUR LOCATION */}
        <div className="px-[6rem] flex justify-start w-[100%] mb-20">
          <div className="">

            <h1 className=" font-13 mb-4">Choose your location</h1>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue className=" placeholder:text-slate-400" placeholder=" Select your location " />
              </SelectTrigger>
              <SelectContent className=" font-inter ">
                <SelectItem value="light">Jaipur</SelectItem>
                <SelectItem value="dark">Jodhpur</SelectItem>
                <SelectItem value="system">Chomu</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>






        {/* HEADING FOR FAULTY STREET LIGHT AND WORKING ONES */}

        {/* TABLE FOR WORKING STREET LIGHT AND FAULTY STREET LIGHT */}
        <div className=" flex w-[100%] justify-evenly mb-[8rem]">

          {/* COLUMN FOR WORKING STREET LIGHTS */}
          <div className=" flex flex-col items-center">
            <h1 className=" font-34 mb-10">Working Street Lights</h1>

            {arr.map((value, index) => {


              return (<Alert key={index} className=" font-21 mb-3">

                <AlertTitle>Lamp Post Number : {lampNo}</AlertTitle>
                <AlertDescription>
                  Current Status : {lampStatus}
                </AlertDescription>
              </Alert>);
            })}


          </div>





          {/* COLUMN FOR FAULTY STREET LIGHTS */}
          <div className=" flex flex-col items-center">
            <h1 className=" font-34 mb-10">Faulty Street Lights</h1>


            <Alert className=" font-21">

              <AlertTitle>Lamp Post Number : {lampNo}</AlertTitle>
              <AlertDescription>
                Current Status
              </AlertDescription>
            </Alert>

          </div>
        </div>









        {/* CONTACT  US SECTION */}
        <div className=" w-[100%] font-inter ml-[12rem] mb-[12rem]">
          <h1 className=" font-34 mb-3">Contact Us</h1>

          <div className=" flex">
            <div className=" mr-2">
              <EmailIcon />
            </div>
            <p className=" font-13">tecxaro@gmail.com</p>
          </div>
        </div>







      </div >


    </div>
  );
}

export default App
