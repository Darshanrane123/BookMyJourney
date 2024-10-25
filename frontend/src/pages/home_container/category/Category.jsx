import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import Bus1 from "../../../assets/bus1.png"
import Bus2 from "../../../assets/bus6.png"
import Bus3 from "../../../assets/bus9.png"


const Category = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
            {/* This is category section */}
            <div className="w-full items-center flex justify-between">
                <h1 className="text-2xl font-medium mb-6"> {/* Corrected text size */}
                    Category
                </h1>
                <Link to={"/bus"} className='text-red-600'>View All</Link>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <Link to={"/bus"} className="bg-slate-400 dark:bg-slate-600 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden">
                    <img src={Bus1} alt="Image of a bus" className="w-full aspect-video object-contain" /> {/* Improved alt text */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
                        <h2 className="text-2x1 font-bold text-center text-neutral-900 dark:text-neutral-50">
                            Private Bus
                        </h2>
                    </div>
                </Link>
                <Link to={"/bus"} className="bg-slate-400 dark:bg-slate-600 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden">
                    <img src={Bus2} alt="Image of a bus" className="w-full aspect-video object-contain" /> {/* Improved alt text */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
                        <h2 className="text-2x1 font-bold text-center text-neutral-900 dark:text-neutral-50">
                            Tourist Bus
                        </h2>
                    </div>
                </Link>
                <Link to={"/bus"} className="bg-slate-400 dark:bg-slate-600 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden">
                    <img src={Bus3} alt="Image of a bus" className="w-full aspect-video object-contain" /> {/* Improved alt text */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
                        <h2 className="text-2x1 font-bold text-center text-neutral-900 dark:text-neutral-50">
                            Government Bus
                        </h2>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Category;