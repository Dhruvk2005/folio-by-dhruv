import React from 'react'
import Beams from '../components/beamsbg'
import Navbar from '../components/navbar'
import ProfileCard from '../components/profilecard'
import { EncryptedText } from '../components/ui/encrypted-text'
import { HeroParallaxDemo } from '../components/parallax'
import { LayoutTextFlipDemo } from '../components/herotext'
import { PixelatedCanvasDemo } from '../components/pixelimage'
import { motion } from 'framer-motion'
import SkillJourneyMap from '../components/SkillJourneyMap'
import { Resumebutton } from '../components/resumebutton'
import { TimelineDemo } from '../components/aboutusscroll'
import Appreciationpage from '../components/appreciation'
import { CarouselContext } from '../components/apple-cards-carousel'
import { AppleCardsCarouselDemo } from '../components/realproject'
import { ConnectFooter } from '../components/connect'
import PerspectiveScrollText from '../components/PerspectiveScrollText'
import LightSwitchCard from '../components/LightSwitchCard'
// import { LaserFlowBoxExample } from '../components/uselaser'

const Mainscreen = () => {
  const myProjects = [
  {
    title: "Your Project Name",
    link: "https://your-project.com",
    thumbnail: "https://your-image.jpg",
  },
  // Add 15 projects for best effect
];
  return (
    <div className='' >
      <div style={{ width: '100%', height: '700px', position: 'relative' }}>
        <Navbar />
        {/* <ProfileCard/> */}
        <div className='flex w-[100%] bg-[red] absolute z-10   ' >


          <div className='absolute z-10 mt-[200px] ml-[20px]  ' >
            <h1 className='text-[60px]  bg-clip-text text-[white] font-extrabold  ' >Hello</h1>
            <h1 className='text-[60px]  bg-clip-text text-[white] font-extrabold  ' >I'm Dhruv Khade</h1>
           
            <LayoutTextFlipDemo />
             {/* <button className='p-[15px] bg-[white] ml-[4px] rounded-[10px] font-semibold mt-[10px] hover:scale-110 transition-all cursor-pointer ease-in-out duration-200 ' >Download Resume</button> */}
             <button className='mt-[20px] ml-[4px] ' ><Resumebutton/></button>
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
          {/* <HeroParallaxDemo /> */}
          {/* <PerspectiveScrollText/> */}
          <LightSwitchCard/>
         <AppleCardsCarouselDemo/>

        </div>

        <div className='' >
           
          <TimelineDemo/>
        
        </div>

        <div className='' >
          <SkillJourneyMap/>
        </div>

        <div>
          <Appreciationpage/>
        </div>
        <div>
          <ConnectFooter/>

        </div>


      </div>
    </div>
  )
}

export default Mainscreen
