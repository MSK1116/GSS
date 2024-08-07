import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Convert from "../component/Convert";
import ResultDisplay from "./ResultDisplay";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Dashboard = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  const time = `${formattedDate} ${formattedTime}`;

  const [jsondata, setJsonData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [pushFlag, setPushFlag] = useState(false);
  const onSubmit = async (data) => {
    const messageData = {
      title: data.title,
      body: data.body,
      publisher: data.publisher,
      time: time,
    };
    const toastId = toast.loading("Uploading...");
    setPushFlag(true);
    await axios
      .post("https://gss-wine.vercel.app/message/messagePush", messageData)
      .then((res) => {
        if (res.data) {
          toast.success("Notification was updated ", { id: toastId });
          console.log("Notification was updated");
          setPushFlag(false);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("ERROR: " + err.response.data.message, { id: toastId });
          setSignUpFlag(false);
        }
      });
  };
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mt-8 bg-slate-50 p-8">
        <h1 className="mt-7 text-2xl"> Welcome Back!</h1>

        <div className=" max-w-screen-2xl mt-5 p-8 bg-gray-50 gap-2 flex flex-col md:flex-row">
          <div className="md:w-1/2 rounded-md border p-2 ">
            <h1 className=" text-xl text-red-500 font-bold">Notification Handler</h1>
            <h1>
              <span>Date:</span> {new Date().getMonth() + 1} / {new Date().getDate()} / {new Date().getFullYear()}
            </h1>
            <div className="p-3">
              <form onSubmit={handleSubmit(onSubmit)} className=" w-full space-y-2 ">
                <div className="  gap-x-2 gap-y-2">
                  <label className="text-sm" htmlFor="title">
                    Title
                  </label>

                  <input
                    {...register("title", { required: true })}
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Holday on 1st august"
                    className=" w-full bg-white rounded  p-2 text-body-color text-base   border border-[f0f0f0]  outline-none focus-visible:shadow-none focus:border-primary"></input>
                  {errors.title && <span className="text-sm text-red-500 ">This field is required.</span>}
                </div>
                <div className="  gap-x-2 gap-y-2">
                  <label className="text-sm" htmlFor="body">
                    Body
                  </label>

                  <textarea
                    rows={8}
                    id="body"
                    {...register("body", { required: true })}
                    name="body"
                    type="text"
                    placeholder="Due to heavy rainfall we will be closed for a day."
                    className=" w-full bg-white rounded  p-2 text-body-color text-base   border border-[f0f0f0]  outline-none focus-visible:shadow-none focus:border-primary"></textarea>
                  {errors.body && <span className="text-sm text-red-500 ">This field is required.</span>}
                </div>
                <div className="  gap-x-2 gap-y-2">
                  <label className="text-sm" htmlFor="title">
                    Publisher
                  </label>

                  <input
                    {...register("publisher", { required: true })}
                    id="title"
                    type="text"
                    placeholder="Karishma Subedi"
                    className=" w-full bg-white rounded  p-2 text-body-color text-base   border border-[f0f0f0]  outline-none focus-visible:shadow-none focus:border-primary"></input>
                  {errors.publisher && <span className="text-sm text-red-500 ">This field is required.</span>}
                </div>
                <button className="btn w-24 text-white btn-success m-auto" type="submit" disabled={pushFlag}>
                  Push
                </button>
              </form>
            </div>
          </div>
          <div className="md:w-1/2 rounded-md border p-2">
            <h1 className=" text-xl text-red-500 font-bold">Result Handler</h1>
            <h1>
              <span>Date:</span> {new Date().getMonth() + 1} / {new Date().getDate()} / {new Date().getFullYear()}
            </h1>
            <div className="p-4 ">
              <form className=" space-y-3">
                <div className="w-full">
                  <label htmlFor="grade">Select Class</label>
                  <select readOnly value={"not selected"} id="grade" className=" bg-gray-100 w-full select select-accent">
                    <option disabled value={"note selected"}>
                      Select Class
                    </option>
                    <option value={"8"}>Class 8</option>
                    <option value={"9"}>Class 9</option>
                    <option value={"10"}>Class 10</option>
                  </select>
                </div>
                <div className="w-full ">
                  <label htmlFor="term">Select Term</label>
                  <select readOnly value={"not selected"} id="term" className=" bg-gray-100 w-full select select-accent">
                    <option disabled value={"note selected"}>
                      Select Class
                    </option>
                    <option value={"1st"}>First Terminal</option>
                    <option value={"2nd"}>Second Terminal</option>
                    <option value={"3rd"}>Third Terminal</option>
                    <option value={"final"}>Final Exam</option>
                  </select>
                </div>

                <div className="w-full">
                  <Convert setJsonData={setJsonData} />
                  <div jsondata={jsondata}></div>
                </div>
                <div className="  gap-x-2 gap-y-2">
                  <label className="text-sm" htmlFor="body">
                    Message for students
                  </label>

                  <textarea
                    rows={3}
                    id="body"
                    required
                    name="body"
                    type="text"
                    placeholder="Best of luck dear students."
                    className=" w-full bg-white rounded  p-2 text-body-color text-base   border border-[f0f0f0]  outline-none focus-visible:shadow-none focus:border-primary"></textarea>
                </div>
                <button className="btn w-24 text-white btn-success m-auto" type="submit">
                  Push
                </button>
              </form>
            </div>
          </div>
        </div>
        {jsondata && <ResultDisplay jsondata={jsondata} />}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
