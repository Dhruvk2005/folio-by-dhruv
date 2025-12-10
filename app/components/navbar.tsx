import React from 'react'
import GooeyNav from './gooeyNav';

const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
];

const Navbar = () => {
    return (

        <div className=' flex fixed justify-center items-center w-[100%] mt-[20px] absolute z-10 top-0 min-h-[80px]  ' >
            <div className=' flex justify-between items-center w-[100%] mx-[20px]  p-[10px] rounded-[50px] bg-white/10 backdrop-blur-md shadow-lg  md:w-[70%] lg:w-[60%] xl:w-[50%]  ' >
                <div>
                    <p className='text-[white] text-[20px] ml-[10px]  font-bold ' >Dhruv</p>

                </div>
                <div>
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
            </div>

        </div>
    )
}

export default Navbar