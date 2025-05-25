import React from 'react'
import Sloganbox from '../../../Components/Sloganbox.jsx';
import problemmobilebg from '../../../assets/images/problemmobilebg.png'
import blurshade5 from '../../../assets/designcomponents/blurshade5.png'

export default function Problem() {


    const heading=["Delayed delivery times","Out Of Stock","High Commissions","Limited Digital Presence"];
    const body=["Customers often wait days to receive critical medications","Pharmacies struggle to maintain inventory of all medicines", "Existing platforms charge excessive fees from pharmacies","Local pharmacies lack resources for online visibility"];


  return (
    <>
         <div className="bg-[#FFF2E9] w-full h-auto relative flex flex-col justify-center items-center overflow-hidden ">
            <br/>
            <br/>
            <div id="Heading" className="z-[3] w-full h-auto flex flex-col justify-center items-center">
                    <p className="leading-tight sm:leading-snug text-[33px] sm:text-[52px] font-[700] text-center">We Understand Your<br/><span className="text-[#F2630A]">Problem!</span></p>
                    <br/>
                    <p className="sm:hidden text-center  text-[18px]] leading-[25px]  text-[#4D4D4D] border-box px-5">Challenges faced by customers and pharmacies in the current medicine delivery ecosystem</p>
                    <br/>
                    <br/>
            </div>
            <div className=" z-[3] w-full flex flex-col sm:flex-row sm:flex-wrap justify-center items-center ">
                {
                    [0,1,2,3].map((box,index)=>(
                        <div key={index} className="w-full sm:w-[43%] flex justify-center sm:items-start">
                            <Sloganbox extracss="bg-white" heading={heading[index]} body={body[index]} page="problem" index={index}/> 
                        </div>
                    ))
                }
            </div>
            <br/>
            <br/>
            <img src={problemmobilebg} className="w-full object-contain sm:hidden absolute top-[-55px] z-[2]" />
         </div>
         <img src={blurshade5} className="w-full object-contain sm:hidden absolute bottom-[600px] z-[2]" />

    </>
  )
}
