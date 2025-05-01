import React from 'react'
import Sloganbox from '../../../Components/Sloganbox.jsx';


export default function Solution() {

    const heading=["Hyperlocal Model","Fast Deliveries","No Inventory Needed","Fair Commission Model"];
    const body=["Connecting customers with nearby pharmacies for faster service","Medicines delivered within hours, not days", "Pharmacies use existing stock, eliminating extra inventory costs","Lower, transparent fees that benifit both pharmacies and customers"];

  return (
    <>
         <div className="w-full h-auto relative flex flex-col justify-center items-center overflow-hidden">
            <br/>
            <br/>
            <div id="Heading" className="w-full h-auto flex flex-col justify-center items-center">
                    <p className="leading-snug text-[52px] font-[700] text-center">The Solution -<br/><span className="text-[#F2630A]">MedFlyMin</span></p>
                    <br/>
                    <br/>
                    <br/>
            </div>
            <div className="w-[100%] flex flex-wrap justify-center items-center ">
                {
                    [0,1,2,3].map((box,index)=>(
                        <div key={index} className="w-[45%] flex justify-center">
                            <Sloganbox extracss="bg-[#F5F5F5]" heading={heading[index]} body={body[index]} page="solution" index={index}/> 
                        </div>
                    ))
                }
            </div>
            <br/>
            <br/>
         </div>
    </>
  )
}
