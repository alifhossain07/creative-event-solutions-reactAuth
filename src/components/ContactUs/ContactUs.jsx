import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="w-11/12 mx-auto my-12 p-8 bg-gradient-to-r from-blue-200 to-blue-50 shadow-2xl rounded-lg">
      {/* Header Section */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Connect with us to start planning your next incredible event. Whether you have questions or need assistance, we're here to help!
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Phone Section */}
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-blue-500 p-4 rounded-full text-white mb-4">
            <FaPhoneAlt size={30} />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Call Us</h2>
          <p className="text-lg text-gray-600 mb-4">For quick support, reach us at:</p>
          <p className="text-xl font-bold text-gray-800">+1 (234) 567-890</p>
          <p className="text-xl font-bold text-gray-800">+1 (234) 567-891</p>
        </div>

        {/* Email Section */}
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-blue-500 p-4 rounded-full text-white mb-4">
            <FaEnvelope size={30} />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Email Us</h2>
          <p className="text-lg text-gray-600 mb-4">Send us an email for inquiries:</p>
          <div className='w-full flex flex-col items-center mx-auto'>
          <p className="text-xl font-bold text-gray-800 ">info@solutions.com</p>
          <p className="text-xl font-bold text-gray-800">support@solutions.com</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-blue-500 p-4 rounded-full text-white mb-4">
            <FaMapMarkerAlt size={30} />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Visit Us</h2>
          <p className="text-lg text-gray-600 mb-4">Our office is located at:</p>
          <p className="text-xl font-bold text-gray-800">123 Event Street, Suite 456</p>
          <p className="text-xl font-bold text-gray-800">Event City, Country</p>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Follow Us on Social Media</h2>
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with our latest events and promotions.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <FaFacebookF size={30} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <FaTwitter size={30} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <FaLinkedinIn size={30} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <FaInstagram size={30} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
