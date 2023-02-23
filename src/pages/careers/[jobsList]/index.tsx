import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { job } from '../../../data/careers'
import OpeningEmpty from "@/components/Careers/OpeningEmpty";
import Opening from "@/components/Careers/Opening";

const jobsList = () => {
    const router = useRouter()
    const [vacancy, setVacancy] = useState(0)
    const [jobs, setJobs] = useState('')
    const id = router.query.jobsList
    useEffect(() => {
        job.filter(data => {
            if (data.title === id) {
                setVacancy(data.vacancy)
                setJobs(data.title)
            }
        })
    }, [])
    return (
        <>
            <div className="lg:w-full">
                <div className=' py-[20px] bg-[#f5faff] pl-[12px] sm:pl-[40px] md:px-7 lg:px-12 xl:px-20 flex-col md:flex-row md:justify-between flex'>
                    <h1 className='text-[24px] text-[#7e7e7e] font-thin font-radhjani'> Careers</h1>
                    <h3 className='font-cairo pt-[10px] font-medium text-[#444444] text-[14px]'><span className="text-[#007BFF]">Careers</span>&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;Careers with Torche</h3>
                </div>
            </div>
            <div>
                {
                    vacancy > 0 && id === jobs ? <Opening/> : <OpeningEmpty/>
                }
            </div>
        </>
    );
}

export default jobsList;