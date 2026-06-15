import React from 'react'
import { featureSectionData } from '../lib/placeholder-data'
import { Coffee, Croissant, Wifi, Computer } from 'lucide-react'
import * as motion from "motion/react-client"


const Features = () => {
  const iconList = [Coffee, Croissant, Wifi, Computer];
  return (
    <div className='w-full h-full grid grid-cols-1 grid-rows-4  md:grid-cols-4 md:grid-rows-1 gap-8 my-10' id='features'>
      {
        featureSectionData.featureList.map((e, idx) => {
          const Icon = iconList[idx];
          return(
          <motion.div
          initial={{y: 100}}
          animate={{y: 1 }}
          transition={{
            duration: idx * 0.2
          }}
          key={idx} className='flex flex-col items-center justify-center'>
            {Icon && <Icon size={32} className='text-primary size-20'/>}
            <h3 className='text-secondary font-bold capitalize text-xl  '>{e}</h3>
          </motion.div>)
})
      }
    </div>
  )
}

export default Features