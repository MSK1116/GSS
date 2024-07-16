import React from "react";
import { IoNotificationsCircleSharp } from "react-icons/io5";

const Notification = () => {
  return (
    <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <IoNotificationsCircleSharp className=" text-yellow-300  h-9 w-9" />
            <span className="badge badge-sm indicator-item">2+</span>
          </div>
        </div>
        <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-96 shadow">
          <div className="card-body rounded-md  bg-gray-50">
            <span className="text-lg font-bold">Notification</span>
            <div>
              <div className=" p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                <span>Date</span>
                <span className="font-bold line-clamp-1">Website will be lunched soon Website will be lunched soon Website will be lunched soon</span>
                <span className="line-camp-1">Information</span>
              </div>
            </div>
            <div>
              <div className=" p-2 rounded-md bg-gray-100 hover:bg-gray-200">Result page coming soon</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
