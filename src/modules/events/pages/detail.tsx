import React from 'react';
import Image from 'next/image';
import Poster1 from '@/assets/events/events-torcamp-research.webp';
import Foto1 from '@/assets/events/foto-arif.webp';
import Foto2 from '@/assets/events/foto-michael.webp';
import Dokumentasi from '@/assets/events/torcamp-research-documentation-1.webp';
import { ArrowLeft } from 'react-bootstrap-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  image: string;
  dateStart: string;
  dateEnd: string;
  time: string;
  link: string;
  active: boolean;
  typeEvent: string;
}

interface Props {
  events: Event[];
}

const EventDetailsPage: React.FC<Event> = ({events}) => {
  const router = useRouter();
  return (
    <div className="my-8">
      <div className="flex items-center justify-between px-5 lg:px-10 xl:px-20 bg-[#f5faff] -mt-8 py-4 flex-wrap lg:flex-nowrap">
        <p className="text-rajdhani font-light text-[24px]">TORCHE's Events</p>
        <div className="flex gap-4 text-cairo text-[#444] text-sm">
          <p className="text-blue-500">Events</p>
          <p> / </p>
          <p>{events?.title}</p>
        </div>
      </div>
      <div className="cursor-pointer text-cairo text-[#444] flex items-center gap-4 px-5 lg:px-10 xl:px-20 mt-8" onClick={() => router.back()}>
        <ArrowLeft size={32} /> 
        <p className="text-2xl">Kembali</p>
      </div>
      <div className="flex justify-start gap-12 font-cairo px-5 lg:px-10 xl:px-20 my-10 flex-wrap lg:flex-nowrap text-[#444]">
        <div className="lg:w-8/12 flex flex-col">
          <div className="flex flex-col items-center">
            <Image src={events?.image} alt="poster" width={696} height={870} className="w-full"/>
          </div>
          <div>
            <h2 className="font-rajdhani text-[24px] text-[#444] mt-8">
            {events?.title}
            </h2>
            <div className="h-px w-full relative">
              <div className="bg-gray-300 h-full absolute left-0 top-0 right-0"></div>
              <div className="bg-blue-500 h-full absolute left-0 top-0 w-[100px]"></div>
            </div>
            <div className="text-[#444] text-base mt-8 text-justify">
            {events?.description}
            </div>
          </div>
        </div>
        <div className="lg:w-4/12">
          <div className="w-full space-y-3">
            <div className="bg-slate-100 px-4 py-2 flex justify-between">
              <p className="font-bold text-lg font-rajdhani">Tanggal</p>
              <p className="text-base">{`${events?.dateStart} - ${events?.dateEnd}`}</p>
            </div>
            <div className="bg-slate-100 px-4 py-2 flex justify-between">
              <p className="font-bold text-lg font-rajdhani">Waktu</p>
              <p className="text-base">{events?.time}</p>
            </div>
            <div className="bg-slate-100 px-4 py-2 flex justify-between items-center">
              <p className="font-bold text-lg font-rajdhani">Harga</p>
              <div>
                <p className="text-base">Rp{events?.price}/orang</p>
              </div>
            </div>
            <div className="bg-slate-100 px-4 py-2 flex justify-between">
              <p className="font-bold text-lg font-rajdhani">Registrasi</p>
              {events?.active === false ?
              <p className="text-base text-red-500">Tutup</p> :
              <Link href='/' className="w-full text-blue-500">
                Daftar Event
              </Link>
              }
            </div>
          </div>
          <div className="mt-8">
            <h2 className="font-rajdhani text-[24px]">Tentang Pembicara</h2>
            <div className="h-px w-full relative">
              <div className="bg-gray-300 h-full absolute left-0 top-0 right-0"></div>
            </div>
            {events?.speakers.map((data, idx) => (
              <div className="mt-8" key={idx}>
                <div className="flex justify-start items-center gap-5">
                  <Image src={data?.imageSpeaker} alt="pembicara" width={80} height={80} className="rounded-full"/>
                  <h2 className="text-2xl font-rajdhani">{data?.name}</h2>
                </div>
                <p className="text-base text-justify mt-4">{data?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-12 font-cairo px-5 lg:px-10 xl:px-20 lg:my-20 text-[#444]">
        <div className="w-full lg:w-8/12 flex flex-col mt-8">
          <h2 className="font-rajdhani text-[24px]">Dokumentasi Event</h2>
          <div className="h-px w-full relative mb-4">
              <div className="bg-gray-300 h-full absolute left-0 top-0 right-0"></div>
          </div>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {events?.documentation.map((data, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full">
                  <Image src={data?.imageDoc} width={1080} height={720} alt="dokumentasi" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default EventDetailsPage