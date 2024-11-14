import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils/utils';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        collegeEmail: '',
        password: '',
    });
    const [userType, setUserType] = useState('student'); // New state for user type
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value); // Update user type based on selection
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { collegeEmail, password } = loginInfo;

        // Check if email and password are not empty
        if (!collegeEmail || !password) {
            handleError('Please fill all the fields');
            return;
        }

        // If both fields are filled, show success message
        handleSuccess('Login Successful');

        // Simulate successful login by navigating to the dashboard
        setTimeout(() => {
            navigate('/dashboard');
        }, 250);
    };

    return (
        <div className="container mx-auto py-16 text-outfit">
            <div className="max-w-md mx-auto p-8 border border-[#D4D4D4] rounded-lg shadow-lg bg-white">
                <h3 className="text-3xl font-bold text-center text-secondary mb-4">Login</h3>
                <p className="text-zinc-500 text-center mb-5">Please login  Teacher or Students</p>

                {/* User Type Selection */}
                <div className="flex justify-center mb-4">
                    <label className="mr-4">
                        <input
                            type="radio"
                            value="student"
                            checked={userType === 'student'}
                            onChange={handleUserTypeChange}
                        />
                        Student
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="teacher"
                            checked={userType === 'teacher'}
                            onChange={handleUserTypeChange}
                        />
                        Teacher
                    </label>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="collegeEmail" className="text-gray-600 mb-2">Email</label>
                        <input
                            type="text"
                            id="collegeEmail"
                            name="collegeEmail"
                            value={loginInfo.collegeEmail}
                            onChange={handleChange}
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password" className="text-gray-600 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loginInfo.password}
                            onChange={handleChange}
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600">
                            Login
                        </button>
                    </div>
                </form>
                <br />
                <p className="text-gray-700 text-center">
                    Don't have an account?{' '}
                    <Link to="/roleselection" className="text-blue-500 hover:underline">
                        Register Here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
