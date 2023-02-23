import Link from "next/link";
import Image from "next/image";
import internLogo from "../../assets/Careers/internship.webp"
import { useEffect, useState } from "react";
import { job } from '../../data/careers'
import { BiTimeFive } from 'react-icons/bi'
import { useRouter } from "next/router";
import { IoLocationSharp } from 'react-icons/io5'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Opening = () => {
    const router = useRouter()
    const [vacancy, setVacancy] = useState(0)
    const [jobs, setJobs] = useState('')
    const id = router.query.jobsList
    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        job.filter(data => {
            if (data.title === id) {
                setVacancy(data.vacancy)
                setJobs(data.title)
            }
        })
    }, [])
    return (
        <div className='text-[#444444]'>
            <h1 className='font-bold text-center mt-[60px] font-cairo text-[56px]' data-aos="fade-up">TORCHE Education's Careers</h1>
            <div className="flex justify-center">
                {
                    job.filter((split) => {
                        if (split.title === id) {
                            return split
                        }
                    }).map(data => {
                        return (
                            <div className="my-5" data-aos="fade-up">
                                {
                                    data.jobList?.map(sub => {
                                        return (
                                            <div className="shadow-[0_0_45px_rgba(0,0,0,0.1)] hover:shadow-[0_0_45px_rgba(0,0,0,0.2)] flex-col justify-between md:flex-row flex rounded-lg bg-white w-[300px]  xsm:w-[500px] md:w-[750px] lg:w-[1000px] py-8 px-5 my-10 transition-all hover:-translate-y-2">
                                                <div className="flex flex-row">
                                                    <Image src={internLogo} alt="Logo Internship" className="w-[80px] rounded-lg"></Image>
                                                    <div className="flex flex-col md:flex-row justify-around md:items-center w-full">
                                                        <div className="flex flex-col ml-8 md:ml-10">
                                                            <h1 className="font-rajdhani font-semibold text-[20px] xsm:text-[25px]">{sub.subJob}</h1>
                                                            <div className="flex-row flex">
                                                                <span className="flex-col text-[14px] xsm:text-[16px] xsm:flex-row flex">
                                                                    <h3 className="flex flex-row font-cairo font-medium">
                                                                        <IoLocationSharp className="text-blue-500 mt-1" /> &nbsp;&nbsp; {data.work} &nbsp;&nbsp;&nbsp;
                                                                    </h3>
                                                                    <h3 className="flex flex-row font-cairo mt-2 xsm:mt-0 font-medium">
                                                                        <BiTimeFive className="text-blue-500 mt-1" /> &nbsp;{data.type}
                                                                    </h3>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:p-1 items-center mt-5 flex">
                                                    <Link className="bg-[#0D6EFD] font-cairo hover:bg-[#185bc0] p-2 rounded-lg text-[14px] xsm:text-[16px] text-white" href={`/careers/${data.title}/${sub.link}`}>Learn More</Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Opening;