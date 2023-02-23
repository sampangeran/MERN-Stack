import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Empty = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="flex items-center my-[94.5px] justify-center">
            <div className='text-center text-[#444444]'>
                <h1 className='font-bold font-cairo text-[56px]'>TORCHE Education's Careers</h1>
                <h3 className='font-medium mt-10 font-cairo'>No job is available for this division. Come back later!</h3>
            </div>
        </div>
    );
}

export default Empty;