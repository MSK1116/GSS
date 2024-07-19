import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Notification_page = () => {
  document.title = "Notification || GSS";
  const [message_list, setMessageList] = useState([]);
  useEffect(() => {
    const getMessage = async () => {
      toast.remove();
      const toastID = toast.loading("Loading...");
      try {
        const res = await axios.get("https://gss-wine.vercel.app/message/messagePull");
        toast.success("Loaded...", { duration: 3000, id: toastID });

        setMessageList(res.data);
      } catch (error) {
        toast.error("Failed to fetch", { id: toastID });
      } finally {
        toast.remove(toastID);
      }
    };
    getMessage();
  }, []);
  return (
    <>
      <Navbar />
      <div className=" p-8 md:mt-10 md:h-screen ">
        {message_list.length > 0 ? (
          <div className="bg-gray-50 p-8">
            {message_list.map((message_list) => (
              <>
                <div key={message_list._id}>
                  <div className="collapse bg-gray-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-gray-500 text-[18px]">
                      {message_list.title}
                      {"  "}
                      <span className="text-sm ">({message_list.time})</span>
                    </div>

                    <div className="collapse-content ">
                      <p className="p-4 text-gray-600">{message_list.body}</p>
                      <p className="p-4 text-gray-700">{message_list.publisher}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        ) : (
          <>
            <span className="text-xl text-red-500">No new notification</span>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Notification_page;
