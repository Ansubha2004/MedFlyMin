import React from 'react'
import Sloganbox from '../../../Components/Sloganbox.jsx';


export default function Solution() {

    const heading=["Hyperlocal Model","Fast Deliveries","No Inventory Needed","Fair Commission Model"];
    const body=["Connecting customers with nearby pharmacies for faster service","Medicines delivered within minutes, not hours", "Pharmacies use existing stock, eliminating extra inventory costs","Lower, transparent fees that benifit both pharmacies and customers"];

  return (
    <>
         <div className="z-[2] w-full h-auto relative flex flex-col justify-center items-center overflow-hidden ">
            <br/>
            <br/>
            <div id="Heading" className="w-full h-auto flex flex-col justify-center items-center">
                    <p className="leading-snug text-[33px] sm:text-[52px] font-[700] sm:mb-[24px] text-center">The Solution -<br/><span className="text-[#F2630A]">MedFlyMin</span></p>
                    <br/>
                    <br/>
                    
            </div>
            <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center items-center  ">
                {
                    [0,1,2,3].map((box,index)=>(
                        <div key={index} className="w-full sm:w-[43%] flex justify-center sm:items-start">
                            <Sloganbox extracss="bg-[#F5F5F5]" heading={heading[index]} body={body[index]} page="solution" index={index}/> 
                        </div>
                    ))
                }
            </div>
            
         </div>
    </>
  )
}
