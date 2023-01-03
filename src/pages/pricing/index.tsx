import { NextPage } from 'next';
import React from 'react';
import styles from './styles.module.css';
import ICONS from '@/assets/icons';

const  PricingPage: NextPage = () =>  {
  return <div className='mt-[80px]'>
    <div className='py-10 flex flex-col justify-center items-center '>
      <h1 className='text-4xl text-black'>Harga</h1>

      <div className='flex'>

        <div className='w-[282px] h-[584px] m-7 flex flex-col bg-[#F5F7FF] rounded-2xl'>
          <div className='h-full'>
            <div className="pt-6 pl-8 pr-6 pb-3">
              <div className='flex items-center gap-x-2'>
                <h2 className='text-[22px] text-[#0B122A] font-medium text-left'>Kelas Reguler</h2>
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
                <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.search.src})`}}>Kapasitas untuk 1-5 orang</li>
                <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.search.src})`}}>Materi berbasis kurikulum</li>
                <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.search.src})`}}>Siswa ke-6 hingga seterusnya akan dikenakan biaya tambahan Rp 40.000 per orang</li>
                <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.search.src})`}}>Durasi 100 menit per sesi</li>
                <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.search.src})`}}>Dilakukan secara online melalui Google Meet</li>
                <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.search.src})`}}>Akses ke rekaman</li>
                <li className="mt-2 text-sm" style={{listStyleImage: `url(${ICONS.search.src})`}}>Kelas konsultasi 7 hari setelahnya via Discord</li>
              </ul>
            </div>
          </div>
          <div className='px-6 pb-6 flex flex-col items-center'>
            <hr className='w-full' />
            <button className='bg-[#5885E9] text-white rounded-full p-3 px-12 mt-[20px] '>Daftar Kelas</button>
          </div>
        </div>

        <div className='w-[282px] h-[584px] m-7 flex bg-[#F5F7FF] rounded-2xl'>
          <h2>Kelas Reguler</h2>
        </div>

        <div className='w-[282px] h-[584px] m-7 flex bg-[#F5F7FF] rounded-2xl'>
          <h2>Kelas Reguler</h2>
        </div>
        
      </div>
    </div>
  </div>;
}

export default PricingPage