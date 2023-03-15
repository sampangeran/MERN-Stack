import Header from './../components/header';
import Search from './../components/search';
import Filter from './../components/filter';
import CardComponent from './../components/card';
import { useState, useEffect } from 'react';
import Pagination from './../components/pagination';
import { eventData } from '../dummy-data.ts';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EventPage() {
  useEffect(() => {
    AOS.init();
  }, [])

  // state untuk menyimpan nomor halaman yang aktif
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 4;
  const totalPage = Math.ceil(eventData.length / dataPerPage);
  
  // fungsi untuk mengubah nomor halaman yang aktif
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = eventData.slice(startIndex, endIndex);

  return (
    <>
      <Header />
      <main className="my-[50px] md:my-[116px]" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="uppercase text-rajdhani text-[34px] text-black text-center mb-[18px]">torche event</h1>
        <Search />
        <Filter />
        <div className="mt-8">
          {currentData.map((data, idx) => (
            <CardComponent key={idx} poster={data.poster} jenisEvent={data.jenisEvent} judul={data.judul} waktu={data.waktu} deskripsi={data.deskripsi} urlEvent={data.urlEvent} urlDetail={data.urlDetail} />
          ))}
          <Pagination currentPage={currentPage} totalPage={totalPage} totalData={eventData.length} onPageChange={handlePageChange} />
        </div>
      </main>
    </>
  )
}