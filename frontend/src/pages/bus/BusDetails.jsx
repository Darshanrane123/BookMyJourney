import React from 'react';
import { useParams } from 'react-router-dom';

const BusDetails = () => {
    const { id } = useParams();  // Access the bus ID from the route

    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[8ch]'>
            <h1 className="text-3xl font-bold">Bus Details for Bus {id}</h1>
            <p className="mt-4">Here, you can display more information about Bus {id}.</p>
            {/* Add additional details and content here */}
        </div>
    );
};

export default BusDetails;
