import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams();  // Get the event ID from the URL
    const events = useLoaderData();  // Get the data fetched by the loader
    const event = events.find(e => e.id === parseInt(id));  // Find the specific event by ID

    if (!event) {
        return <div className="text-center text-red-500">Event not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <img src={event.img} alt={event.title} className="w-full h-64 object-cover mb-4" />
            <p className="text-lg mb-4">{event.service_details}</p>
            <h2 className="text-2xl font-semibold mb-2">Our Plan</h2>
            <pre className="bg-gray-100 p-4 mb-4">{event.our_plan}</pre>
            <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
            <p className="text-lg mb-4">{event.pricing}</p>
            <button className="btn bg-blue-500 text-white hover:bg-blue-700">Book Now</button>
        </div>
    );
};

export default EventDetails;
