import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Convert from "../component/Convert";
import ResultDisplay from "./ResultDisplay";

const Dashboard = () => {
  const [jsonData, setJsonData] = useState(null);
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mt-8 bg-slate-50 p-8">
        <h1 className="mt-7 text-2xl"> Welcome Back!</h1>

        <div className=" max-w-screen-2xl mt-5 p-8 bg-gray-50 gap-2 flex flex-col md:flex-row">
          <div className="w-1/2 rounded-md border p-2 ">
            <h1 className=" text-xl text-red-500 font-bold">Notification Handler</h1>
            <h1>
              <span>Date:</span> {new Date().getMonth() + 1} / {new Date().getDate()} / {new Date().getFullYear()}
            </h1>
            <div className="p-3">
              <form className=" w-full space-y-2 ">
                <div className="  gap-x-2 gap-y-2">
                  <label className="text-sm" htmlFor="title">
                    Title
                  </label>

                  <input
                    id="title"
                    required
                    name="title"
                    type="text"
                    placeholder="Holday on 1st august"
                    className=" w-full bg-white rounded  p-2 text-body-color text-base   border border-[f0f0f0]  outline-none focus-visible:shadow-none focus:border-primary"></input>
                </div>
                <div className="  gap-x-2 gap-y-2">
                  <label className="text-sm" htmlFor="body">
                    Body
                  </label>

                  <textarea
                    rows={8}
                    id="body"
                    required
                    name="body"
                    type="text"
                    placeholder="Due to heavy rainfall we will be closed for a day."
                    className=" w-full bg-white rounded  p-2 text-body-color text-base   border border-[f0f0f0]  outline-none focus-visible:shadow-none focus:border-primary"></textarea>
                </div>
                <div className="  gap-x-2 gap-y-2">
                  <label className="text-sm" htmlFor="title">
                    Publisher
                  </label>

                  <input
                    id="title"
                    required
                    name="title"
                    type="text"
                    placeholder="Karishma Subedi"
                    className=" w-full bg-white rounded  p-2 text-body-color text-base   border border-[f0f0f0]  outline-none focus-visible:shadow-none focus:border-primary"></input>
                </div>
                <button className="btn w-24 text-white btn-success m-auto" type="submit">
                  Push
                </button>
              </form>
            </div>
          </div>
          <div className="w-1/2 rounded-md border p-2">
            <h1 className=" text-xl text-red-500 font-bold">Result Handler</h1>
            <h1>
              <span>Date:</span> {new Date().getMonth() + 1} / {new Date().getDate()} / {new Date().getFullYear()}
            </h1>
            <div className="p-4 ">
              <form className=" space-y-3">
                <div className="w-full">
                  <label htmlFor="grade">Select Class</label>
                  <select id="grade" className=" bg-gray-100 w-full select select-accent">
                    <option disabled selected>
                      Select Class
                    </option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                  </select>
                </div>
                <div className="w-full ">
                  <label htmlFor="term">Select Term</label>
                  <select id="term" className=" bg-gray-100 w-full select select-accent">
                    <option disabled selected>
                      Select Class
                    </option>
                    <option>First Terminal</option>
                    <option>Second Terminal</option>
                    <option>Third Terminal</option>
                    <option>Final Exam</option>
                  </select>
                </div>

                <div className="w-full">
                  <Convert setJsonData={setJsonData} />
                  <div jsonData={jsonData}></div>
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
        {jsonData && <ResultDisplay jsonData={jsonData} />}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
