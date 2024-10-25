// import React from 'react'
// import { GiSteeringWheel } from 'react-icons/gi'
// import { MdOutlineChair } from 'react-icons/md'


// const Seat = ({ seatNumber,isSlected ,onClick }) => {
//     return (
//         <MdOutlineChair className={`text-3x1 -rotate-90 cursor-pointer ${isSelected ? 'text-red-600':'text-neutral-600'}`} onClick={onClick}/>
//     )
// }


// const BusSeatLayout = () => {
//     const totalSeats = 41;
//     const [selectedSeats, setSelectedSeats] =useState([]);

//     const handleSeatClick = (seatNumber) => {
//         if(selectedSeats.includes(seatNumber)){
//             setSelectedSeats(selectedSeats.filter((Seat)=>Seat !== seatNumber));
//         }else{
//             if(selectedSeats.length < 10){
//                 setSelectedSeats([...selectedSeats, seatNumber ])
//             }else{
//                 alert("you can Select a maximum of 10 seats only");
//             }
//         }
//     }


// const renderSeats =() => {
//     let seats =[];
//     for(let i=1;i <= totalSeats;i++){
//         seats.push(
//             <Seat 
//             key={i}
//             seatNumber={i}
//             isSelected={selectedSeats.includes(i)}
//             onClick={() => handleSeatClick(i)} />
//         );
//     }
// }
//     return BusSeatLayout;


// return(
//     <div className="space-y-5">
//         <h2 className="text-x1 text-neutral-800 dark:text-neutral-100 font-medium">
//             Choose a Seat
//         </h2>

//         {/* seat layout */}
//         <div className="w-full flex justify-between">
//             <div className="flex-1 w-full flex">

//                 {/* Instructions and info */}
//                 <div className="space-y-3 w-28">
//                     <div className="w-full flex flex-1 gap-x-5 items-stretch ">
//                         <div className="w-10 h-full border-r-2 border-dashed text-neutral-300 dark:text-neutral-800">
//                             <GiSteeringWheel className='text-3xl mt-6 text-red-600 -rotate-90 '/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


//         {/* selected seats */}
//         {/* {
            

//         } */}

//         {/* calculate price */}
//         {/* {
            

//         } */}


//     </div>
// );
// }

//this is good enough -------------------------------------------------------------------------------------------------------------

// export default BusSeatLayout

// import React, { useState } from 'react';
// import { GiSteeringWheel } from 'react-icons/gi';
// import { MdOutlineChair } from 'react-icons/md';

// const Seat = ({ seatNumber, isSelected, onClick }) => {
//     return (
//         <MdOutlineChair
//             className={`text-3xl -rotate-90 cursor-pointer ${isSelected ? 'text-red-600' : 'text-neutral-600'}`}
//             onClick={onClick}
//         />
//     );
// };

// const BusSeatLayout = () => {
//     const totalSeats = 41;
//     const [selectedSeats, setSelectedSeats] = useState([]);

//     const handleSeatClick = (seatNumber) => {
//         if (selectedSeats.includes(seatNumber)) {
//             setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
//         } else {
//             if (selectedSeats.length < 10) {
//                 setSelectedSeats([...selectedSeats, seatNumber]);
//             } else {
//                 alert("You can select a maximum of 10 seats only");
//             }
//         }
//     };

//     const renderSeats = () => {
//         let seats = [];
//         for (let i = 1; i <= totalSeats; i++) {
//             seats.push(
//                 <Seat
//                     key={i}
//                     seatNumber={i}
//                     isSelected={selectedSeats.includes(i)}
//                     onClick={() => handleSeatClick(i)}
//                 />
//             );
//         }
//         return seats;
//     };

//     return (
//         <div className="space-y-5">
//             <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">Choose a Seat</h2>

//             {/* Seat layout */}
//             <div className="w-full flex justify-between">
//                 <div className="flex-1 w-full flex">
//                     {/* Instructions and info */}
//                     <div className="space-y-3 w-28">
//                         <div className="w-full flex flex-1 gap-x-5 items-stretch">
//                             <div className="w-10 h-full border-r-2 border-dashed text-neutral-300 dark:text-neutral-800">
//                                 <GiSteeringWheel className="text-3xl mt-6 text-red-600 -rotate-90" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Seat rendering */}
//                     <div className="grid grid-cols-10 gap-4">
//                         {renderSeats()}
//                     </div>
//                 </div>
//             </div>

//             {/* Selected seats */}
//             <div>
//                 <h3 className="text-lg font-medium">Selected Seats:</h3>
//                 <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</p>
//             </div>

//             {/* Calculate price */}
//             <div>
//                 <h3 className="text-lg font-medium">Total Price:</h3>
//                 <p>₹{selectedSeats.length * 750} (Each seat costs ₹750)</p>
//             </div>
//         </div>
//     );
// };

// export default BusSeatLayout;

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { GiSteeringWheel } from 'react-icons/gi';
// import { MdOutlineChair } from 'react-icons/md';

// const Seat = ({ seatNumber, isSelected, onClick }) => {
//     return (
//         <MdOutlineChair
//             className={text-4xl cursor-pointer ${isSelected ? 'text-red-600' : 'text-neutral-500 hover:text-neutral-700'}}
//             onClick={onClick}
//         />
//     );
// };

// const BusSeatLayout = () => {
//     const totalSeats = 41; // 40 seats + driver seat
//     const [selectedSeats, setSelectedSeats] = useState([]);

//     const handleSeatClick = (seatNumber) => {
//         if (selectedSeats.includes(seatNumber)) {
//             setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
//         } else {
//             if (selectedSeats.length < 10) {
//                 setSelectedSeats([...selectedSeats, seatNumber]);
//             } else {
//                 alert("You can select a maximum of 10 seats only.");
//             }
//         }
//     };

//     const renderSeats = () => {
//         let seats = [];
//         for (let i = 1; i <= totalSeats; i++) {
//             seats.push(
//                 <Seat
//                     key={i}
//                     seatNumber={i}
//                     isSelected={selectedSeats.includes(i)}
//                     onClick={() => handleSeatClick(i)}
//                 />
//             );
//         }
//         return seats;
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-10">
//             <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8">
//                 <h2 className="text-3xl font-bold text-center text-gray-800">Bus Seat Selection</h2>

//                 {/* Seat Layout */}
//                 <div className="flex justify-center items-start space-x-8">
//                     {/* Driver's Seat */}
//                     <div className="w-16 flex flex-col items-center">
//                         <GiSteeringWheel className="text-6xl text-red-600 mb-4" />
//                         <div className="text-gray-500">Driver</div>
//                     </div>

//                     {/* Seat Rendering */}
//                     <div className="grid grid-cols-5 grid-rows-4 gap-6">
//                         {renderSeats()}
//                     </div>
//                 </div>

//                 {/* Selected Seats */}
//                 <div className="text-center space-y-4">
//                     <h3 className="text-xl font-semibold text-gray-700">Selected Seats</h3>
//                     <p className="text-lg text-gray-600">{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</p>
//                 </div>

//                 {/* Price Calculation */}
//                 <div className="text-center space-y-4">
//                     <h3 className="text-xl font-semibold text-gray-700">Total Price</h3>
//                     <p className="text-lg text-gray-600">${selectedSeats.length * 10} (Each seat costs $10)</p>
//                 </div>

//                 {/* Confirm Button */}
//                 <div className="flex justify-center">
//                     <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
//                         Confirm Booking
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default BusSeatLayout;

// import React, { useState } from 'react';
// import { GiSteeringWheel } from 'react-icons/gi';
// import { MdOutlineChair } from 'react-icons/md';

// const Seat = ({ seatNumber, isSelected, onClick, isBooked }) => {
//     return (
//         <MdOutlineChair
//             className={`text-4xl cursor-pointer transition ${
//                 isBooked ? 'text-red-500' : isSelected ? 'text-purple-600' : 'text-gray-400 hover:text-purple-300'
//             }`}
//             onClick={!isBooked ? onClick : null} // Prevent clicking booked seats
//         />
//     );
// };

// const BusSeatLayout = () => {
//     const totalSeats = 40; // Total seats (without driver)
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [bookedSeats] = useState([2, 5, 9, 18]); // Pre-booked seats for illustration

//     const handleSeatClick = (seatNumber) => {
//         if (selectedSeats.includes(seatNumber)) {
//             setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
//         } else {
//             if (selectedSeats.length < 10) {
//                 setSelectedSeats([...selectedSeats, seatNumber]);
//             } else {
//                 alert('You can select a maximum of 10 seats only.');
//             }
//         }
//     };

//     const renderSeats = () => {
//         let seats = [];
//         for (let i = 1; i <= totalSeats; i++) {
//             seats.push(
//                 <Seat
//                     key={i}
//                     seatNumber={i}
//                     isSelected={selectedSeats.includes(i)}
//                     isBooked={bookedSeats.includes(i)}
//                     onClick={() => handleSeatClick(i)}
//                 />
//             );
//         }
//         return seats;
//     };

//     return (
//         <div className="min-h-screen bg-black text-white p-10">
//             <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg p-8">
//                 {/* Header */}
//                 <header className="flex justify-between items-center mb-8">
//                     <div className="text-4xl font-bold">
//                         <img src="/bus_logo.png" alt="Logo" className="inline w-10 h-10 mr-2" />
//                         Luxury Bus
//                     </div>
//                     <div className="flex items-center">
//                         <div className="text-gray-400 mr-6">
//                             <span>Need Help?</span> <br />
//                             +91 1234567890
//                         </div>
//                         <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
//                             <span role="img" aria-label="moon">
//                                 🌙
//                             </span>
//                         </button>
//                     </div>
//                 </header>

//                 {/* Main Content */}
//                 <div className="grid grid-cols-12 gap-8">
//                     {/* Bus Image */}
//                     <div className="col-span-6 flex justify-center">
//                         <img src="/luxury_bus.png" alt="Bus" className="w-full h-auto" />
//                     </div>

//                     {/* Seat Selection */}
//                     <div className="col-span-6">
//                         <h2 className="text-2xl font-bold mb-4">Choose a Seat</h2>
//                         <div className="grid grid-cols-5 gap-4 mb-6">{renderSeats()}</div>

//                         {/* Legend */}
//                         <div className="flex items-center justify-between text-sm mb-4">
//                             <div className="flex items-center space-x-2">
//                                 <MdOutlineChair className="text-gray-400" />
//                                 <span>Available</span>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <MdOutlineChair className="text-red-500" />
//                                 <span>Booked</span>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <MdOutlineChair className="text-purple-600" />
//                                 <span>Selected</span>
//                             </div>
//                             <div className="text-gray-400">Rs. 750</div>
//                         </div>

//                         {/* Selected Seats & Price */}
//                         <div className="bg-gray-900 p-4 rounded-lg">
//                             <h3 className="text-lg font-semibold mb-2">Selected Seats:</h3>
//                             <p className="mb-4">
//                                 {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}
//                             </p>
//                             <h3 className="text-lg font-semibold">Total Fair Prices:</h3>
//                             <p className="text-lg mb-4">Rs. {selectedSeats.length * 750}</p>

//                             {/* Checkout Button */}
//                             <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg w-full transition">
//                                 Proceed to Checkout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BusSeatLayout;

// import React, { useState } from 'react';
// import { GiSteeringWheel } from 'react-icons/gi';
// import { MdOutlineChair } from 'react-icons/md';

// const Seat = ({ seatNumber, isSelected, onClick, isBooked }) => {
//     return (
//         <MdOutlineChair
//             className={`text-4xl cursor-pointer transition ${
//                 isBooked ? 'text-red-500' : isSelected ? 'text-purple-600' : 'text-gray-400 hover:text-purple-300'
//             }`}
//             onClick={!isBooked ? onClick : null} // Prevent clicking booked seats
//         />
//     );
// };

// const BusSeatLayout = () => {
//     const totalSeats = 40; // Total seats (without driver)
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [bookedSeats] = useState([2, 5, 9, 18]); // Pre-booked seats for illustration

//     const handleSeatClick = (seatNumber) => {
//         if (selectedSeats.includes(seatNumber)) {
//             setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
//         } else {
//             if (selectedSeats.length < 10) {
//                 setSelectedSeats([...selectedSeats, seatNumber]);
//             } else {
//                 alert('You can select a maximum of 10 seats only.');
//             }
//         }
//     };

//     const renderSeats = () => {
//         let seats = [];
//         for (let i = 1; i <= totalSeats; i++) {
//             seats.push(
//                 <Seat
//                     key={i}
//                     seatNumber={i}
//                     isSelected={selectedSeats.includes(i)}
//                     isBooked={bookedSeats.includes(i)}
//                     onClick={() => handleSeatClick(i)}
//                 />
//             );
//         }
//         return seats;
//     };

//     return (
//         <div className="min-h-screen bg-black text-white p-10">
//             <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg p-8 shadow-lg">
//                 {/* Header */}
//                 {/* <header className="flex justify-between items-center mb-8">
//                     {/* <div className="text-4xl font-bold">
//                         <img src="/bus_logo.png" alt="Logo" className="inline w-10 h-10 mr-2" />
//                         GBUS Luxury Services
//                     </div> */}
//                     {/* <div className="flex items-center">
//                         <div className="text-gray-400 mr-6">
//                             <span>Need Help?</span> <br />
//                             +91 1234567890
//                         </div>
//                         <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
//                             <span role="img" aria-label="moon">
//                                 🌙
//                             </span>
//                         </button>
//                     </div>
//                 </header> */} 

//                 {/* Main Content */}
//                 <div className="grid grid-cols-12 gap-8">
//                     {/* Bus Image */}
//                     {/* <div className="col-span-6 flex justify-center">
//                         <img src="/luxury_bus.png" alt="Bus" className="w-full h-auto" />
//                     </div> */}

//                     {/* Seat Selection */}
//                     <div className="col-span-6">
//                         <h2 className="text-2xl font-bold mb-4">Choose a Seat</h2>
//                         <div className="grid grid-cols-5 gap-4 mb-6">{renderSeats()}</div>

//                         {/* Legend */}
//                         <div className="flex items-center justify-between text-sm mb-4">
//                             <div className="flex items-center space-x-2">
//                                 <MdOutlineChair className="text-gray-400" />
//                                 <span>Available</span>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <MdOutlineChair className="text-red-500" />
//                                 <span>Booked</span>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <MdOutlineChair className="text-purple-600" />
//                                 <span>Selected</span>
//                             </div>
//                             <div className="text-gray-400">Rs. 750</div>
//                         </div>

//                         {/* Selected Seats & Price */}
//                         <div className="bg-gray-800 p-4 rounded-lg">
//                             <h3 className="text-lg font-semibold mb-2">Selected Seats:</h3>
//                             <div className="flex space-x-2 mb-4">
//                                 {selectedSeats.length > 0
//                                     ? selectedSeats.map((seat, idx) => (
//                                           <div
//                                               key={idx}
//                                               className="px-4 py-2 bg-purple-600 text-white rounded-lg"
//                                           >
//                                               {seat}
//                                           </div>
//                                       ))
//                                     : 'No seats selected'}
//                             </div>

//                             <h3 className="text-lg font-semibold">Total Fare Prices:</h3>
//                             <p className="text-lg mb-4">Rs. {selectedSeats.length * 750}</p>

//                             {/* Checkout Button */}
//                             <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg w-full transition">
//                                 Proceed to Checkout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BusSeatLayout;


// import React, { useState } from 'react';
// import { GiSteeringWheel } from 'react-icons/gi';
// import { MdOutlineChair } from 'react-icons/md';

// const Seat = ({ seatNumber, isSelected, onClick, isBooked }) => {
//     return (
//         <MdOutlineChair
//             className={`text-4xl cursor-pointer transition ${
//                 isBooked ? 'text-red-500' : isSelected ? 'text-purple-600' : 'text-gray-400 hover:text-purple-300'
//             }`}
//             onClick={!isBooked ? onClick : null} // Prevent clicking booked seats
//         />
//     );
// };

// const BusSeatLayout = () => {
//     const totalSeats = 40; // Total seats (without driver)
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [bookedSeats] = useState([2, 5, 9, 18]); // Pre-booked seats for illustration

//     const handleSeatClick = (seatNumber) => {
//         if (selectedSeats.includes(seatNumber)) {
//             setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
//         } else {
//             if (selectedSeats.length < 10) {
//                 setSelectedSeats([...selectedSeats, seatNumber]);
//             } else {
//                 alert('You can select a maximum of 10 seats only.');
//             }
//         }
//     };

//     const renderSeats = () => {
//         let seats = [];
//         for (let i = 1; i <= totalSeats; i++) {
//             seats.push(
//                 <Seat
//                     key={i}
//                     seatNumber={i}
//                     isSelected={selectedSeats.includes(i)}
//                     isBooked={bookedSeats.includes(i)}
//                     onClick={() => handleSeatClick(i)}
//                 />
//             );
//         }
//         return seats;
//     };

//     return (
//         <div className="min-h-screen bg-black text-white p-10">
//             <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg p-8 shadow-lg">
//                 {/* Header */}
//                 {/* <header className="flex justify-between items-center mb-8">
//                     {/* <div className="text-4xl font-bold">
//                         <img src="/bus_logo.png" alt="Logo" className="inline w-10 h-10 mr-2" />
//                         GBUS Luxury Services
//                     </div> */}
//                     {/* <div className="flex items-center">
//                         <div className="text-gray-400 mr-6">
//                             <span>Need Help?</span> <br />
//                             +91 1234567890
//                         </div>
//                         <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
//                             <span role="img" aria-label="moon">
//                                 🌙
//                             </span>
//                         </button>
//                     </div>
//                 </header> */}

//                 {/* Main Content */}
//                 <div className="grid grid-cols-12 gap-8">
//                     {/* Seat Selection */}
//                     <div className="col-span-6">
//                         <h2 className="text-2xl font-bold mb-4">Choose a Seat</h2>
//                         {/* Updated seat layout to be horizontal */}
//                         <div className="flex flex-wrap gap-4 mb-6">
//                             {renderSeats()}
//                         </div>

//                         {/* Legend */}
//                         <div className="flex items-center justify-between text-sm mb-4">
//                             <div className="flex items-center space-x-2">
//                                 <MdOutlineChair className="text-gray-400" />
//                                 <span>Available</span>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <MdOutlineChair className="text-red-500" />
//                                 <span>Booked</span>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <MdOutlineChair className="text-purple-600" />
//                                 <span>Selected</span>
//                             </div>
//                             <div className="text-gray-400">Rs. 750</div>
//                         </div>

//                         {/* Selected Seats & Price */}
//                         <div className="bg-gray-800 p-4 rounded-lg">
//                             <h3 className="text-lg font-semibold mb-2">Selected Seats:</h3>
//                             <div className="flex space-x-2 mb-4">
//                                 {selectedSeats.length > 0
//                                     ? selectedSeats.map((seat, idx) => (
//                                           <div
//                                               key={idx}
//                                               className="px-4 py-2 bg-purple-600 text-white rounded-lg"
//                                           >
//                                               {seat}
//                                           </div>
//                                       ))
//                                     : 'No seats selected'}
//                             </div>

//                             <h3 className="text-lg font-semibold">Total Fare Prices:</h3>
//                             <p className="text-lg mb-4">Rs. {selectedSeats.length * 750}</p>

//                             {/* Checkout Button */}
//                             <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg w-full transition">
//                                 Proceed to Checkout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BusSeatLayout;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdOutlineChair } from 'react-icons/md';

const Seat = ({ seatNumber, isSelected, isBooked, onClick }) => {
    // Determine the color based on seat status
    let seatColor = 'text-neutral-600 dark:text-neutral-200'; // Default to available (white)

    if (isBooked) {
        seatColor = 'text-red-600'; // Booked (red)
    } else if (isSelected) {
        seatColor = 'text-violet-600'; // Selected (violet)
    }

    return (
        <MdOutlineChair
            className={`text-3xl -rotate-90 cursor-pointer ${seatColor}`}
            onClick={isBooked ? null : onClick} // Prevent clicking on booked seats
        />
    );
};

const BusSeatLayout = () => {
    const totalSeats = 41;
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookedSeats] = useState([2, 5, 9, 18]); // Example booked seats

    const handleSeatClick = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            if (selectedSeats.length < 10) {
                setSelectedSeats([...selectedSeats, seatNumber]);
            } else {
                alert("You can select a maximum of 10 seats only");
            }
        }
    };

    const renderSeats = () => {
        let seats = [];
        for (let i = 1; i <= totalSeats; i++) {
            seats.push(
                <Seat
                    key={i}
                    seatNumber={i}
                    isSelected={selectedSeats.includes(i)}
                    isBooked={bookedSeats.includes(i)} // Check if the seat is booked
                    onClick={() => handleSeatClick(i)}
                />
            );
        }
        return seats;
    };

    return (
        <div className="space-y-5">
            <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">Choose a Seat</h2>

            {/* Seat layout */}
            <div className="w-full flex justify-between">
                <div className="flex-1 w-full flex">
                    {/* Instructions and info */}
                    <div className="space-y-3 w-28">
                        <div className="w-full flex flex-1 gap-x-5 items-stretch">
                            <div className="w-10 h-full border-r-2 border-dashed text-neutral-300 dark:text-neutral-800">
                                <GiSteeringWheel className="text-3xl mt-6 text-red-600 -rotate-90" />
                            </div>
                        </div>
                    </div>

                    {/* Seat rendering */}
                    <div className="grid grid-cols-10 gap-4">
                        {renderSeats()}
                    </div>
                </div>
            </div>

            {/* Selected seats */}
            <div>
                <h3 className="text-lg font-medium">Selected Seats:</h3>
                <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</p>
            </div>

            {/* Calculate price */}
            <div>
                <h3 className="text-lg font-medium">Total Price:</h3>
                <p>₹{selectedSeats.length * 750} (Each seat costs ₹750)</p>
            </div>
        </div>
    );
};

export default BusSeatLayout;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++