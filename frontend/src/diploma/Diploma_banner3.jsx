import React from "react";
import img1 from "../../public/IMG_DIR/Gamvir_poster_for_admission.jpg";

const Diploma_banner3 = () => {
  return (
    <>
      <section className=" bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative flex items-center p-8 bg-gray-200 rounded-md">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">Eligibility Criteria</h2>
                <h1>To be eligible for a diploma in engineering course in Nepal</h1>

                <p className="mt-4 text-gray-600">1. You must have completed your SLC (Secondary Level Certificate) or SEE or equivalent education with a minimum of C+ grade in Mathematics and Science, D+ in English or 1.6 GPA in aggregate.</p>
                <p className="mt-4 text-gray-600">2. You must pass the entrance exam conducted by the CTEVT.</p>
                <p className="mt-4 text-gray-600">3. You must be a Nepali citizen or have a valid Nepali citizenship certificate</p>
              </div>
            </div>
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img alt="" src={img1} className=" rounded-lg absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img alt="" src={img1} className=" rounded-lg absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
            <div className="relative flex p-8 items-center bg-gray-200 rounded-md">
              <div className="sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">Enrollment Procedure</h2>
                <h1>Candidates need to submit the application form distributed from the institute of CTEVT. All applicants must submit the following documents with the application form. l</h1>

                <p className="mt-4 text-gray-600">1. Fill application form with 2 passport size photos.</p>
                <p className="mt-4 text-gray-600">2. Certified copies of all academic transcript and character certificates.</p>
                <p className="mt-4 text-gray-600">3. A copy of Nepeles citizenship/birth certificates.</p>
                <p className="mt-4 text-gray-600">4. Application form fee: Rs 1000/1500 for Scholarship & Full Paying</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Diploma_banner3;
