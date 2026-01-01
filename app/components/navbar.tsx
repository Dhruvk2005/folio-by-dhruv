'use client'
import React, { useState } from 'react'
import GooeyNav from './gooeyNav';
import { Icon } from '@iconify/react/dist/iconify.js'
import { AuroraText } from './aurora-text';




const Navbar = () => {

  const scrollToSection = (id: any) => {
    const sectionId = document.getElementById(id)
    if (sectionId) {
      sectionId.scrollIntoView({ behavior: "smooth" })
    }
  }


  const items: any = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#aboutme" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#connect" },
  ];

  const [open, setOpen] = useState(false)

  return (

    <div className=' flex select-none justify-center items-center w-[100%] mt-[20px] fixed z-30 top-0 left-0 min-h-[80px]  ' >
      <div className=' flex justify-between items-center w-[100%] mx-[20px]  p-[10px] rounded-[50px] bg-white/10 backdrop-blur-md shadow-lg  md:w-[70%] lg:w-[60%] xl:w-[50%]  ' >
        <div>
          <p className='text-[white] text-[20px] ml-[10px]  font-bold ' >Dhruv</p>

        </div>
        <div className='hidden sm:flex' >
          <GooeyNav
            items={items}


            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={400}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />

        </div>

        <div className='sm:hidden'>
          <div onClick={() => setOpen(true)} className='mr-[10px]' >

            <Icon icon="line-md:close-to-menu-alt-transition" width="24" height="24" style={{ color: '#ffffffff' }} />

          </div>
        </div>
      </div>


      {open && (
        <div className="sm:hidden fixed right-0 top-[90px] z-50 
                  p-[10px] w-[140px] rounded-[10px]
                  bg-[black] text-white font-semibold
                  transition-all">

          <ul className="text-[14px] space-y-3">
            {items.map((item: any) => (
              <li
                key={item.href}
                className="cursor-pointer hover:text-blue-400"
                onClick={() => {
                  scrollToSection(item.href.replace("#", ""));

                  setOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}

            <li
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Icon icon="maki:cross" width="15" height="15" />
            </li>
          </ul>
        </div>
      )}


    </div>
  )
}

export default Navbar