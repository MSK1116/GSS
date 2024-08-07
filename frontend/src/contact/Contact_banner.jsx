import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import img1 from "../../public/IMG_DIR/GamvirFull1.jpg";

const Contact_banner = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="  max-w-screen-2xl   container mx-auto md:px-20px px-4 flex flex-col">
        <section className="relative my-11 mb-40 flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Send us message</h1>

              <p className="mt-4 text-gray-500">Your message is delivered with care, carrying your thoughts like a gentle breeze. Its words resonate with meaning, awaiting the recipient's heart to unfold. Rest assured, your voice is heard.</p>
            </div>

            <form action="https://formsubmit.co/contact@msmahato.com.np" method="POST" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <input type="hidden" name="_subject" value="From GSS webpage"></input>
              <input type="hidden" name="_template" value="table"></input>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>

                <div className="relative">
                  <input name="full_name" type="text" className="w-full rounded-lg border-gray-200 bg-slate-200 p-4 pe-12 text-sm shadow-sm" placeholder="Fullname" required />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input name="email" type="email" className="w-full rounded-lg border-gray-200 bg-slate-200 p-4 pe-12 text-sm shadow-sm" placeholder="Email" required />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* phone number */}
              <div>
                <label htmlFor="phNumber" className="sr-only">
                  Phone Number
                </label>
                <div className="relative">
                  <input name="Phone_number" required type="text" className="w-full rounded-lg border-gray-200 bg-slate-200 p-4 pe-12 text-sm shadow-sm" placeholder="+977 9812055XXX" max={13} />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* Address */}
              <div>
                <label htmlFor="Address" className="sr-only">
                  Adress
                </label>
                <div className="relative">
                  <input name="adress" required type="text" className="w-full rounded-lg border-gray-200 bg-slate-200 p-4 pe-12 text-sm shadow-sm" placeholder="Address" max={40} />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5" />
                    </svg>
                  </span>
                </div>
              </div>
              {/* text box */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="relative">
                  <textarea name="message" className="w-full rounded-lg border-gray-200 bg-slate-200 p-4 pe-12 text-sm shadow-sm" placeholder="Message" rows="8" id="message" maxLength={400}></textarea>

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text "> Does it contain feedback ? </span>

                    <input name="Feedback_status" value={"It contains feedback"} type="checkbox" defaultChecked className="checkbox checkbox-success" />
                  </label>
                </div>

                <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img className="rounded-md mt-9" src={img1}></img>
          </div>
        </section>
      </div>
      <div className="md:mt-96">
        <Footer />
      </div>
    </>
  );
};

export default Contact_banner;
