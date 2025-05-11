import React from 'react'
import discountbanner1 from '../../../assets/images/discountbanner1.png'
import discountbanner2 from '../../../assets/images/discountbanner2.png'
import discountbanner3 from '../../../assets/images/discountbanner3.png'

export default function scrolloffersection() {
  return (
    <div className="scroll-wrapper no-scrollbar">
    <div className="scroll-content">
      {
        [discountbanner1, discountbanner2, discountbanner3, discountbanner1, discountbanner2, discountbanner3].map((items, index) => (
          <img key={index} src={items} className="w-[500px] object-contain mx-4 active:scale-[0.95] transiton-all duration-200 linear" />
        ))
      }
    </div>
  </div>
  
  )
}

