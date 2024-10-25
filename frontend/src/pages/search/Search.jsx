// import React from 'react'


// const Search = () => {
//     return (
//         <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
//             {/* This is saerch container section */}
//             <div className="w-full bg-neutral-100 rounded-md darkbg-neutral-900/40 p-8">
//                 <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end">
//                     <div className="">
//                         <label htmlFor="from" className="block mb-2 font-black text-neutral-800 ">
//                             From
//                         </label>
//                         {/* <select className="w-full appearance-none text-neutral-100 bg-neutral-800 px-3 h-12 border border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-700 placeholder:text-neutral-500"> */}
//                         <select name="from" id="from" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
//                         {/* <select name="from" id="from" className="w-full appearance-none dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:bg-neutral-900/60 px-3 h-12 border dark:border-neutral-900 rounded-md focus:outline-none  dark:bg-neutral-900"> */}
//                             <option value="">Select Location</option>
//                             <option value="location1">Ratnagiri</option>
//                             <option value="location2">Panvel</option>
//                             <option value="location3">Thane</option>
//                         </select>
//                     </div>

//                     <div className="">
//                         <label htmlFor="to" className="block mb-2 font-black text-neutral-800 ">
//                             To
//                         </label>
//                         {/* <select className="w-full appearance-none text-neutral-100 bg-neutral-800 px-3 h-12 border border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-700 placeholder:text-neutral-500"> */}
//                         <select name="to" id="to" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
//                         {/* <select name="from" id="from" className="w-full appearance-none dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:bg-neutral-900/60 px-3 h-12 border dark:border-neutral-900 rounded-md focus:outline-none  dark:bg-neutral-900"> */}
//                             <option value="">Select Location</option>
//                             <option value="location4">Ratnagiri</option>
//                             <option value="location5">Panvel</option>
//                             <option value="location6">Thane</option>
//                         </select>
//                     </div>

//                     <div className="">
//                         <label htmlFor="date" className="block mb-2 font-black text-neutral-800 ">
//                             Choose Date
//                         </label>
//                         <input type="date" id='date' name='date' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
//                     </div>

//                     <div className="">
//                         <label htmlFor="time" className="block mb-2 font-black text-neutral-800 ">
//                             Choose Time
//                         </label>
//                         <input type="time" id='time' name='time' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
//                     </div>

//                     <div className="">
//                         <label htmlFor="seat" className="block mb-2 font-black text-neutral-800 ">
//                             Choose Seat
//                         </label>
//                         <input type="number" id='seat' placeholder='Enter Seat' name='seat' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
//                     </div>

//                     <div className="">
//                         <button className="w-full px-4 h-12 bg-red-600 text-neutral-50 text-base font-normal rounded-md">
//                             Check Availability
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Search
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// import React, { useState } from 'react';

// const Search = () => {
//     // State for handling from and to selection
//     const [fromLocation, setFromLocation] = useState('');
//     const [toLocation, setToLocation] = useState('');

//     // List of available locations
//     const locations = [
//         { value: "location1", label: "Ratnagiri" },
//         { value: "location2", label: "Panvel" },
//         { value: "location3", label: "Thane" },
//     ];

//     return (
//         <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
//             {/* This is search container section */}
//             <div className="w-full bg-neutral-100 rounded-md darkbg-neutral-900/40 p-8">
//                 <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end">
                    
//                     {/* From dropdown */}
//                     <div>
//                         <label htmlFor="from" className="block mb-2 font-black text-neutral-800 ">
//                             From
//                         </label>
//                         <select
//                             name="from"
//                             id="from"
//                             value={fromLocation}
//                             onChange={(e) => setFromLocation(e.target.value)} // Update fromLocation state
//                             className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
//                         >
//                             <option value="">Select Location</option>
//                             {locations.map((loc) => (
//                                 <option key={loc.value} value={loc.value}>
//                                     {loc.label}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* To dropdown */}
//                     <div>
//                         <label htmlFor="to" className="block mb-2 font-black text-neutral-800 ">
//                             To
//                         </label>
//                         <select
//                             name="to"
//                             id="to"
//                             value={toLocation}
//                             onChange={(e) => setToLocation(e.target.value)} // Update toLocation state
//                             className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
//                         >
//                             <option value="">Select Location</option>
//                             {locations
//                                 .filter((loc) => loc.value !== fromLocation) // Exclude selected "from" location
//                                 .map((loc) => (
//                                     <option key={loc.value} value={loc.value}>
//                                         {loc.label}
//                                     </option>
//                                 ))}
//                         </select>
//                     </div>

//                     {/* Date selection */}
//                     <div>
//                         <label htmlFor="date" className="block mb-2 font-black text-neutral-800 ">
//                             Choose Date
//                         </label>
//                         <input
//                             type="date"
//                             id="date"
//                             name="date"
//                             className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
//                         />
//                     </div>

//                     {/* Time selection */}
//                     <div>
//                         <label htmlFor="time" className="block mb-2 font-black text-neutral-800 ">
//                             Choose Time
//                         </label>
//                         <input
//                             type="time"
//                             id="time"
//                             name="time"
//                             className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
//                         />
//                     </div>

//                     {/* Seat input */}
//                     <div>
//                         <label htmlFor="seat" className="block mb-2 font-black text-neutral-800 ">
//                             Choose Seat
//                         </label>
//                         <input
//                             type="number"
//                             id="seat"
//                             placeholder="Enter Seat"
//                             name="seat"
//                             className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
//                         />
//                     </div>

//                     {/* Check Availability button */}
//                     <div>
//                         <button className="w-full px-4 h-12 bg-red-600 text-neutral-50 text-base font-normal rounded-md">
//                             Check Availability
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Search;

// ........................................................................................................................................................

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [seat, setSeat] = useState('');

    const navigate = useNavigate();

    // List of available locations
    const locations = [
        { value: "location1", label: "Ratnagiri" },
        { value: "location2", label: "Panvel" },
        { value: "location3", label: "Thane" },
    ];

    const handleCheckAvailability = () => {
        // You can send this data to the next page via query params or state.
        const searchData = {
            fromLocation,
            toLocation,
            date,
            time,
            seat,
        };

        // Navigate to the results page and pass the state
        navigate('/results', { state: searchData });
    };

    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
            <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8">
                <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end">
                    <div>
                        <label htmlFor="from" className="block mb-2 font-black text-neutral-800 ">
                            From
                        </label>
                        <select
                            name="from"
                            id="from"
                            value={fromLocation}
                            onChange={(e) => setFromLocation(e.target.value)}
                            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                        >
                            <option value="">Select Location</option>
                            {locations.map((loc) => (
                                <option key={loc.value} value={loc.value}>
                                    {loc.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="to" className="block mb-2 font-black text-neutral-800 ">
                            To
                        </label>
                        <select
                            name="to"
                            id="to"
                            value={toLocation}
                            onChange={(e) => setToLocation(e.target.value)}
                            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                        >
                            <option value="">Select Location</option>
                            {locations
                                .filter((loc) => loc.value !== fromLocation)
                                .map((loc) => (
                                    <option key={loc.value} value={loc.value}>
                                        {loc.label}
                                    </option>
                                ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="date" className="block mb-2 font-black text-neutral-800 ">
                            Choose Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="time" className="block mb-2 font-black text-neutral-800 ">
                            Choose Time
                        </label>
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="seat" className="block mb-2 font-black text-neutral-800 ">
                            Choose Seat
                        </label>
                        <input
                            type="number"
                            id="seat"
                            placeholder="Enter Seat"
                            value={seat}
                            onChange={(e) => setSeat(e.target.value)}
                            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                        />
                    </div>

                    <div>
                        <button
                            className="w-full px-4 h-12 bg-red-600 text-neutral-50 text-base font-normal rounded-md"
                            onClick={handleCheckAvailability}
                        >
                            Check Availability
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
