import React from "react";

const Apply_banner = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

      <section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-wrap lg:justify-between -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <span className="block mb-4 text-base text-primary font-semibold">Enroll Now!</span>
                <h2
                  className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  ">
                  Apply and pursue your dream.
                </h2>
                <p className="text-base text-body-color leading-relaxed mb-9">
                  Thank you for your interest in applying to our programs. We would like to bring to your attention some important points to consider before you proceed with your application. Ensure that you thoroughly review the eligibility
                  requirements for your chosen program, as failure to meet these criteria will result in the rejection of your application. Pay close attention to the application deadlines, as late submissions will not be considered under any
                  circumstances. Additionally, all submitted documents must be authentic and verified. Any attempt to provide false information or fraudulent documents will lead to immediate disqualification. We appreciate your attention to these
                  details and wish you the best of luck in your application process.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form enctype="multipart/form-data" method="POST" action="https://formsubmit.co/contact@msmahato.com.np">
                  <input type="hidden" name="_subject" value="Application from GSS webpage"></input>
                  <input type="hidden" name="_template" value="table"></input>
                  <div className="mb-6">
                    <input
                      required
                      name="fullname"
                      type="text"
                      placeholder="Your Name"
                      className=" w-full bg-white  rounded  py-3 px-[14px] text-body-color text-base   border border-[f0f0f0]  outline-none focus-visible:shadow-none focus:border-primary"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="
                        w-full bg-white
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      required
                      name="phonenumber"
                      type="text"
                      placeholder="Your Phone"
                      className="
                        w-full bg-white
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      required
                      name="Address"
                      type="text"
                      placeholder="Address"
                      className="
                        w-full bg-white
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      required
                      name="Pass-out_school"
                      type="text"
                      placeholder="Pass-out school"
                      className="
                        w-full bg-white
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      required
                      name="GPA"
                      type="number"
                      placeholder="GPA"
                      className="
                        w-full bg-white
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <span>Please upload pp size photo (PNG or jpeg)</span>
                    <input required type="file" name="photo" accept="image/png, image/jpeg" className="file-input file-input-bordered file-input-info w-full " />
                  </div>
                  <div className="mb-6">
                    <textarea
                      required
                      name="remarks"
                      rows="6"
                      placeholder="Remarks"
                      className="
                        w-full bg-white
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="
                        w-full
                        text-white
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        ">
                      Send Application
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="#3056D3" />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <svg width="34" height="134" viewBox="0 0 34 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296" />
                      <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296" />
                      <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296" />
                      <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296" />
                      <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#13C296" />
                      <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296" />
                      <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296" />
                      <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296" />
                      <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296" />
                      <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296" />
                      <circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#13C296" />
                      <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#13C296" />
                      <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#13C296" />
                      <circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#13C296" />
                      <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#13C296" />
                      <circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#13C296" />
                      <circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#13C296" />
                      <circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#13C296" />
                      <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#13C296" />
                      <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#13C296" />
                      <circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#13C296" />
                      <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#13C296" />
                      <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#13C296" />
                      <circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#13C296" />
                      <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#13C296" />
                      <circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#13C296" />
                      <circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#13C296" />
                      <circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#13C296" />
                      <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#13C296" />
                      <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#13C296" />
                    </svg>
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    <svg width="107" height="134" viewBox="0 0 107 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296" />
                      <circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#13C296" />
                      <circle cx="104.999" cy="102.667" r="1.66667" transform="rotate(180 104.999 102.667)" fill="#13C296" />
                      <circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="#13C296" />
                      <circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="#13C296" />
                      <circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="#13C296" />
                      <circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="#13C296" />
                      <circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="#13C296" />
                      <circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="#13C296" />
                      <circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="#13C296" />
                      <circle cx="90.3333" cy="132" r="1.66667" transform="rotate(180 90.3333 132)" fill="#13C296" />
                      <circle cx="90.3333" cy="117.333" r="1.66667" transform="rotate(180 90.3333 117.333)" fill="#13C296" />
                      <circle cx="90.3333" cy="102.667" r="1.66667" transform="rotate(180 90.3333 102.667)" fill="#13C296" />
                      <circle cx="90.3333" cy="88" r="1.66667" transform="rotate(180 90.3333 88)" fill="#13C296" />
                      <circle cx="90.3333" cy="73.3333" r="1.66667" transform="rotate(180 90.3333 73.3333)" fill="#13C296" />
                      <circle cx="90.3333" cy="45" r="1.66667" transform="rotate(180 90.3333 45)" fill="#13C296" />
                      <circle cx="90.3333" cy="16" r="1.66667" transform="rotate(180 90.3333 16)" fill="#13C296" />
                      <circle cx="90.3333" cy="59" r="1.66667" transform="rotate(180 90.3333 59)" fill="#13C296" />
                      <circle cx="90.3333" cy="30.6666" r="1.66667" transform="rotate(180 90.3333 30.6666)" fill="#13C296" />
                      <circle cx="90.3333" cy="1.66665" r="1.66667" transform="rotate(180 90.3333 1.66665)" fill="#13C296" />
                      <circle cx="75.6654" cy="132" r="1.66667" transform="rotate(180 75.6654 132)" fill="#13C296" />
                      <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296" />
                      <circle cx="75.6654" cy="117.333" r="1.66667" transform="rotate(180 75.6654 117.333)" fill="#13C296" />
                      <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296" />
                      <circle cx="75.6654" cy="102.667" r="1.66667" transform="rotate(180 75.6654 102.667)" fill="#13C296" />
                      <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296" />
                      <circle cx="75.6654" cy="88" r="1.66667" transform="rotate(180 75.6654 88)" fill="#13C296" />
                      <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296" />
                      <circle cx="75.6654" cy="73.3333" r="1.66667" transform="rotate(180 75.6654 73.3333)" fill="#13C296" />
                      <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#13C296" />
                      <circle cx="75.6654" cy="45" r="1.66667" transform="rotate(180 75.6654 45)" fill="#13C296" />
                      <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296" />
                      <circle cx="75.6654" cy="16" r="1.66667" transform="rotate(180 75.6654 16)" fill="#13C296" />
                      <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296" />
                      <circle cx="75.6654" cy="59" r="1.66667" transform="rotate(180 75.6654 59)" fill="#13C296" />
                      <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296" />
                      <circle cx="75.6654" cy="30.6666" r="1.66667" transform="rotate(180 75.6654 30.6666)" fill="#13C296" />
                      <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296" />
                      <circle cx="75.6654" cy="1.66665" r="1.66667" transform="rotate(180 75.6654 1.66665)" fill="#13C296" />
                      <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296" />
                      <circle cx="60.9993" cy="132" r="1.66667" transform="rotate(180 60.9993 132)" fill="#13C296" />
                      <circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#13C296" />
                      <circle cx="60.9993" cy="117.333" r="1.66667" transform="rotate(180 60.9993 117.333)" fill="#13C296" />
                      <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#13C296" />
                      <circle cx="60.9993" cy="102.667" r="1.66667" transform="rotate(180 60.9993 102.667)" fill="#13C296" />
                      <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#13C296" />
                      <circle cx="60.9993" cy="88" r="1.66667" transform="rotate(180 60.9993 88)" fill="#13C296" />
                      <circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#13C296" />
                      <circle cx="60.9993" cy="73.3333" r="1.66667" transform="rotate(180 60.9993 73.3333)" fill="#13C296" />
                      <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#13C296" />
                      <circle cx="60.9993" cy="45" r="1.66667" transform="rotate(180 60.9993 45)" fill="#13C296" />
                      <circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#13C296" />
                      <circle cx="60.9993" cy="16" r="1.66667" transform="rotate(180 60.9993 16)" fill="#13C296" />
                      <circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#13C296" />
                      <circle cx="60.9993" cy="59" r="1.66667" transform="rotate(180 60.9993 59)" fill="#13C296" />
                      <circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#13C296" />
                      <circle cx="60.9993" cy="30.6666" r="1.66667" transform="rotate(180 60.9993 30.6666)" fill="#13C296" />
                      <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#13C296" />
                      <circle cx="60.9993" cy="1.66665" r="1.66667" transform="rotate(180 60.9993 1.66665)" fill="#13C296" />
                      <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#13C296" />
                      <circle cx="46.3333" cy="132" r="1.66667" transform="rotate(180 46.3333 132)" fill="#13C296" />
                      <circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#13C296" />
                      <circle cx="46.3333" cy="117.333" r="1.66667" transform="rotate(180 46.3333 117.333)" fill="#13C296" />
                      <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#13C296" />
                      <circle cx="46.3333" cy="102.667" r="1.66667" transform="rotate(180 46.3333 102.667)" fill="#13C296" />
                      <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#13C296" />
                      <circle cx="46.3333" cy="88" r="1.66667" transform="rotate(180 46.3333 88)" fill="#13C296" />
                      <circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#13C296" />
                      <circle cx="46.3333" cy="73.3333" r="1.66667" transform="rotate(180 46.3333 73.3333)" fill="#13C296" />
                      <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#13C296" />
                      <circle cx="46.3333" cy="45" r="1.66667" transform="rotate(180 46.3333 45)" fill="#13C296" />
                      <circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#13C296" />
                      <circle cx="46.3333" cy="16" r="1.66667" transform="rotate(180 46.3333 16)" fill="#13C296" />
                      <circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#13C296" />
                      <circle cx="46.3333" cy="59" r="1.66667" transform="rotate(180 46.3333 59)" fill="#13C296" />
                      <circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#13C296" />
                      <circle cx="46.3333" cy="30.6666" r="1.66667" transform="rotate(180 46.3333 30.6666)" fill="#13C296" />
                      <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#13C296" />
                      <circle cx="46.3333" cy="1.66665" r="1.66667" transform="rotate(180 46.3333 1.66665)" fill="#13C296" />
                      <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#13C296" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apply_banner;
