import React, { useState } from 'react'


const DepartTime = () => {
    const [departBus,setDepartBus] =useState("");



    const handleDepartBusChange = (e) => {
        setDepartBus(e.target.value);
    }


    return (
        <div className='w-full  space-y-4 '>
            {
                !departBus
                ?
                (
                    <div className="w-full grid grid-cols-2 gap-10">
                        <div className="">
                            <label htmlFor="departBus" className="block mb-2 font-black text-neutral-200 ">
                                Depart Bus
                            </label>
                        {/* <select className="w-full appearance-none text-neutral-100 bg-neutral-800 px-3 h-12 border border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-700 placeholder:text-neutral-500"> */}
                            <select name="departBus" value={departBus} onChange={handleDepartBusChange} id='departBus' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-2 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        {/* <select name="departBus" id="departBus" className="w-full appearance-none dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:bg-neutral-900/60 px-3 h-12 border dark:border-neutral-900 rounded-md focus:outline-none  dark:bg-neutral-900"> */}
                                <option value="">Select a Time</option>
                                <option value="04:00 AM">04:00 AM</option>
                                <option value="05:00 AM">05:00 AM</option>
                                <option value="06:00 AM">06:00 AM</option>
                            </select>
                        </div>
                    </div>
                    
                )
                :
                (
                    <div className="space-y-5">
                        <div className="w-full flex items-center gap-x-3">
                            <div className="w-fit text-base font-semibold">
                                Bus Depart At :- <span className="ml-1.5 font-medium">{departBus}</span>
                            </div>
                        </div>
                    </div>
                )
               
            }
            
        </div>
    )
}

export default DepartTime