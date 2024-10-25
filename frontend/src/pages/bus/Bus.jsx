// // import React from 'react';
// // import Bus1 from "../../assets/bus1.png"
// // import Bus2 from "../../assets/bus.png"
// // import Bus3 from "../../assets/bus5.png"
// // import Bus4 from "../../assets/bus4.png"
// // import Bus5 from "../../assets/bus7.png"
// // import Bus6 from "../../assets/bus6.png"


// // import { Link } from 'react-router-dom'; // Make sure to import Link

// // const Bus = () => {
// //     return (
// //         <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[8ch]'>
// //             <div className="w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/70 rounded-md px-6 py-5 items-center justify-between">
// //                 <div className="flex items-center gap-x-2 col-span-2">
// //                     <input type="number" id='seat' placeholder='Search buses...' name='seat' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Bus;

// import React from 'react';
// import Bus1 from "../../assets/bus1.png";
// import Bus2 from "../../assets/bus.png";
// import Bus3 from "../../assets/bus5.png";
// import Bus4 from "../../assets/bus4.png";
// import Bus5 from "../../assets/bus7.png";
// import Bus6 from "../../assets/bus6.png";

// import { Link } from 'react-router-dom';

// const Bus = () => {
//     const buses = [
//         { id: 1, img: Bus1, name: "Tourist Bus" },
//         { id: 2, img: Bus2, name: "Tourist Bus" },
//         { id: 3, img: Bus3, name: "Government Bus" },
//         { id: 4, img: Bus4, name: "Government Bus" },
//         { id: 5, img: Bus5, name: "Private Bus" },
//         { id: 6, img: Bus6, name: "Private Bus" },
//     ];

//     return (
//         <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[8ch]'>
//             <div className="w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/70 rounded-md px-6 py-5 items-center justify-between">
//                 <div className="flex items-center gap-x-2 col-span-2">
//                     <input type="number" id='seat' placeholder='Search buses...' name='seat' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
//                 </div>
//             </div>

//             {/* Display bus images */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//                 {buses.map(bus => (
//                     <div key={bus.id} className="bg-white dark:bg-neutral-800 shadow-md rounded-md overflow-hidden">
//                         <img src={bus.img} alt={bus.name} className="w-full h-48 object-cover" />
//                         <div className="p-4">
//                             <h3 className="text-xl font-semibold">{bus.name}</h3>
//                             <Link to={`/bus/${bus.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
//                                 View Details
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Bus;

import React from 'react';
import Bus1 from "../../assets/bus1.png";
import Bus2 from "../../assets/bus.png";
import Bus3 from "../../assets/bus5.png";
import Bus4 from "../../assets/bus4.png";
import Bus5 from "../../assets/bus7.png";
import Bus6 from "../../assets/bus6.png";

import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Bus = () => {
    const buses = [
        { id: 1, img: Bus1, name: "Tourist Bus", passengers: 40 },
        { id: 2, img: Bus2, name: "Tourist Bus", passengers: 40 },
        { id: 3, img: Bus3, name: "Government Bus", passengers: 40 },
        { id: 4, img: Bus4, name: "Government Bus", passengers: 40 },
        { id: 5, img: Bus5, name: "Private Bus", passengers: 40 },
        { id: 6, img: Bus6, name: "Private Bus", passengers: 40 },
    ];

    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[8ch]'>
            <div className="w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/70 rounded-md px-6 py-5 items-center justify-between">
                <div className="flex items-center gap-x-2 col-span-2">
                    <input type="text" id='seat' placeholder='Search buses...' name='seat' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    <button className="bg-red-600 h-11 px-4 rounded-md text-base text-neutral-50 font-normal ">
                        <FaSearch/>
                    </button>
                </div>
                <div className="col-span-2"></div>

                <div className="col-span-2">
                <select name="to" id="to" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        {/* <select name="from" id="from" className="w-full appearance-none dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:bg-neutral-900/60 px-3 h-12 border dark:border-neutral-900 rounded-md focus:outline-none  dark:bg-neutral-900"> */}
                            <option value="">Select Bus Type</option>
                            <option value="touristbus">Tourist Bus</option>
                            <option value="luxurybus">Luxury Bus</option>
                            <option value="privatebus">Private Bus</option>
                            <option value="deluxbus">Delux Bus</option>
                        </select>
                </div>
            </div>

            

            {/* Display bus images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {buses.map(bus => (
                    <div key={bus.id} className="bg-white dark:bg-neutral-800 shadow-md rounded-md overflow-hidden">
                        <img src={bus.img} alt={bus.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">
                                {bus.name} - {bus.passengers} Passengers
                            </h3>
                            <Link to={`/bus/${bus.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bus;

