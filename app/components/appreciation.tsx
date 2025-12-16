import React from 'react'
import StarRating from './stars'

const Appreciationpage = () => {
  const content = [
    {
      comment: "Amazing work. Professional for the most part. Very talented! Great value. I will work with him again. Highly recommended!!",
      name: "shena16",
      location: "Mauritius"

    },
    {
      comment: "This artist is very talented. I love the end result. It took some time to get on the same page, but I was VERY pleased with his work. I will definitely use him again and recommend him for sure. He also has pretty good value for his work as well. Not too expensive. You won't regret choosing him.",
      name: "tre4life1",
      location: "United States"

    },
    {
      comment: "He was quick to respond and make alterations. I would recommend him to anyone! Great job!",
      name: "eveflores362",
      location: "United States"
    },
    {
      comment: "Great work. Delivery on time. Good communication and polite. Would most certainly recommend as very professional and accommodating",
      name: "shubham_kumar17",
      location: "Bengaluru,India"
    }
  ]


  return (
    <div className='w-[100%] py-[30px] bg-[black] ' >
      <div className='text-[30px] text-[white] font-bold ml-[30px] md:text-[50px] lg:text-[60px] ' >
        Words of appreciation
        <p className='text-[15px] mt-[10px] text-[grey] font-normal ml-[5px]' >Feedback from clients who trusted my work.</p>
        <p className='text-[15px] text-[grey] font-normal ml-[5px]' >you can check on https://www.fiverr.com/dhruv_khade?public_mode=true</p>
      </div>
      <div className='flex-col mt-[30px] flex gap-[20px] p-[20px] lg:flex-row ' >


        {content.map((items) => (


          <div className='max-w-[100vw] p-[20px] flex flex-col  gap-[20px]  rounded-[20px] border-[white] bg-gradient-to-l from-[#bdbdbd] to-[#000000] ' >
            <StarRating rating={5} />
            <ul className='flex flex-col text-[white] gap-[10px]' >
              <li>{items.comment}</li>
              <li>Client : {items.name}</li>
              <li>Country : {items.location}</li>
            </ul>

          </div>

        ))}
      </div>

    </div>
  )
}

export default Appreciationpage
