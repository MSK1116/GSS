import React from "react";
import { Link } from "react-router-dom";

const Diploma_price_card = () => {
  return (
    <>
      <div className=" p-8 bg-gray-50">
        <h1 className=" text-2xl font-bold mb-5">Fee Structure</h1>

        <div className="overflow-x-auto w-fit p-8 rounded-md mx-auto bg-gray-100">
          <h1>Outlined below are the comprehensive fees charged by the Council for Technical Education and Vocational Training (CTEVT) for the pursuit of a Diploma in Civil Engineering in Nepal during the academic year 2078/079:</h1>
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>Institute</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Constituent</th>
                <td>90,000 - 1,00,000</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>TECS</th>
                <td>1,90,000</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>Partnership</th>
                <td>1,90,000 - 2,00,000</td>
              </tr>
              <tr>
                <th>Private</th>
                <td>2,50,000 - 3,50,000</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 sm:mt-8 ml-10 md:hidden">
            <Link to={"/apply"}>
              <span className=" rounded-full bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">Apply Now</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diploma_price_card;
