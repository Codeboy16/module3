import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Alert from '@mui/material/Alert';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    if (errors.email || errors.password) {
      toast.error("Please fix the errors before submitting.");
      return;
    }
    console.log(data);
    try {
      const response = await axios.post("http://localhost:8080/login", data);
      console.log(response.data.message);
      if(response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        alert(response.data.message);
      }
    }catch(error) {
      toast.error("Invalid email or password. Please try again.");
      console.error("Login error:", error);
    }
  };
  useEffect(() => {
    document.title = "Login - Government of Sikkim";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gray-50 px-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200"
      >
        <div className="flex flex-col items-center gap-2 mb-2 text-center">
          <img className="w-24 sm:w-32 drop-shadow-lg" src="/images/logo.png" alt="Government of Sikkim" />
          <h3 className="text-2xl font-bold">Government of Sikkim<br/>I.T Department</h3>
          <p className="text-gray-500 font-medium text-sm">Secure Login Portal</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters" },
                maxLength: { value: 16, message: "Password cannot exceed 16 characters" },
              })}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash className="text-lg"/> : <FaEye className="text-lg"/>}
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-2xl hover:bg-blue-700 transition Rounded"
          >
            Login
          </motion.button>
          <p className="text-center text-gray-500 text-sm pt-3">
            Forget Password?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Reset here
            </a>  
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Login;