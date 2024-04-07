import "../app.css"
import earthImg from "../assets/JPG/earthLightFromSpace.jpg"

// CHADCN UI INPUTS
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"




export const UserSignUp = () => {
    return (
        <div className=" w-[100%] h-[100vh] bg-black flex justify-evenly items-center">




            <div className=" font-inter flex flex-col items-start">
                {/* THE SIGN IN HEADING */}
                <div className=" mb-4">
                    <h1 className=" text-white font-34">Sign Up</h1>
                </div>






                <div>
                    {/* THE USERNAME INPUT SECTION */}
                    <div className=" mb-6">
                        <Input className=" rounded-none font-inter w-[21rem]"
                            placeholder="Username" />
                    </div>




                    {/* THE PASSWORD INPUT SECTION */}
                    <div className=" mb-6">
                        <Input className=" rounded-none font-inter w-[21rem] "
                            type="password"
                            placeholder="Password" />
                    </div>





                    {/* THE CONFIRM PASSWORD SECTION */}
                    <div className=" mb-6">
                        <Input className=" rounded-none font-inter w-[21rem] "
                            type="password"
                            placeholder="Confirm Password" />
                    </div>





                    {/* THE NAME SECTION */}
                    <div className=" mb-6">
                        <Input className=" rounded-none font-inter w-[21rem] "
                            type="text"
                            placeholder="Name" />
                    </div>




                    {/* THE EMAIL SECTION */}
                    <div className=" mb-6">
                        <Input className=" rounded-none font-inter w-[21rem] "
                            type="email"
                            placeholder="Email" />
                    </div>




                    {/* THE PHONE NUMBER SECTION */}
                    <div className=" mb-6">
                        <Input className=" rounded-none font-inter w-[21rem] "
                            type="number"
                            placeholder="phone number" />
                    </div>


                    
                    

                </div>










                <div className=" flex w-[100%] justify-between">

                    {/* ALREADY HAVE AN ACCOUNT SIGN IN  */}
                    <div className=" text-white font-13 ">
                        <p>Already have an account ?</p>
                            <p className=" text-red-500  relative bottom-1 hover:cursor-pointer">Sign In</p>
                    </div>


                    {/* THE SIGN UP BUTTON */}
                    <div>
                        <Button className=" bg-white text-black rounded-none font-inter
                        h-[2rem] w-[6rem] hover:text-white hover:bg-black hover:border-2 hover:border-white ">Sign Up</Button>
                    </div>

                </div>
            </div>




            {/* EARTH IMAGE */}
            <div>
                <img className=" w-[40rem]" src={earthImg} alt="" />
            </div>
        </div>
    )
}
