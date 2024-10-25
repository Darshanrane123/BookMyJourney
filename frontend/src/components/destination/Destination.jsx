// import React, { useState } from 'react'





// const Destination = () => {

//     const [from,setFrom] =useState("");

//     const [to,setTo] =useState("");

//     const handleFromChange = (e) => {
//         setFrom(e.target.value);
//     }

    
//     const handleToChange = (e) => {
//         setTo(e.target.value);
//     }

//     const isDestinationSelected = from && to;

//     return (
//         <div className='w-full  space-y-4 '>
//             {
//                 !isDestinationSelected
//                 ?
//                 (
//                     <div className="w-full grid grid-cols-2 gap-10">
//                         <div className="">
//                             <label htmlFor="from" className="block mb-2 font-black text-neutral-200 ">
//                                 From
//                             </label>
//                         {/* <select className="w-full appearance-none text-neutral-100 bg-neutral-800 px-3 h-12 border border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-700 placeholder:text-neutral-500"> */}
//                             <select name="from" value={from} onChange={handleFromChange} id='from' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-2 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
//                         {/* <select name="from" id="from" className="w-full appearance-none dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:bg-neutral-900/60 px-3 h-12 border dark:border-neutral-900 rounded-md focus:outline-none  dark:bg-neutral-900"> */}
//                                 <option value="">Select Location</option>
//                                 <option value="location1">Ratnagiri</option>
//                                 <option value="location2">Panvel</option>
//                                 <option value="location3">Thane</option>
//                             </select>
//                         </div>
//                         <div className="">
//                             <label htmlFor="to" className="block mb-2 font-black text-neutral-200 ">
//                                 To
//                             </label>
//                         {/* <select className="w-full appearance-none text-neutral-100 bg-neutral-800 px-3 h-12 border border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-700 placeholder:text-neutral-500"> */}
//                             <select name="to" value={to} onChange={handleToChange} id='to' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-2 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
//                         {/* <select name="from" id="from" className="w-full appearance-none dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:bg-neutral-900/60 px-3 h-12 border dark:border-neutral-900 rounded-md focus:outline-none  dark:bg-neutral-900"> */}
//                                 <option value="">Select Location</option>
//                                 <option value="location1">Ratnagiri</option>
//                                 <option value="location2">Panvel</option>
//                                 <option value="location3">Thane</option>
//                             </select>
//                         </div>
//                     </div>
                    
//                 )
//                 :
//                 (
//                     <div className="space-y-5   ">
//                         <h1 className="text-x1 text-neutral-800 dark:text-neutral-100 font-medium">
//                             Your Destination
//                         </h1>
//                         <div className="w-full flex items-center gap-x-3">
//                             <div className="w-fit text-base font-semibold">
//                                 From :- <span className="ml-1.5 font-medium">{from}</span>
//                             </div>
//                             <div className="flex-1">
//                                 <div className="w-full h-[1px] border border-dashed border-neutral-200 dark:border-neutral-800/80"></div>
//                             </div>
//                             <div className="w-fit text-base font-semibold">
//                                 To :- <span className="ml-1.5 font-medium">{to}</span>
//                             </div>
//                         </div>
//                     </div>
//                 )
               
//             }
            
//         </div>
//     )
// }

// export default Destination

import React, { useState } from 'react';

const Destination = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const handleFromChange = (e) => {
        setFrom(e.target.value);
        if (e.target.value === to) {
            setTo(""); // Reset "To" if it was the same as "From"
        }
    };

    const handleToChange = (e) => {
        setTo(e.target.value);
    };

    const locations = [
        { id: 'location1', name: 'Ratnagiri' },
        { id: 'location2', name: 'Panvel' },
        { id: 'location3', name: 'Thane' }
    ];

    const isDestinationSelected = from && to;

    return (
        <div className='w-full space-y-4'>
            {!isDestinationSelected ? (
                <div className="w-full grid grid-cols-2 gap-10">
                    <div>
                        <label htmlFor="from" className="block mb-2 font-black text-neutral-200">
                            From
                        </label>
                        <select
                            name="from"
                            value={from}
                            onChange={handleFromChange}
                            id='from'
                            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-2 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                        >
                            <option value="">Select Location</option>
                            {locations.map(location => (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="to" className="block mb-2 font-black text-neutral-200">
                            To
                        </label>
                        <select
                            name="to"
                            value={to}
                            onChange={handleToChange}
                            id='to'
                            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-2 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                            disabled={!from}
                        >
                            <option value="">Select Location</option>
                            {locations
                                .filter(location => location.id !== from) // Filter out the selected "From" option
                                .map(location => (
                                    <option key={location.id} value={location.id}>
                                        {location.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
            ) : (
                <div className="space-y-5">
                    <h1 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                        Your Destination
                    </h1>
                    <div className="w-full flex items-center gap-x-3">
                        <div className="w-fit text-base font-semibold">
                            From :- <span className="ml-1.5 font-medium">{locations.find(loc => loc.id === from)?.name}</span>
                        </div>
                        <div className="flex-1">
                            <div className="w-full h-[1px] border border-dashed border-neutral-200 dark:border-neutral-800/80"></div>
                        </div>
                        <div className="w-fit text-base font-semibold">
                            To :- <span className="ml-1.5 font-medium">{locations.find(loc => loc.id === to)?.name}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Destination;
