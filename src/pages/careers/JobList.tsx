import React, { Component } from 'react';
import { job } from '../../data/careers'

class JobList extends Component {
    render() {
        return (
            <div>
                {
                    job.map((job, i) => {
                        if (job.title)
                        return (
                            <div key={i}>
                                <>
                                    {job.vacancy > 0 ? 
                                    <div>Test</div>
                                    :
                                        <div className='text-center font-cairo text-[#444444]'>
                                            <h1 className='font-bold text-[56px] my-10'>TORCHE Education's Careers</h1>
                                            <h3 className='font-semibold'>No job is available for this division. Come back later!</h3>
                                        </div>
                                    }
                                </>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default JobList;