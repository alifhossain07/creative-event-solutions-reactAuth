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
        // Retrieve existing booked events from local storage
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
        // Navigate to the booking confirmation page
        navigate('/booking-confirmation');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <img src={event.img} alt={event.title} className="w-full h-64 object-cover mb-4" />
            <p className="text-lg mb-4">{event.service_details}</p>
            <h2 className="text-2xl font-semibold mb-2">Our Plan</h2>
            <pre className="bg-gray-100 p-4 mb-4">{event.our_plan}</pre>
            <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
            <p className="text-lg mb-4">{event.pricing}</p>
            <button className="btn bg-blue-500 text-white hover:bg-blue-700" onClick={handleBookNow}>Book Now</button>
            {message && <p className="text-red-500 mt-4">{message}</p>}
        </div>
    );
};

export default EventDetails;