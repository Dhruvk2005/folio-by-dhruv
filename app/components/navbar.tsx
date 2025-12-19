'use client'
import React, { useState } from 'react'
import GooeyNav from './gooeyNav';
import { Icon } from '@iconify/react/dist/iconify.js'
import { AuroraText } from './aurora-text';




const Navbar = () => {
    const items: any = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Projects", href: "#" },
        { label: "Contact", href: "#" },
    ];

    const [open, setOpen] = useState(false)

    return (

        <div className=' flex  justify-center items-center w-[100%] mt-[20px] fixed z-10 top-0 left-0 min-h-[80px]  ' >
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
                <div className=' sm:hidden text-[white] font-semibold fixed right-0 transition-all top-[90] p-[10px] rounded-[10px] w-[100px] z-10 bg-[grey] ' >

                    <ul className='text-[10px]'>
                        {items.map((item: any) => (
                            <li  className='text-[15px]  ' >{item.label}</li>
                        ))}
                        <li className='absolute top-0 right-0 m-[10px]' onClick={() => setOpen(false)} >
                            <Icon icon="maki:cross" width="15" height="15" style={{ color: "#ffffff" }} />
                        </li>

                    </ul>


                </div>

            )}

        </div>
    )
}

export default Navbar