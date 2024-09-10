import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "This was the best event we’ve ever attended! The organization was flawless.",
    name: "John Doe",
    position: "Event Attendee",
    photo: "https://i.ibb.co.com/YQgh05D/person1.jpg"
  },
  {
    id: 2,
    quote: "Exceptional service from start to finish. Highly recommend!",
    name: "Jane Smith",
    position: "Event Organizer",
    photo: "https://i.ibb.co.com/YQgh05D/person1.jpg" 
  },
  {
    id: 3,
    quote: "A memorable experience with outstanding planning and execution.",
    name: "Alice Johnson",
    position: "Corporate Client",
    photo: "https://i.ibb.co.com/DDKXtpj/person2.png" 
  }
];

const Testimonial = () => {
  return (
    <section className="py-12 w-11/12 mx-auto  mb-20 rounded-3xl ">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-3xl text-3xl font-bold text-center mb-12 text-gray-800 uppercase">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative bg-gradient-to-r from-cyan-50 via-sky-100 to-blue-100 p-8 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-teal-100 to-green-100 opacity-30"></div>
              <div className="relative z-10 flex items-center mb-6">
                <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 rounded-full border-4 border-white shadow-lg" />
                <div className="ml-4">
                  <p className="text-xl font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-800 italic relative z-10">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
