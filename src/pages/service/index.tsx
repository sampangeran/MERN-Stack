// images
import Image, { StaticImageData } from "next/image";
import Illustration from "@/assets/service/kata_mereka/illustration.png";
import TorcheGradient from "@/assets/service/torche_gradient.png";
import image_grid from "@/assets/about/image_grid.png";

// components
import TextHeroWrapper from "@/components/wrapper/TextHeroWrapper";
import ServiceCard from "@/modules/service/components/ServiceCard";
import { faqs, testimonies } from "@/modules/service/utils/dummy";
import KeunggulanCard from "@/modules/service/components/KeunggulanCard";

// carousel
import SwiperClass, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef, useCallback, useState, useEffect, Key } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { InferGetServerSidePropsType } from "next";
import { ServiceDTO } from "@/modules/service/models/Service";
import { Benefit } from "@/modules/service/models/Benefit";

export async function getServerSideProps(){
    const services = await fetch("https://be-torche.herokuapp.com/api/services/findAll")
    .then((res) => res.json())
    .then((result) => {
        return result;
    }).catch((err) => {
        console.error(err);
    });

    const benefits = await fetch("https://be-torche.herokuapp.com/api/benefits/findAll")
    .then((res) => res.json())
    .then((result) => {
        return result;
    }).catch((err) => {
        console.error(err);
    });

    // https://be-torche.herokuapp.com/api/benefits/findAll

    return {
        props: {
            services,
            benefits
        }
    }
}



const Service = ({ services, benefits }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const swiperRef = useRef() as any;
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        console.log(services.data);
        console.log(benefits.data);
    }, [])

    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    const [itemDropdown, setItemDropdown] = useState(0);

    const handleMultiDropdown = (idx: number) => {
        if (idx === itemDropdown) {
            setItemDropdown(-1);
        } else {
            setItemDropdown(idx);
        }
    };

    return (
        <div>
            <TextHeroWrapper title="Layanan Kami" description="Toche Education menyediakan platform pembelajaran bagi para insinyur proses untuk mendukung siswa dan profesional dalam perjalanan pembelajaran dan proyek mereka" />
            <Image src={image_grid} alt="Engineering Industrial Illustration" />

            <section className="mx-auto bg-[#F5F7FF] p-10 flex items-stretch justify-center flex-wrap">
                {
                    services.data.map((item: ServiceDTO, index: Key) => {
                        return (
                            <ServiceCard
                                title={item!.nameService}
                                description={item.description}
                                key={index}
                                image={item.icon}
                            />
                        )
                    })
                }
            </section>
            <section className="p-5">
                <h2 className="text-3xl mx-auto w-fit my-10">keunggulan yang kami miliki</h2>
                <div className="mx-auto flex items-stretch justify-center flex-wrap">
                    {
                        benefits.data.map((data: Benefit, index: Key) => {
                            return (
                                <KeunggulanCard
                                    title={data.nameBenefit}
                                    description={data.description}
                                    image={data.image}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section>
                <div className="mx-auto sm:w-[400px] w-[80%] my-10">
                    <Image src={Illustration} alt="illustration" />
                </div>
                <div className="p-5 bg-[#F5F8FF] md:w-[700px] mx-auto w-[90%] rounded-2xl my-20">
                    <h2 className="text-3xl mx-auto w-fit mb-10">Apa Kata Mereka Tentang TORCHE?</h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        onInit={(core: SwiperClass) => {
                            swiperRef.current = core.el
                        }}
                        onSlideChange={(core) => {
                            setActiveIndex(core.activeIndex)
                        }}
                    >
                        <>
                            {
                                testimonies.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index} className="min-h-[300px] !bg-white p-5 !relative">
                                            <div className="bg-white flex items-stretch md:flex-row flex-col">
                                                <div className="md:w-[35%] bg-cover bg-center min-h-[150px]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80')` }}>
                                                    {/* <Image src={Illustration} alt="Dhanira" /> */}
                                                </div>
                                                <div className="text-left ml-10 md:w-[55%] md:my-0 my-10">
                                                    <h5 className="font-semibold text-[#5885E9] text-base">Dhanira</h5>
                                                    <p className="font-semibold text-sm">{item.name}</p>
                                                    <p className="mt-3 text-sm md:mb-0">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </>
                        <div className="left-1/2 -translate-x-1/2 absolute bottom-1 z-20 flex items-center">
                            <button onClick={handlePrev} className="text-blue-600 border rounded-full p-2 border-blue-600 mr-3">
                                <BsChevronLeft />
                            </button>
                            <div className="flex items-center">
                                {
                                    testimonies.map((item, index) => {
                                        return (
                                            <button key={index} className={`${activeIndex === index ? 'bg-blue-400 scale-150' : 'bg-gray-400'} transition duration-200 w-[7px] h-[7px] rounded-full mx-1`} />
                                        )
                                    })
                                }
                            </div>
                            <button onClick={handleNext} className="text-blue-600 border rounded-full p-2 border-blue-600 ml-3">
                                <BsChevronRight />
                            </button>
                        </div>
                    </Swiper>
                </div>
            </section>
            <section className="p-5 lg:px-32 xl:px-20 py-20 text-white flex-1 !bg-cover !bg-center" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${TorcheGradient.src})` }}>
                <div className="sm:w-[700px] mx-auto text-left">
                    <h2 className="text-3xl mb-10">Frequently Asked Questions</h2>
                    {
                        faqs.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col gap-3 mt-6" >
                                    <div className="py-3 border-b border-[#D8D8D8]">
                                        <div className="flex justify-between cursor-pointer items-center" onClick={() => handleMultiDropdown(index)}>
                                            <h3 className="text-lg lg:text-xl font-cairo">{index + 1}. {item.question}</h3>
                                            {itemDropdown === index ? <ChevronUp color="#fff" /> : <ChevronDown color="#fff" />}
                                        </div>
                                        {itemDropdown === index && <p className="p-3 pr-5 text-sm lg:text-base">{item.answer}</p>}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section >
        </div >
    );
}

export default Service;
