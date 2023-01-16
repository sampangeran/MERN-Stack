import { NextPage } from 'next';
import React, { useState } from 'react';
import styles from './styles.module.css';
import ICONS from '@/assets/icons';
import gradientBackground from "@/assets/img/gradient-background.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import required modules
import { Pagination } from "swiper";

const  PricingPage: NextPage = () =>  {
  const [active, setActive] = useState(10);

  console.log(active)
  const stepPembayaran = [
    {
      id: 1,
      header: "1. Pilih paket kelas yang diinginkan",
      text: "Lorem ipsum dolor sit amet consectetur. Ut consectetur auctor ac netus et dictum rhoncus scelerisque. Nec vulputate non id blandit. Nibh vitae ut scelerisque justo in ligula molestie quam scelerisque. Amet sodales lacus rhoncus tortor consequat ac tortor augue non. Sed nulla tellus nullam nisi quam semper senectus quam montes Vitae in cras tincidunt a tincidunt sem. Eu aliquam etiam porttitor dignissim sit alesuada fermentum."
    },
    {
      id: 2,
      header: "2. Isi data yang diperlukan",
      text: "Lorem ipsum dolor sit amet consectetur. Ut consectetur auctor ac netus et dictum rhoncus scelerisque. Nec vulputate non id blandit. Nibh vitae ut scelerisque justo in ligula molestie quam scelerisque. Amet sodales lacus rhoncus tortor consequat ac tortor augue non. Sed nulla tellus nullam nisi quam semper senectus quam montes Vitae in cras tincidunt a tincidunt sem. Eu aliquam etiam porttitor dignissim sit alesuada fermentum."
    },
    {
      id: 3,
      header: "3. Menunggu verifikasi",
      text: "Lorem ipsum dolor sit amet consectetur. Ut consectetur auctor ac netus et dictum rhoncus scelerisque. Nec vulputate non id blandit. Nibh vitae ut scelerisque justo in ligula molestie quam scelerisque. Amet sodales lacus rhoncus tortor consequat ac tortor augue non. Sed nulla tellus nullam nisi quam semper senectus quam montes Vitae in cras tincidunt a tincidunt sem. Eu aliquam etiam porttitor dignissim sit alesuada fermentum."
    },
    {
      id: 4,
      header: "4. Melakukan pembayaran",
      text: "Lorem ipsum dolor sit amet consectetur. Ut consectetur auctor ac netus et dictum rhoncus scelerisque. Nec vulputate non id blandit. Nibh vitae ut scelerisque justo in ligula molestie quam scelerisque. Amet sodales lacus rhoncus tortor consequat ac tortor augue non. Sed nulla tellus nullam nisi quam semper senectus quam montes Vitae in cras tincidunt a tincidunt sem. Eu aliquam etiam porttitor dignissim sit alesuada fermentum."
    },
    {
      id: 5,
      header: "5. Menunggu konfirmasi",
      text: "Lorem ipsum dolor sit amet consectetur. Ut consectetur auctor ac netus et dictum rhoncus scelerisque. Nec vulputate non id blandit. Nibh vitae ut scelerisque justo in ligula molestie quam scelerisque. Amet sodales lacus rhoncus tortor consequat ac tortor augue non. Sed nulla tellus nullam nisi quam semper senectus quam montes Vitae in cras tincidunt a tincidunt sem. Eu aliquam etiam porttitor dignissim sit alesuada fermentum."
    },
    {
      id: 6,
      header: "6. Selesai, Kamu sudah terdaftar!",
      text: "Lorem ipsum dolor sit amet consectetur. Ut consectetur auctor ac netus et dictum rhoncus scelerisque. Nec vulputate non id blandit. Nibh vitae ut scelerisque justo in ligula molestie quam scelerisque. Amet sodales lacus rhoncus tortor consequat ac tortor augue non. Sed nulla tellus nullam nisi quam semper senectus quam montes Vitae in cras tincidunt a tincidunt sem. Eu aliquam etiam porttitor dignissim sit alesuada fermentum."
    },

  ]

  return <div>

    <div className='pt-10 flex flex-col justify-center items-center '>
      {/* Pricing section */}
      <h1 className='text-4xl text-black pb-4'>Harga</h1>
      <div className='w-11/12 pb-10 max-w-full lg:max-w-[1000px]'>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints= {{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{display:'flex', justifyContent:'center'}}
          >
            <SwiperSlide className='bg-transparent' style={{background: 'transparent'}}>
                <div className='w-[316px] h-[590px] my-7 flex flex-col bg-[#F5F7FF] rounded-2xl text-left'>
                <div className='h-full'>
                  <div className="pt-6 pl-8 pr-6 pb-3">
                    <div className='flex items-center gap-x-2'>
                      <h2 className='text-[20px] text-[#0B122A] font-medium text-left'>Kelas Reguler</h2>
                      <div className={`${styles["hdg-label-info"]} relative`}>
                        <svg className={styles["icon"]} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#0b122a" d="M128 24a104 104 0 1 0 104 104A104.1 104.1 0 0 0 128 24Zm-2 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm10 112h-8a8 8 0 0 1-8-8v-48a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8v48a8 8 0 0 1 0 16Z"/></svg>
                        <div className={styles["hdg-label-popup"]}>
                          Lorem ipsum dolor sit amet consectetur.                
                        </div>
                      </div>
                    </div>
                    <p><span className='text-[28px] font-rajdhani font-bold'>Rp 260.000,-</span>/Sesi</p>
                  </div>
                  <div className='bg-[#FFC389] w-full py-2 text-center font-bold'>
                    Rincian Paket:
                  </div>
                  <div className='max-w-full pr-2 pt-2'>
                    <ul className='ml-[50px]'>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Kapasitas untuk 1-5 orang</li>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Materi berbasis kurikulum</li>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Siswa ke-6 hingga seterusnya akan dikenakan biaya tambahan Rp 40.000 per orang</li>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Durasi 100 menit per sesi</li>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Dilakukan secara online melalui Google Meet</li>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Akses ke rekaman</li>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Kelas konsultasi 7 hari setelahnya via Discord</li>
                    </ul>
                  </div>
                </div>
                <div className='px-6 pb-6 flex flex-col items-center'>
                  <hr className='w-full' />
                  <button className='bg-[#5885E9] text-white rounded-full p-3 px-12 mt-[20px] '>Daftar Kelas</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{background: 'transparent'}}>
            <div className='w-[316px] h-[590px] my-7 flex flex-col bg-[#3E5294] text-[#F3F3F3] rounded-2xl text-left'>
              <div className='h-full'>
                <div className="pt-6 pl-8 pr-6 pb-3">
                  <div className='flex items-center gap-x-2'>
                    <h2 className='text-[20px] text-[#F3F3F3] font-medium text-left'>Kelas Spesial </h2>
                    <div className={`${styles["hdg-label-info"]} relative`}>
                      <svg className={styles["icon"]} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#0b122a" d="M128 24a104 104 0 1 0 104 104A104.1 104.1 0 0 0 128 24Zm-2 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm10 112h-8a8 8 0 0 1-8-8v-48a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8v48a8 8 0 0 1 0 16Z"/></svg>
                      <div className={styles["hdg-label-popup"]}>
                        Lorem ipsum dolor sit amet consectetur.                
                      </div>
                    </div>
                    <p className='px-2 bg-[#FFAE5F] rounded text-[#151515] ml-2'>Favorite</p>
                  </div>
                  <p><span className='text-[28px] font-rajdhani font-bold'>Rp 260.000,-</span>/Sesi</p>
                </div>
                <div className='bg-[#D8D8D8] text-[#151515] w-full py-2 text-center font-bold'>
                  Rincian Paket:
                </div>
                <div className='max-w-full pr-2 pt-2'>
                  <ul className='ml-[50px]'>
                    <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH_LIGHT.src})`}}>Kapasitas untuk 1-5 orang</li>
                    <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH_LIGHT.src})`}}>Dapat dikostumisasi sesuai dengan permintaan siswa</li>
                    <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH_LIGHT.src})`}}>Siswa ke-6 hingga seterusnya akan dikenakan biaya tambahan Rp 40.000 per orang</li>
                    <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH_LIGHT.src})`}}>Durasi 100 menit per sesi</li>
                    <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH_LIGHT.src})`}}>Dilakukan secara online melalui Google Meet</li>
                    <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH_LIGHT.src})`}}>Akses ke rekaman</li>
                    <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH_LIGHT.src})`}}>Kelas konsultasi 7 hari setelahnya via Discord</li>
                  </ul>
                </div>
              </div>
              <div className='px-6 pb-6 flex flex-col items-center'>
                <hr className='w-full' />
                <button className='bg-white text-[#5885E9] rounded-full p-3 px-12 mt-[20px] '>Daftar Kelas</button>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide style={{background: 'transparent'}}>
              <div className='w-[316px] h-[590px] my-7 flex flex-col bg-[#F5F7FF] rounded-2xl text-left'>
                <div className='h-full'>
                  <div className="pt-6 pl-8 pr-6 pb-3">
                    <div className='flex items-center gap-x-2'>
                      <h2 className='text-[20px] text-[#0B122A] font-medium text-left'>Kelas Penulisan Riset</h2>
                      <div className={`${styles["hdg-label-info"]} relative`}>
                        <svg className={styles["icon"]} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#0b122a" d="M128 24a104 104 0 1 0 104 104A104.1 104.1 0 0 0 128 24Zm-2 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm10 112h-8a8 8 0 0 1-8-8v-48a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8v48a8 8 0 0 1 0 16Z"/></svg>
                        <div className={styles["hdg-label-popup"]}>
                          Lorem ipsum dolor sit amet consectetur.                
                        </div>
                      </div>
                    </div>
                    <p><span className='text-[28px] font-rajdhani font-bold'>Rp 260.000,-</span>/Sesi</p>
                  </div>
                  <div className='bg-[#FFC389] w-full py-2 text-center font-bold'>
                    Rincian Paket:
                  </div>
                  <div className='max-w-full pr-2 pt-2'>
                    <ul className='ml-[50px]'>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Kapasitas untuk 1-3 orang</li>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Dilakukan secara online melalui Google Meet</li>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Akses ke rekaman</li>
                      <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.SEARCH.src})`}}>Kelas konsultasi 7 hari setelahnya via Discord</li>
                    </ul>
                  </div>
                </div>
                <div className='px-6 pb-6 flex flex-col items-center'>
                  <hr className='w-full' />
                  <button className='bg-[#5885E9] text-white rounded-full p-3 px-12 mt-[20px] '>Daftar Kelas</button>
                </div>
            </div>
            </SwiperSlide>
        </Swiper>
      </div>

      {/* Payment Info Section */}
      <div className='py-16 bg-[#F5F7FF] w-full'>
        <div className='text-center pb-8 px-6'>
          <h2 className='text-4xl text-black'>Cara Melakukan Pembayaran</h2>
          <p>Berikut adalah langkah-langkah untuk mendaftar kursus yang ada pada Torche</p>
        </div>
        <div className='w-full flex items-center justify-center'>
          <div className='bg-white w-4/5 py-6 px-2 rounded-2xl'>
              {stepPembayaran.map((step,id) => (
                // active === step.id ? setActive(10) : setActive(step.id)
                <div onClick={() => {console.log(active === step.id ? setActive(10) : setActive(step.id))}} className='cursor-pointer'>
                  <div className='flex justify-between py-6 px-6'>
                    <h4 className='text-[#151515] text-2xl'>{step.header}</h4>
                    <img className={`${active === step.id ? 'rotate-180' : ''}`} src={ICONS.ARROW.src} alt="" />
                  </div>
                  <div className={`${active === step.id ? 'transition-all block px-10 py-2 h-auto opacity-1 ' : 'h-0  opacity-0'}`}>
                    <p className={`${active === step.id ? 'block h-auto' : 'hidden h-0'}`}>{step.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='w-full flex items-center justify-center py-16'>
        <div style={{'backgroundImage': `url(${gradientBackground.src})`}} className='bg-cover bg-center text-white text-center w-4/5 px-4 py-6 rounded-2xl'>
          <h3 className='text-4xl'>Punya Petanyaan?</h3>
          <p className='pt-2 pb-6'>Lorem ipsum dolor sit amet consectetur. Laoreet volutpat mauris  aecenas maecenas. dolor sit amet consectetur</p>
          <button className='bg-white text-[#5885E9] rounded-full p-3 px-12 mt-[20px] font-bold hover:bg-[#5885E9] hover:text-white'>Hubungi Kami</button>
        </div>
      </div>
    </div>
  </div>;
}

export default PricingPage