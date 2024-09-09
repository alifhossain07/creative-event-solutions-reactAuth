import React, { useState } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams();
    const events = useLoaderData();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const event = events.find(e => e.id === parseInt(id));

    if (!event) {
        return <div className="text-center text-red-500">Event not found</div>;
    }

    const handleBookNow = () => {
        // Retrieve existing bookings from local storage
        const existingBookings = JSON.parse(localStorage.getItem('bookedEvents')) || [];
    
        // Check if the event is already booked
        const isAlreadyBooked = existingBookings.some(e => e.id === event.id);
    
        if (isAlreadyBooked) {
            setMessage('This event is already booked.');
            return;
        }
    
        // Add the new event to the list
        existingBookings.push(event);
        // Save the updated list back to local storage
        localStorage.setItem('bookedEvents', JSON.stringify(existingBookings));
    
        // Store the booked event to localStorage for confirmation
        localStorage.setItem('bookedEvent', JSON.stringify(event));
    
        // Navigate to the booking confirmation page
        navigate('/booking-confirmation');
    };
    
    return (
        <div className="container mt-10 mx-auto p-4">
            <h1 className="lg:text-4xl text-2xl font-bold text-center mb-8">{event.title}</h1>
            <img src={event.img} alt={event.title} className="w-9/12 mx-auto rounded-3xl lg:h-64 object-cover mb-4" />
            <p className="text-xl lg:text-center w-9/12 mx-auto mt-10 mb-4">{event.service_details}</p>
            <h2 className="text-3xl text-center mt-10  font-semibold mb-8">Our Plan</h2>
            <pre className=" mx-auto w-9/12 p-4 mb-4 overflow-x-auto text-sm md:text-base lg:text-lg">{event.our_plan}</pre>
            <h2 className="text-3xl text-center font-semibold mb-2">Pricing</h2>
            <p className="text-xl text-center  mb-9">{event.pricing}</p>
            <div className='flex w-full justify-center'>
            <button className="btn px-14 text-xl bg-blue-500 text-white hover:bg-blue-700" onClick={handleBookNow}>Book Now</button>
            </div>
            
            {message && <p className="text-red-500 mt-4">{message}</p>}
        </div>
    );
};

export default EventDetails;
