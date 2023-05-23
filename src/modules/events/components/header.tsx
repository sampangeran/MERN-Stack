import React, { useRef, useState } from "react";
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

interface Event {
  id: number;
  title: string;
  description: string;
  dateStart: string;
  dateEnd: string;
  time: string;
  link: string;
  typeEvent: string;
}

interface Props {
  events: Event[];
}

const Header: React.FC<Event> = ({events}) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {events?.slice(0, 4).map((data, idx) => (
        <SwiperSlide key={idx}>
          <div className="w-full before:content-[' '] bg-[url('../assets/events/bg-desktop.webp')] before:absolute before:inset-0 min-h-[600px] bg-cover bg-center bg-no-repeat relative">
            <div className='flex px-5 lg:px-10 xl:px-20'>
              <div className='flex flex-col my-40 justify-center text-left md:justify-start space-y-2'>
                <p className='text-[22px] font-rajdhani font-medium text-white'>{data?.typeEvent}</p>
                <h2 className='text-[34px] font-rajdhani font-bold text-white'>{data?.title}</h2>
                <p className='text-[14px] font-cairo text-white'>{`${data?.dateStart} - ${data?.dateEnd}, ${data?.time}`}</p>
                <div className="flex gap-4 pt-6">
                  <Link href={data?.link ?? ''} passHref>
                    <button className="bg-[#5885E9] rounded-full p-4 px-[20px] text-[14px] font-cairo font-bold text-white">Daftar Kelas</button>
                  </Link>
                  <Link href={`/events/details/${data?._id}` ?? ''} passHref>
                    <button className="bg-white rounded-full p-4 px-[20px] text-[14px] text-[#5885E9] font-cairo font-bold underline">Lihat Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Header;