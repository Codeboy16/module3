import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/login",
        data
      );
      toast.success("Login successful!");
      console.log(response.data);
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error(error);
    }
    console.log(data)
  };

  useEffect(() => {
    document.title = "Login - Government of Sikkim";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-0"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 sm:p-9 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex items-center justify-center flex-col gap-4 mb-3">
          <img className="size-24 sm:size-46" src="./images/logo.png" alt="" />
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-xl sm:text-2xl font-bold">
              Government of Sikkim
            </h2>
            <p className="text-zinc-400 font-semibold text-sm sm:text-[1.1rem]">
              Secure Login Portal
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 relative">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg pr-10"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <FaEnvelope className="absolute right-3 top-3 text-gray-500" />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-lg pr-10"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                    message:
                      "Must include letters, numbers, and special characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
