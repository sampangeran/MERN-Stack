import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import HeroImage from '../../../public/assets/img/carousel-1.webp'
import styled from "styled-components";
import { NextPage } from "next";
import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons';
import about1 from "../../assets/Careers/about-1.webp"
import about2 from "../../assets/Careers/about-2.webp"
import about3 from "../../assets/Careers/about-3.webp"
import about4 from "../../assets/Careers/about-4.webp"
import star from "../../assets/Careers/alotof-star.png"
import adimas from "../../assets/Careers/testimonials/adimas.webp"
import renci from "../../assets/Careers/testimonials/renci.webp"
import wiwit from "../../assets/Careers/testimonials/wiwit.webp"
import joas from "../../assets/Careers/testimonials/joas.webp"
import feby from "../../assets/Careers/testimonials/feby.webp"
import hero from "../../assets/Careers/carousel-1.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const CareersPage: NextPage = () => {

  const pagination = {
    clickable: true,
  };

  useEffect(() => {
    AOS.init();
  }, [])

  const job = [
    {
      title: 'Finance',
      icon: <Icon.CurrencyDollar />,
      vacancy: '1',
      link: '/careers/finance/Opening.jsx'
    },
    {
      title: 'General Affairs',
      icon: <Icon.PersonWorkspace />,
      vacancy: '1',
      link: '/careers/general-affair/Opening.jsx'
    },
    {
      title: 'Curriculum and Education',
      icon: <Icon.BookHalf />,
      vacancy: '0',
      link: '/careers/OpeningEmpty.jsx'
    },
    {
      title: 'Marketing and Sales',
      icon: <Icon.BarChartLine />,
      vacancy: '6',
      link: '/careers/marketing-and-sales/Opening.jsx'
    },
    {
      title: 'CEO Office',
      icon: <Icon.PersonSquare />,
      vacancy: '0',
      link: '/careers/OpeningEmpty.jsx'
    },
    {
      title: 'Technology and Engineering',
      icon: <Icon.Laptop />,
      vacancy: '10',
      link: '/careers/technology-and-engineering/Opening.jsx'
    },
    {
      title: 'Human Resource',
      icon: <Icon.PeopleFill />,
      vacancy: '2',
      link: '/careers/human-resource-development/Opening.jsx'
    },
    {
      title: 'Tutors',
      icon: <Icon.Book />,
      vacancy: '0',
      link: '/careers/tutors/Opening.jsx'
    }
  ]

  const testi = [
    {
      icon: <Icon.Quote />,
      testi: 'Mulai dari CEO dan jajarannya merangkul kami semua tanpa membedakan tanpa menyalahkan kami apabila ada kesalahan yang dilakukan selama proses magang. CEO nya mampu menciptakan hubungan dan komunikasi serta kerja sama tim yang baik dalam mencapai target perusahaan.',
      nama: 'Renci Gusri Solerena',
      jabatan: 'Legal Office Intern',
      photo: <Image src={renci} alt="renci" width={100} height={100} />
    },
    {
      icon: <Icon.Quote />,
      testi: 'Yang aku sukai adalah tim nya, jujur aku belum ada basic sama sekali dalam legal coorporate tapi ka renci dan ka ranti ngembimbing aku, dan ka leon ga marahin ga kalo aku ga paham.',
      nama: 'Wiwit Purwoedi',
      jabatan: 'Legal Office Intern',
      photo: <Image src={wiwit} alt="wiwit" width={100} height={100} />
    },
    {
      icon: <Icon.Quote />,
      testi: 'Beberapa hal yang aku suka dari internship di Torche itu adalah kakak – kakak di Torche sangat ramah dan juga supportive. Sistem internnya juga tidak terlalu memberatkan intern (dari yang aku rasakan di comm dev).',
      nama: 'Adimas Anugerah Rivandy',
      jabatan: 'Marketing and Sales Intern',
      photo: <Image src={adimas} alt="adimas" width={100} height={100} />
    },
    {
      icon: <Icon.Quote />,
      testi: 'Selama melakukan internship selama 3 bulan terdapat beberapa hal yang disukai selama pelaksanaan intern seperti pemberian job desc yang detail, didampingi oleh head dari divisi dengan baik dan responsive apabila terdapat pertanyaan, memiliki workload yang tidak melebihi dari kontrak, dan waktu intern yang tepat waktu.',
      nama: 'Joas Kurnianto',
      jabatan: 'Business Process Development Intern',
      photo: <Image src={joas} alt="joas" width={100} height={100} />
    },
    {
      icon: <Icon.Quote />,
      testi: 'Yang saya sukai dari program internship ini adalah lingkungannya yang sangat friendly, baik dari C-Levelnya maupun Head nya sangat friendly kepada para intern. Selain itu juga cukup open pada internnya. Selain itu sistem dan waktu pengerjaan task nya sangat flexible, sehingga tidak membebankan intern.',
      nama: 'Febby Pangestu Iskandar',
      jabatan: 'Human Resources Intern',
      photo: <Image src={feby} alt="feby" width={100} height={100} />
    }
  ]

  return (
    /* header */
    <div className="">
      <div className="w-full before:content-[' '] bg-[url('../assets/Careers/carousel-1.webp')] before:bg-[#0e1d34cc] before:absolute before:inset-0 min-h-[300px] bg-cover bg-center bg-no-repeat relative">
        <div className='relative flex justify-center'>
          <div className='flex flex-col my-[50px]'>
            <h2 className='text-[56px] font-rajdhani text-center font-medium text-white'>Carrers</h2>
            <p className='text-center sm:text-[16px] font-cairo sm:w-[500px] md:w-[696px] lg:w-[456px] text-[#ffffffcc]'>Torche Education is open for various internship positions for students and freshgraduates to feel working environtment at startup company.</p>
          </div>
        </div>
      </div>

      <div className="lg:w-full">
        <div className=' py-[20px] bg-[#f5faff] pl-[12px] sm:pl-[40px] md:px-7 lg:px-12 xl:px-20   flex-col md:flex-row md:justify-between flex'>
          <h1 className='text-[24px] text-[#7e7e7e] font-thin font-radhjani'>Torche&apos;s Careers</h1>
          <h3 className='font-cairo pt-[10px] font-medium text-[#444444] text-[14px]'>Careers</h3>
        </div>
      </div>
      {/* End header */}

      {/* Card */}
      <div data-aos="fade-up">
        <div className='pt-[48px] pb-[12px]'>
          <h1 className='text-center mb-2 font-rajdhani font-bold text-[27.628px] sm:text-[31.6px] md:text-[33.52px] lg:text-[40px] flex justify-center text-[#444444]'>Explore By Category</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:px-[20px] xl:px-[80px] sm:px-9 content-center'>
          {
            job.map((data, index) => {
              return (
                <div key={index} className="p-[20px] grid box-border">
                  <div className='grid'>
                    <a key={index} href={data.link} className='p-[24px] font-rajdhani transition hover:shadow-none shadow-lg border-gray-100 hover:border hover:border-gray-300 duration-300 rounded-lg no-underline border border-solid border-transparent'>
                      <svg viewBox="0 0 80 20" className="text-[#007BFF]">{data.icon}</svg>
                      <h3 className='text-black font-bold text-[20px]'>{data.title}</h3>
                      <h6 className="text-[#007BFF] text-[16px] font-cairo mt-[10px] font-medium">{data.vacancy} Vacancy</h6>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {/*End Card*/}

      {/* Bagian Start Gambar dan Kickstart */}
      <div className='lg:pl-[90px] flex justify-center p-[24px] w-full md:pl-[40px] pb-16 sm:pt-[70px]' data-aos="fade-up">
        <div className='flex flex-col lg:flex-row'>
          <div className="flex flex-col text-[#444444]">
            <Image
              className='rounded-tl-lg w-[163.6px] xsm:w-[226px] sm:w-[258px] xl:w-[306px] md:w-[348px] lg:w-[222px]'
              src={about1}
              alt="about 1"
            ></Image>
            <Image
              className='rounded-bl-lg z-20 w-[139.05px] xsm:w-[192.1px] xsm:ml-[35px] ml-[25px] relative sm:w-[219.3px] xl:w-[260px] md:w-[295.8px] sm:ml-[40px] md:ml-[50px] lg:w-[188.7px] lg:-mt-[1px] lg:ml-[34px] xl:-mt-[1px] xl:ml-[45px]'
              src={about3}
              alt="about 3"
            ></Image>
            <Image
              className='sm:w-[219.3px] w-[139.05px] ml-[164px] xsm:w-[192.1px] xsm:ml-[226px] xsm:-mt-[384px] -mt-[278px] md:w-[295.8px] z-20 relative xl:-mt-[519.8px] xl:w-[260px] sm:ml-[258px] md:ml-[348px] md:-mt-[591.5px] lg:-mt-[377.5px] lg:ml-[222px] lg:w-[188.7px] sm:-mt-[439px] xl:ml-[305px]'
              src={about2}
              alt="about 2"></Image>
            <Image
              className='sm:w-[258px] w-[163.6px] xsm:w-[226px] ml-[164px] sm:ml-[258px] xsm:ml-[228px] md:w-[348px] xl:w-[306px] md:ml-[346px] lg:w-[222px] lg:ml-[221px] xl:ml-[305px]'
              src={about4}
              alt="about 4"></Image>
            <Image className='sm:w-[258px] w-[163px] xsm:w-[226px] -mt-[326px] ml-[164px] xsm:ml-[228px] xsm:-mt-[453px] xl:-mt-[612px] xl:ml-[305px] sm:-mt-[518px] lg:-mt-[445px] xl:w-[306px] lg:ml-[222px] md:w-[348px] lg:w-[222px] sm:ml-[258px] md:-mt-[696px] md:ml-[347px]'
              src={star}
              alt="star"></Image>
            <Image
              className='sm:w-[258px] w-[163px] xsm:w-[226px] sm:mt-[3px] md:w-[348px] lg:w-[222px] xl:w-[306px]'
              src={star}
              alt="star"></Image>
          </div>
          <div className="flex lg:-mt-[20px] xl:mt-[120px] lg:ml-[50px] text-[#444444] lg:mb-[50px] flex-col">
            <h1 className='sm:text-[31.6px] text-[27.628px] lg:text-[37.6px] xl:text-[40px] sm:w-[516px] lg:w-[444px] md:w-[650px] xl:w-[612px] mt-7 font-bold mb-4'>Kickstart your career in the most renowned Ed-Tech in Indonesia!</h1>
            <p className='text-[16px] font-cairo sm:w-[516px] lg:w-[444px] md:w-[650px] xl:w-[612px] mb-4'>In Torche Education, We could help you develop your skill and learning based on experience. There are some benefits that you could get by working or taking internship in Torche:</p>
            <div className='text-[16px] font-cairo flex flex-col'>
              <div className='flex flex-row mb-5'>
                <i className='text-blue-500 text-[24px] mr-5'><Icon.Check /></i>
                <p className='text-[16px]'>Learning based on experience</p>
              </div>
              <div className='flex flex-row mb-5'>
                <i className='text-blue-500 text-[24px] mr-5'><Icon.Check /></i>
                <p className='text-[16px]'>Friendly environment workplace</p>
              </div>
              <div className='flex flex-row'>
                <i className='text-blue-500 text-[24px] mr-5'><Icon.Check /></i>
                <p className='text-[16px]'>Flexible working hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bagian End Gambar dan Kickstart */}

      {/* Bagian start swiper */}
      <div data-aos="fade-up">
        <div className='mb-5 flex justify-center'>
          <h1 className='text-[#444444] font-bold lg:text-[37.36px] sm:text-[31.6px]'>Our Intern Say</h1>
        </div>

        <div className="sm:px-10 px-5 lg:px-20 mb-[50px] ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {
              testi.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col md:min-h-[250px] sm:min-h-[300px] mx-[50px] my-[50px] items-start">
                      <div className="flex flex-col font-Rajdhani">
                        <p className="text-blue-500 text-[48px] justify-start flex -mt-5 mb-3">{data.icon}</p>
                        <p className="text-[16px] font-Cairo text-left w-full text-[#444444]">{data.testi}</p>
                      </div>
                      <div className="flex flex-row mt-[20px]">
                        <div className="max-w-full h-[50px] w-[50px] rounded-xl mt-5">{data.photo}</div>
                        <div className="ml-5">
                          <h4 className="text-[20px] mt-[13px] text-left text-[#444444] font-bold">{data.nama}</h4>
                          <h4 className="text-[14px] mt-[10px] font-cairo text-left text-[#444444]">{data.jabatan}</h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CareersPage