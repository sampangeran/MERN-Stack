import { useRouter } from "next/router";

const Finance = () => {
    const router = useRouter()
    console.log(router)
    return (
        <>
            <div className="lg:w-full">
                <div className=' py-[20px] bg-[#f5faff] pl-[12px] sm:pl-[40px] md:px-7 lg:px-12 xl:px-20   flex-col md:flex-row md:justify-between flex'>
                    <h1 className='text-[24px] text-[#7e7e7e] font-thin font-radhjani'> Careers</h1>
                    <h3 className='font-cairo pt-[10px] font-medium text-[#444444] text-[14px]'><span className="text-[#007BFF]">Careers</span>&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;Careers with Torche</h3>
                </div>
            </div>
            <div className="flex items-center my-[94.5px] justify-center">
                <div className='text-center text-[#444444]'>
                    <h1 className='font-bold font-cairo text-[56px]'>TORCHE Education's Careers</h1>
                    <h3 className='font-medium mt-10 font-cairo'>No job is available for this division. Come back later!</h3>
                </div>
            </div>
        </>
    );
}

export default Finance;