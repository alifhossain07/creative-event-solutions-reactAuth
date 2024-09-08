import React from 'react';

const BookingConfirmation = () => {
    const storedEvent = localStorage.getItem('bookedEvent');
    const event = storedEvent ? JSON.parse(storedEvent) : null;

    if (!event) {
        return <div className="text-center text-red-500">No event data available</div>;
    }

    return (
        <div className="container mt-8 mx-auto p-4">
            <h1 className="lg:text-4xl text-2xl font-bold mb-4">Booking Confirmed</h1>
            <p className="text-lg mb-4">Thank you for booking the event!</p>
            <h2 className="text-2xl font-semibold mb-2">Event Details</h2>
            <img src={event.img} alt={event.title} className="w-full h-64 object-cover mb-4" />
            <p className="text-lg mb-4"><strong>Title:</strong> {event.title}</p>
            <p className="text-lg mb-4"><strong>Details:</strong> {event.service_details}</p>
            <p className="text-lg mb-4"><strong>Pricing:</strong> {event.pricing}</p>
        </div>
    );
};

export default BookingConfirmation;
