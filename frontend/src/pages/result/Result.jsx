import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
    const location = useLocation();
    const searchData = location.state;

    // Hardcoded bus data
    const busData = [
        {
            location: 'location1', // Ratnagiri
            buses: [
                { name: 'Bus 101', number: 'MH-01-101', time: '10:00 AM' },
                { name: 'Bus 102', number: 'MH-01-102', time: '12:00 PM' },
            ],
        },
        {
            location: 'location2', // Panvel
            buses: [
                { name: 'Bus 201', number: 'MH-02-201', time: '9:00 AM' },
                { name: 'Bus 202', number: 'MH-02-202', time: '11:00 AM' },
            ],
        },
        {
            location: 'location3', // Thane
            buses: [
                { name: 'Bus 301', number: 'MH-03-301', time: '8:00 AM' },
                { name: 'Bus 302', number: 'MH-03-302', time: '10:30 AM' },
            ],
        },
    ];

    // Find buses for the selected "from" location
    const filteredBuses = busData.find((bus) => bus.location === searchData.fromLocation)?.buses || [];

    return (
        <div className="w-full p-8">
            <h2 className="text-2xl font-bold mb-6">Bus Availability for {searchData.fromLocation}</h2>
            {filteredBuses.length > 0 ? (
                <table className="table-auto w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-4">Bus Name</th>
                            <th className="border p-4">Bus Number</th>
                            <th className="border p-4">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBuses.map((bus, index) => (
                            <tr key={index}>
                                <td className="border p-4">{bus.name}</td>
                                <td className="border p-4">{bus.number}</td>
                                <td className="border p-4">{bus.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No buses available for the selected location.</p>
            )}
        </div>
    );
};

export default Results;
