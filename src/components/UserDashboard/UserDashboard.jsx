import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const UserDashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Welcome, {user?.displayName || 'User'}!
                </h2>
                <div className="flex items-center justify-center mb-6">
                    <img
                        className="w-32 h-32 rounded-full border-4 border-gray-200"
                        src={user?.photoURL || 'https://via.placeholder.com/150'}
                        alt="User Avatar"
                    />
                </div>
                <div className="text-center">
                    <p className="text-xl font-semibold text-gray-700">
                        Name: <span className="font-normal">{user?.displayName || 'N/A'}</span>
                    </p>
                    <p className="text-xl font-semibold text-gray-700 mt-4">
                        Email: <span className="font-normal">{user?.email || 'N/A'}</span>
                    </p>
                    <div className="mt-8">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            Edit Profile
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-bold text-blue-700 mb-2">Account Settings</h3>
                        <p className="text-gray-600">
                            Manage your account settings and set email preferences.
                        </p>
                    </div>
                    <div className="p-6 bg-purple-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-bold text-purple-700 mb-2">Order History</h3>
                        <p className="text-gray-600">
                            View your past orders and check their status.
                        </p>
                    </div>
                    <div className="p-6 bg-pink-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-bold text-pink-700 mb-2">Saved Items</h3>
                        <p className="text-gray-600">
                            Access your saved items and add new favorites.
                        </p>
                    </div>
                    <div className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-bold text-green-700 mb-2">Support</h3>
                        <p className="text-gray-600">
                            Contact our support team for help and assistance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
