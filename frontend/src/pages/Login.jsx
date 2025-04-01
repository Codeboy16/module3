import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { motion } from 'framer-motion';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // try {
    //   const response = await axios.post('https://your-api-url.com/login', data);
    //   console.log(response.data);
    //   alert('Login Successful');
    // } catch (err) {
    //   alert('Invalid credentials. Please try again.');
    // }
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-4">
      <motion.div
        className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-gray-200"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-6">
          <img src="images/logo.png" alt="Govt. of Sikkim" className="w-28 h-28 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Government of Sikkim</h2>
          <p className="text-gray-500 text-sm">Secure Login Portal</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ${
                errors.email ? 'border-red-500' : 'focus:ring-green-500'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ${
                errors.password ? 'border-red-500' : 'focus:ring-green-500'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 shadow-md text-4xl"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-4">
          Forgot password?{' '}
          <a href="#" className="text-green-500 hover:underline">
            Reset here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
