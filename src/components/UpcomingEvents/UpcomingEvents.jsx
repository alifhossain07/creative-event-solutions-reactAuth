import React from 'react';

const events = [
  {
    id: 1,
    title: "Concert in the Park",
    date: "2024-10-15",
    location: "Central Park, NYC",
    image: "https://i.ibb.co.com/C62Jcr0/slider1.jpg" // Replace with real image URL
  },
  {
    id: 2,
    title: "Theater Performance",
    date: "2024-11-02",
    location: "Broadway Theater, NYC",
    image: "https://i.ibb.co.com/8PWG54J/slider2.jpg" // Replace with real image URL
  },
  {
    id: 3,
    title: "Film Screening",
    date: "2024-12-05",
    location: "Film Club, NYC",
    image: "https://i.ibb.co.com/L9SsYFm/slider3.jpg" // Replace with real image URL
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-cyan-100 to-blue-300 via-sky-200 rounded-3xl">
      <div className="container  mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="relative bg-sky-100 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.location}</p>
                <a href="#" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg text-center transition-colors duration-300 hover:bg-blue-600">More Details</a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800 opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
