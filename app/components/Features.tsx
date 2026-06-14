import React from 'react'
import { featureSectionData } from '../lib/placeholder-data'
import { Coffee, Croissant, Wifi, Computer } from 'lucide-react'



const Features = () => {
  const iconList = [Coffee, Croissant, Wifi, Computer];
  return (
    <div className='w-full h-full grid grid-cols-1 grid-rows-4  md:grid-cols-4 md:grid-rows-1 gap-8 my-10' id='features'>
      {
        featureSectionData.featureList.map((e, idx) => {
          const Icon = iconList[idx];
          return(
          <div key={idx} className='flex flex-col items-center justify-center'>
            {Icon && <Icon size={32} className='text-primary size-20'/>}
            <h3 className='text-secondary font-bold capitalize text-xl  '>{e}</h3>
          </div>)
})
      }
    </div>
  )
}

export default Features