import Image from "next/image";
import internLogo from "../../assets/Careers/internship.webp"
import { useEffect, useMemo, useState } from "react";
import { job } from '../../data/careers'
import { FaCircle } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { useRouter } from "next/router";
import { IoLocationSharp } from 'react-icons/io5'
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const JobPage = () => {
    const router = useRouter()
    const titleJob = router.query.jobs
    const id = router.query.jobsList
    const [titleJobs, setTitleJobs] = useState('')
    const [link, setLink] = useState('')
    useEffect(() => {
        AOS.init();
    }, [])

    const filteredJob = useMemo(() => {
        return job.filter(desc => {
            return desc.title == id
        })
    }, [job]);

    useEffect(() => {
        job.map(data => {
            {
                data.jobList?.filter(sub => {
                    if (sub.link === titleJob) {
                        setTitleJobs(sub.subJob)
                        setLink(sub.kitaLulus)
                    }
                })
            }
        })
    }, [])

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col w-full">
                {
                    job.filter((split) => {
                        if (split.title === id) {
                            return split
                        }
                    }).map(data => {
                        return (
                            <>
                                <div className="my-5 flex flex-row">
                                    <div className="flex flex-row" data-aos="fade-up">
                                        <Image src={internLogo} alt="Logo Internship" className="w-[80px] rounded-lg"></Image>
                                        <div className="flex flex-col md:flex-row justify-around md:items-center w-full">
                                            <div className="flex flex-col ml-8 md:ml-10">
                                                <h1 className="font-rajdhani font-semibold text-[20px] xsm:text-[25px]">{titleJobs}</h1>
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
                                </div>
                                <div data-aos="fade-up">
                                    <div className="mt-5 font-rajdhani">
                                        <h4 className="text-[30px] font-semibold">Job Description</h4>
                                    </div>
                                    <div className="mt-2 ml-5">
                                        {
                                            filteredJob.map((desc) => {
                                                return desc.jobList?.filter((data) => {
                                                    return data.link == titleJob
                                                }).map((sub) => {
                                                    return sub.desc.map((desc) => {
                                                        return (
                                                            <div className="mt-2 flex flex-row">
                                                                <h4><FaCircle className="text-[8px] mt-2 mr-2" /></h4>
                                                                <span className="flex flex-row font-cairo">{desc.text}</span>
                                                            </div>
                                                        )
                                                    })
                                                })
                                            })
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-up">
                                    <div className="mt-5 font-rajdhani">
                                        <h4 className="text-[30px] font-semibold">Qualification</h4>
                                    </div>
                                    <div className="mt-2 ml-5">
                                        {
                                            filteredJob.map((desc) => {
                                                return desc.jobList?.filter((data) => {
                                                    return data.link == titleJob
                                                }).map((sub) => {
                                                    return sub.qual.map((qual) => {
                                                        return (
                                                            <div className="mt-2 flex flex-row">
                                                                <h4><FaCircle className="text-[8px] mt-2 mr-2" /> </h4>
                                                                <span className="flex flex-row font-cairo">{qual.text}</span>
                                                            </div>
                                                        )
                                                    })
                                                })
                                            })
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-up">
                                    <div className="my-10 font-rajdhani lg:mx-0 mx-auto lg:text-start text-center">
                                        <h4 className="text-[30px] mb-8 font-semibold">Apply For The Job</h4>
                                        <Link className="p-2 bg-blue-500 hover:bg-blue-600 text-white font-cairo rounded-lg" href={`https://kerja.kitalulus.com/id/lowongan/detail/${link}-byyz?utm_source=klep&utm_medium=klep-web&utm_campaign=klep-copy`}>Apply Now!</Link>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="w-full lg:mx-0 mx-auto mt-5 lg:mt-0 lg:w-[600px]">
                <div className="bg-[#f8f9fa] font-cairo p-[50px]" data-aos="fade-up">
                    <h1 className="text-[24px] font-rajdhani mb-5">Job Summary</h1>
                    <span className="flex flex-row font-cairo"><FaCircle className="text-[8px] my-5 text-blue-500  mt-2 mr-2" />  Published On: 27th January 2023</span>
                    <span className="flex flex-row font-cairo"><FaCircle className="text-[8px] my-5 text-blue-500 mt-2 mr-2" />  Job Nature: Internship</span>
                    <span className="flex flex-row font-cairo"><FaCircle className="text-[8px] my-5 text-blue-500 mt-2 mr-2" />  Benefits: Trainings, Certificates*</span>
                    <span className="flex flex-row font-cairo"><FaCircle className="text-[8px] my-5 text-blue-500 mt-2 mr-2" />  Location: Remote (Online), Indonesia</span>
                    <span className="flex flex-row font-cairo"><FaCircle className="text-[8px] my-5 text-blue-500 mt-2 mr-2" />  Deadline Submission: 31th January 2023</span>
                </div>

                <div className="bg-[#f8f9fa] font-cairo mt-10 p-[50px]" data-aos="fade-up">
                    <h1 className="text-[24px] font-rajdhani mb-5">Internship di Torche Education</h1>
                    <span><i>Internship with TORCHE</i> adalah program magang jarak jauh (remote internship) untuk mahasiswa dan lulusan baru.
                        Internship ini berjalan selama <b>4 bulan</b> dan bersifat unpaid, namun dapat mendapatkan insentif. Jam kerja yang diharapkan untuk program magang adalah <b>14 jam/minggu</b> atau <b>2 jam/hari</b> (termasuk akhir pekan),
                        dan dapat diatur secara bebas oleh masing-masing peserta magang.</span>
                </div>

                <div className="bg-[#f8f9fa] font-cairo mt-10 p-[50px]" data-aos="fade-up">
                    <h1 className="text-[24px] text-red-500 font-rajdhani mb-5">PERHATIAN!</h1>
                    <span>Torche Education tidak pernah memungut biaya apapun selama proses rekrutmen, dan semua proses rekrutmen dilakukan secara daring (online)</span>
                </div>
            </div>
        </div>
    );
}

export default JobPage;