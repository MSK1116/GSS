import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const Notification = () => {
  const [message_list, setMessageList] = useState([]);

  const getMessage = async () => {
    toast.remove();
    const toastID = toast.loading("Loading...");
    try {
      const res = await axios.get("https://gss-wine.vercel.app/message/messagePull");
      toast.success("Loaded...", { duration: 3000, id: toastID });
      const fewMsg = res.data.slice(0, 3);
      setMessageList(fewMsg);
      console.log(fewMsg);
    } catch (error) {
      toast.error("Failed to fetch", { id: toastID });
    } finally {
      toast.remove(toastID);
    }
  };
  const handleClik = () => {
    getMessage();
  };
  return (
    <>
      <div className="dropdown dropdown-end">
        <Toaster />
        <div onClick={handleClik} tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <IoNotificationsCircleSharp className="w-7 h-7" />
            <span className="badge badge-xs badge-warning indicator-item"></span>
          </div>
        </div>
        <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-56 md:w-96 shadow">
          <div className="card-body rounded-md  bg-gray-50 ">
            <span className="text-lg font-bold">Notification</span>

            {message_list.length > 0
              ? message_list.map((message_list) => (
                  <div key={message_list._id}>
                    <div onClick={() => document.getElementById(message_list._id + 1).showModal()} className=" p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                      <span>{message_list.time}</span>
                      <span className="font-bold line-clamp-1">{message_list.title}</span>
                      <span className="line-clamp-1">{message_list.body}</span>
                    </div>
                    <dialog id={message_list._id + 1} className="modal max-w-screen-2xl ">
                      <div className="modal-box bg-gray-200">
                        <h3 className="font-bold text-sm">{message_list.time}</h3>
                        <p className="text-xl text-gray-950/60 ">{message_list.title}</p>
                        <div className=" space-y-3 mt-4">
                          <p className=" text-gray/50">{message_list.body}</p>
                          <p className="font-bold">{message_list.publisher}</p>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                ))
              : "No new notification"}
            {message_list.length > 0 ? <Link to={"/notification"}>See all</Link> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
