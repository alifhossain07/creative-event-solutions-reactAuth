import React from 'react';

const About = () => {
  return (
    <div className="w-11/12 mx-auto my-12 p-8   rounded-lg  ">
      {/* Introduction Section */}
      <section className="mb-24 space-y-10  gap-20 mx-auto">
      
      <h1 className="lg:text-4xl uppercase text-3xl font-bold text-gray-600 mb-4">Creative Event Solutions</h1>
      
      
      <p className="text-2xl text-justify  text-gray-600 ">
          At CreativeEvent Solutions, we believe that every event should be an unforgettable experience. From thrilling concerts and dynamic theater performances to intimate comedy shows and grand sports events, we specialize in crafting events that leave lasting memories.
        </p>
      
        
      
      </section>

      {/* Our Approach Section */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-gray-600 mb-10 uppercase ">Our Approach</h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="w-2/4">
            <img
              src="https://i.ibb.co.com/Hz6x1dg/eventplan.jpg"
              alt="Event Planning"
              className="  object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-600 text-justify leading-relaxed">
              Our team of dedicated professionals works closely with you to understand your vision and turn it into reality. We handle everything from conceptualization and logistics to execution and post-event follow-up, ensuring a seamless and stress-free experience for you and your guests.
            </p>
            <p className="text-lg text-justify  text-gray-600 leading-relaxed mt-4">
              With a keen eye for detail and a passion for creativity, we bring together the best in the industry to deliver events that captivate and inspire. Our approach is collaborative, transparent, and focused on creating a unique experience that reflects your brand and message.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-600 uppercase mb-16 ">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className=" p-6 space-y-3 bg-blue-100 rounded-lg shadow-md">
            <img
              src="https://i.ibb.co.com/YQgh05D/person1.jpg"
              alt="Team Member 1"
              className="w-28 h-28 rounded-full mb-4 object-cover shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
            <p className="text-blue-600">Event Planner</p>
            <p className="text-gray-600 mt-2">
              Jane has over 10 years of experience in event management and specializes in large-scale festivals and concerts.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className=" p-6 space-y-3 bg-blue-100 rounded-lg shadow-md">
            <img
              src="https://i.ibb.co.com/YQgh05D/person1.jpg"
              alt="Team Member 1"
              className="w-28 h-28 rounded-full mb-4 object-cover shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
            <p className="text-blue-600">Event Planner</p>
            <p className="text-gray-600 mt-2">
              Jane has over 10 years of experience in event management and specializes in large-scale festivals and concerts.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className=" p-6 space-y-3 bg-blue-100 rounded-lg shadow-md">
            <img
              src="https://i.ibb.co.com/YQgh05D/person1.jpg"
              alt="Team Member 1"
              className="w-28 h-28 rounded-full mb-4 object-cover shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
            <p className="text-blue-600">Event Planner</p>
            <p className="text-gray-600 mt-2">
              Jane has over 10 years of experience in event management and specializes in large-scale festivals and concerts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
