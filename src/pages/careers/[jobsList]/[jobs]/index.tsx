import JobPage from "@/components/Careers/jobPage";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { job } from '../../../../data/careers'

const Jobs = () => {
    const router = useRouter()
    const titleJob = router.query.jobs
    const [titleJobs, setTitleJobs] = useState('')
    useEffect(() => {
        job.map(data => {
            {
                data.jobList?.filter(data => {
                    if (data.link === titleJob) {
                        setTitleJobs(data.subJob)
                    }
                })
            }
        })
    }, [])
    return (
        <>
            <div className="lg:w-full">
                <div className=' py-[20px] bg-[#f5faff] pl-[12px] sm:pl-[40px] md:px-7 lg:px-12 xl:px-20 flex-col md:flex-row md:justify-between flex'>
                    <h1 className='text-[24px] text-[#7e7e7e] font-thin font-radhjani'> Careers</h1>
                    <h3 className='font-cairo pt-[10px] font-medium text-[#444444] text-[14px]'><span className="text-[#007BFF]">Careers</span>&nbsp;&nbsp;&nbsp; / <span className="text-[#007BFF]">&nbsp;&nbsp;&nbsp;Careers with Torche</span> &nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;{titleJobs}</h3>
                </div>
            </div>
            <div className="mx-[80px] my-[30px]">
                <JobPage/>
            </div>
        </>
    );
}

export default Jobs;