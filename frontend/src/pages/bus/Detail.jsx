import React from 'react'
import Bus from "../../assets/bus9.png";
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom'; // Make sure to import Link
import Destination from '../../components/destination/Destination';
import DepartTime from '../../components/departtime/DepartTime';
import Seat from '../../components/seat/Seat';

const Details = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[10ch]'>
            <div className="w-full grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1 space-y-8">
                    <img src={Bus} alt="bus img" className="w-full aspect-[3/2] rounded-md object-contain" />
                    <div className="space-y-4">
                        <h1 className="text-4x1 font-bold text-neutral-900 dark:text-neutral-50 ">
                            Luxury Bus
                            <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                                (Bus Number plate)
                            </span>
                        </h1>
                        <div className="flex item-center gap-x-2">
                            <div className="flex item-center gap-x-2 text-sm text-yellow-500 dark:text-yellow-600">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                                (4.5)
                            </p>
                        </div>
                        <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis, vero labore suscipit placeat nemo repellat deleniti quod maxime nobis doloremque delectus fuga nisi optio, autem ut. Quis, minus consectetur!
                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, expedita nostrum! Voluptatum consequuntur possimus, accusantium nisi dolor totam et, ipsa fugiat ullam deleniti sequi repellat odio commodi, aperiam eum eaque! */}
                            </p>
                    </div>
                </div>

                <div className="col-span-1 space-y-10">
                    <div className="space-y-6">
                        {/* Destination card */}
                        <Destination/>

                        {/* departure card */}
                        <DepartTime/>

                    </div>
                    {/* seat selection */}
                    <Seat/>

                    {/* checkout button */}
                    <div className="flex ">
                        <Link to={'/bus/6/checkout'} className='w-fit bg-red-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-red-700 ease-in-out duration-300' > 
                            Proceed To Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details