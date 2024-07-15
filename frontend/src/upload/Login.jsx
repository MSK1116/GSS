import React, { useEffect } from "react";
import Logo from "../../public/IMG_DIR/Logo.jpeg";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import bcryptjs from "bcryptjs";

const Login = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const navigate = useNavigate();
  document.title = "Staff Login || GSS";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const envID = import.meta.env.VITE_ID;
  const envPassword = import.meta.env.VITE_PASSWORD;

  console.log(envID, envPassword);

  const onSubmit = async (data) => {
    if (envID == data.username) {
      if (envPassword == data.password) {
        localStorage.setItem("ID", envID);
        const toastID = toast.loading("Signing in...");
        const hashPwd = await bcryptjs.hash(envPassword, 10);
        toast.remove();
        console.log(hashPwd);
        localStorage.setItem("HASHPWD", hashPwd);
        toast.success("Login Successful", { ID: toastID });
        console.log("hi");
        navigate("/abc123");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error("Password wrong");
      }
    } else {
      toast.error("No user found");
    }
  };
  return (
    <>
      <Toaster />
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="  m-auto w-40 h-40">
            <img className="object-cover rounded-full" src={Logo}></img>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
              <div className="px-5 py-7">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
                <input {...register("username", { required: true })} type="text" className="border bg-gray-100 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                {errors.username && <span className="text-sm text-red-500 ">This field is required.</span>}

                <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                <input {...register("password", { required: true })} type="password" className="border bg-gray-100 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                {errors.password && <span className="text-sm text-red-500 ">This field is required.</span>}

                <button
                  type="submit"
                  className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                  <span className="inline-block mr-2">Login</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="py-5 ">
                <div className="grid place-content-center gap-1">
                  <div className="text-center  sm:text-left whitespace-nowrap">
                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                      <span className="  inline-block ml-1">Your activity will be monitored</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="py-5 ">
            <div className="grid place-content-center gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <Link to={"/"}>
                    <span className="inline-block ml-1">Back to website</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
