import React from 'react'
import Beams from '../components/beamsbg'
import Navbar from '../components/navbar'
import ProfileCard from '../components/profilecard'
import { EncryptedText } from '../components/ui/encrypted-text'
import { HeroParallaxDemo } from '../components/parallax'
import { LayoutTextFlipDemo } from '../components/herotext'
import { PixelatedCanvasDemo } from '../components/pixelimage'

import SkillJourneyMap from '../components/SkillJourneyMap'
const Mainscreen = () => {
  return (
    <div>
      <div style={{ width: '100%', height: '700px', position: 'relative' }}>
        <Navbar />
        {/* <ProfileCard/> */}
        <div className='flex w-[100%] bg-[red] absolute z-10   ' >


          <div className='absolute z-10 mt-[200px] ml-[20px] ' >
            <h1 className=' text-[60px] text-[white] font-bold  ' >Hello</h1>
            <h1 className=' text-[60px] text-[white] font-bold  ' >I'm Dhruv Khade</h1>
           
            <LayoutTextFlipDemo />
             <button className='p-[15px] bg-[white] ml-[4px] rounded-[10px] font-semibold mt-[10px] hover:scale-110 transition-all cursor-pointer ease-in-out duration-200 ' >Download Resume</button>

          </div>
          <div className='' >
            <PixelatedCanvasDemo />

          </div>

        </div>

        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />

        <div className='  '  >
          <HeroParallaxDemo />
        </div>

        <div>
          <SkillJourneyMap/>
        </div>


      </div>
    </div>
  )
}

export default Mainscreen
