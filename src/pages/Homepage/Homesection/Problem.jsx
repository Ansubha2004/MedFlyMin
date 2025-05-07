import React from 'react'
import Sloganbox from '../../../Components/Sloganbox.jsx';

export default function Problem() {


    const heading=["Delayed delivery times","Out Of Stock","High Commissions","Limited Digital Presence"];
    const body=["Customers often wait days to receive critical medications","Pharmacies struggle to maintain inventory of all medicines", "Existing platforms charge excessive fees from pharmacies","Local pharmacies lack resources for online visibility"];


  return (
    <>
         <div className="bg-[#FFF2E9] w-full h-auto relative flex flex-col justify-center items-center overflow-hidden">
            <br/>
            <br/>
            <div id="Heading" className="w-full h-auto flex flex-col justify-center items-center">
                    <p className="leading-snug text-[52px] font-[700] text-center">We Understand Your<br/><span className="text-[#F2630A]">Problem!</span></p>
                    <br/>
                    <br/>
                    <br/>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center ">
                {
                    [0,1,2,3].map((box,index)=>(
                        <div key={index} className="w-[43%] flex justify-center">
                            <Sloganbox extracss="bg-white" heading={heading[index]} body={body[index]} page="problem" index={index}/> 
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
