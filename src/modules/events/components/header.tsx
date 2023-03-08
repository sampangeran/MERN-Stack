import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Header() {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="w-full before:content-[' '] bg-[url('../assets/events/bg-desktop.webp')] before:absolute before:inset-0 min-h-[600px] bg-cover bg-center bg-no-repeat relative">
          <div className='flex px-5 lg:px-10 xl:px-20'>
            <div className='flex flex-col my-40 justify-center text-left md:justify-start space-y-2'>
              <p className='text-[22px] font-rajdhani font-medium text-white'>Webinar</p>
              <h2 className='text-[34px] font-rajdhani font-bold text-white'>TORCAMP Penelitian & Penulisan Makalah</h2>
              <p className='text-[14px] font-cairo text-white'>13-20 Agustus 2022, 19.00 WIB</p>
              <div className="flex gap-4 pt-6">
                <button href="/registration" className="bg-[#5885E9] rounded-full p-4 px-[20px] text-[14px] font-cairo font-bold text-white">Daftar Kelas</button>
                <button href="/" className="bg-white rounded-full p-4 px-[20px] text-[14px] text-[#5885E9] font-cairo font-bold underline">Lihat Detail</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full before:content-[' '] bg-[url('../assets/events/bg-desktop.webp')] before:absolute before:inset-0 min-h-[600px] bg-cover bg-center bg-no-repeat relative">
          <div className='flex px-5 lg:px-10 xl:px-20'>
            <div className='flex flex-col my-40 justify-center text-left md:justify-start space-y-2'>
              <p className='text-[22px] font-rajdhani font-medium text-white'>Webinar</p>
              <h2 className='text-[34px] font-rajdhani font-bold text-white'>TORCAMP Penelitian & Penulisan Makalah</h2>
              <p className='text-[14px] font-cairo text-white'>13-20 Agustus 2022, 19.00 WIB</p>
              <div className="flex gap-4 pt-6">
                <button href="/registration" className="bg-[#5885E9] rounded-full p-4 px-[20px] text-[14px] font-cairo font-bold text-white">Daftar Kelas</button>
                <button href="/" className="bg-white rounded-full p-4 px-[20px] text-[14px] text-[#5885E9] font-cairo font-bold underline">Lihat Detail</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}