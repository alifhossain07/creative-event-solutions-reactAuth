import React, { useState, useEffect } from 'react';

const BookedEvents = () => {
  const [bookedEvents, setBookedEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('bookedEvents')) || [];
    setBookedEvents(storedEvents);
  }, []);

  const handleRemoveEvent = (id) => {
    // Filter out the event with the given ID
    const updatedEvents = bookedEvents.filter(event => event.id !== id);
    // Update the local storage with the remaining events
    localStorage.setItem('bookedEvents', JSON.stringify(updatedEvents));
    // Update the state to reflect the changes
    setBookedEvents(updatedEvents);
  };

  return (
    <div className="mt-24">
      <h1 className="text-center font-bold text-4xl mb-10">Booked Events</h1>
      <div className="flex flex-col justify-center items-center w-6/6 mx-auto lg:grid lg:grid-cols-3 gap-10 lg:w-11/12">
        {bookedEvents.length > 0 ? (
          bookedEvents.map(event => (
            <div key={event.id} className="card w-80 lg:w-96 mx-auto bg-blue-100 shadow-xl">
              <figure>
                <img className='object-cover w-full h-52' src={event.img} alt={event.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title lg:h-14 text-xl font-bold">{event.title}</h2>
                <button
                  className="btn bg-sky-500 text-white hover:bg-blue-600 mt-4"
                  onClick={() => handleRemoveEvent(event.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl">No events booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default BookedEvents;
