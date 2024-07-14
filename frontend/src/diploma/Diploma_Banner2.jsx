import React from "react";
import img1 from "../../public/IMG_DIR/Gamvir_poster_for_admission.jpg";

const Diploma_Banner2 = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Everything that you need to know.</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img alt="photo" src={img1} className="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Gamvir Samudra Setu, is one of the well known technical schools established in 2073 BS under Technical Education in Community School (TECS) affiliated to Council for Technical Education & Vocational Training (CTEVT) which is leading
                  technical education board in Nepal. Our school is providing practical, experience based technical education to the students since its establishement. We have been running Diploma in Civil Engineering since 2073 BS and Diploma in
                  Geomatics Engineering since 2076 BS. Gamvir Samudra Setu, have been proud to produce skilled Sub Engineers required for the development of country's infrastructure.
                </p>
                <p>
                  Our students have been working in different construction companies, engineering firms, governmental organization, non governmental organization as well. As the the demand for skilled Sub Engineers is on the rise in Nepal due to the
                  country's infrastructure developent, then why not to think about technical education. So lets share some ideas about its eligibility, enrollment, fee structures and job prospects.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Diploma_Banner2;
