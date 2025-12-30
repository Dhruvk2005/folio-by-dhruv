// import React from 'react'
// import { Icon } from "@iconify/react";

// export const ConnectFooter = () => {
//     return (
//         <div className='w-[100%]  h-[600px] flex gap-[40px] flex-col items-center bg-[black] text-[white]' >
//             <div className='w-[80%] mt-[100px] flex justify-between items-center' >
//                 <div>
//                     <ul>
//                         <li className='text-[60px] font-bold' >Let's have</li>
//                         <li className='text-[60px] font-bold -mt-[20px] text-[darkgrey] ' >a chat</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h3 className='text-[grey] text-[20px]' >GET IN TOUCH</h3>
//                     <h1 className='text-[30px] font-bold ' >enderdude786@gmail.com</h1>
//                 </div>
//             </div>

//             <div className='w-[80%] flex gap-[227px]  ' >
//                 <div className='text-[grey]  text-[20px] w-[50%] ' >Want to chat design, products, anything digital or just grab
//                     a smoothie? Hit me up!</div>
//                 <div>
//                     <h1 className='text-[grey] text-[20px]' >FOLLOW ME</h1>
//                     <ul className='flex gap-[20px] mt-[20px] ' >
//                         <li className='hover:cursor-pointer border-[2px] p-[7px] border-[grey] rounded-[10px] hover:border-[white] ' ><Icon icon="mdi:instagram" width="24" height="24" style={{ color: "#ffffff" }} /></li>
//                         <li className='hover:cursor-pointer border-[2px] p-[7px] border-[grey] rounded-[10px] hover:border-[white]' ><Icon icon="mdi:linkedin" width="24" height="24" style={{ color: "#ffffffff" }} /></li>
//                         <li className='hover:cursor-pointer border-[2px] p-[7px] border-[grey] rounded-[10px] hover:border-[white]' ><Icon icon="mdi:github" width="24" height="24" style={{ color: "#ffffffff" }} /></li>
//                     </ul>
//                 </div>


//             </div>
//             <div className="w-[90%] h-px bg-gray-400 animate-pulse" />

//             <div className='text-[grey]  text-[20px]' >
//                 Made with passion, by Dhruv. © All rights reserved.
//             </div>



//         </div>
//     )
// }


import React from 'react'
import { Icon } from "@iconify/react";
import Link from 'next/link'


export const ConnectFooter = () => {
  return (
    <div className="w-full min-h-[600px] flex flex-col items-center bg-black text-white px-4 sm:px-6">

      {/* TOP SECTION */}
      <div className="w-full max-w-[1200px] mt-[80px] flex flex-col lg:flex-row justify-between  gap-10">

        {/* LEFT */}
        <div>
          <ul>
            <li className="text-[42px]  sm:text-[50px] lg:text-[60px] -mt-[25px] font-bold">
              Let's have
            </li>
            <li className="text-[42px] sm:text-[50px] lg:text-[60px] font-bold -mt-2 text-[grey]">
              a chat
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="">
          <h3 className="text-[grey] text-[16px] sm:text-[18px]">
            GET IN TOUCH
          </h3>
          <h1 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold break-all">
            enderdude786@gmail.com
          </h1>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between gap-10 mt-14">

        {/* DESCRIPTION */}
        <div className="text-[grey] text-[16px] sm:text-[18px] lg:text-[20px] lg:w-[50%]">
          Want to chat design, products, anything digital or just grab
          a smoothie? Hit me up!
        </div>

        {/* SOCIALS */}
        <div className='' >
          <h1 className="text-[grey] text-[16px] sm:text-[18px]">
            FOLLOW ME
          </h1>

          <ul className='flex gap-[20px] mt-[20px] ' >



            <Link href={'https://www.instagram.com/dhruv_khade/'} >
              <li className='hover:cursor-pointer border-[2px] p-[7px] border-[grey] rounded-[10px] hover:border-[white] ' ><Icon icon="mdi:instagram" width="24" height="24" style={{ color: "#ffffff" }} /></li>
            </Link>
            <Link href={'https://www.linkedin.com/in/dhruv-khade-26779b281/'} >
              <li className='hover:cursor-pointer border-[2px] p-[7px] border-[grey] rounded-[10px] hover:border-[white]' ><Icon icon="mdi:linkedin" width="24" height="24" style={{ color: "#ffffffff" }} /></li>
            </Link>
            <Link href={'https://github.com/Dhruvk2005'} >
              <li className='hover:cursor-pointer border-[2px] p-[7px] border-[grey] rounded-[10px] hover:border-[white]' ><Icon icon="mdi:github" width="24" height="24" style={{ color: "#ffffffff" }} /></li>
            </Link>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full max-w-[1200px] h-px bg-gray-700 my-12" />

      {/* FOOTER TEXT */}
      <div className="text-[grey] text-[14px] sm:text-[16px] text-center pb-6">
        Design and developed by Dhruv K. © All rights reserved.
      </div>

    </div>
  )
}
