import Image from 'next/image'
import React from 'react'

function Welcome() {
  return (
    <div className='pl-60'>
    <div className="GeneralAppWidget2 w-80  h-28 relative bg-emerald-800 rounded-2xl shadow">
  <div className="Mask w-80 h-28 left-0 top-0 absolute bg-emerald-800 rounded-2xl" />
  <div className=" left-[24px] top-0 absolute">

    <div className="IconBase w-28 h-28 left-[228px] top-0 absolute opacity-80 flex-col justify-start items-start inline-flex">
      <img className="OverlayColor w-16 h-20" src="/IconBase.svg" />
    </div>
    </div>

</div>
</div>
  )
}

export default Welcome