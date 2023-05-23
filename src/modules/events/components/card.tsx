import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  poster: StaticImageData;
  jenisEvent: string;
  judul: string;
  waktu: string;
  deskripsi: string;
  urlEvent: string;
  urlDetail: string;
};

const CardComponent: React.FC<CardProps> = ({poster, jenisEvent, judul, waktu, deskripsi, urlEvent, urlDetail}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-4">
        <div className="w-full lg:w-[1128px] md:flex font-cairo items-center gap-2">
          <figure className="w-full md:w-[352px] h-[253px] relative">
            <Image src={poster} alt="poster" layout="fill" objectFit="cover" />
          </figure>
          <div className="p-4 flex flex-col gap-4 md:w-[751px] justify-between leading-normal text-center md:text-left">
            <p className="text-xs text-[#5885E9] flex items-center font-bold bg-[#F5F7FF] p-3 w-fit rounded-full">
              {jenisEvent}
            </p>
            <div className="text-[#151515] font-bold text-[22px]">{judul}</div>
            <div className="text-[#151515] font-bold text-[14px] -mt-4">{waktu}</div>
            <p className="text-[#151515] text-[14px]">{deskripsi}</p>
            <div className="flex gap-4">
              <Link href={urlEvent ?? ''} className="w-full">
                <button className="bg-[#5885E9] rounded-full p-4 px-[20px] text-[14px] font-cairo font-bold text-white w-full">Daftar Event</button>
              </Link>
              <Link href={urlDetail ?? ''} className="w-full">
                <button className="bg-white rounded-full p-4 px-[20px] text-[14px] text-[#5885E9] font-cairo font-bold underline w-full border border-[#5885E9]">Lihat Detail</button>
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 lg:w-[1128px] my-6" />
      </div>
    </>
  );
};

export default CardComponent;
