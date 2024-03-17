"use client";

import SendEmail from "@/actions/Email";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { RemindersIcon, AddIcon, DeleteReminderIcon } from "./Assets";

export default function Reminders({ getData, handleDelete, handleAdd }: any) {
  const [showModal, setShowModal] = useState(false);
  const [isTouched, setIsTouched] = useState({
    date: false,
    time: false,
    reminder: false,
  });

  const handleClick = (e: any) => {
    e.preventDefault;
    console.log("click");
  };

  useEffect(() => {
    // Set an interval to periodically check for items to delete
    const interval = setInterval(() => {
      getData.forEach((item: { date: string | number | Date; id: string }) => {
        // console.log(item.date);
        if (new Date(item.date) < new Date()) {
          handleDelete(item.id);
        }
      });
    }, 60000); // Check every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [getData]);

  // const handleSubmit = () => {
  //   window.location.reload();
  // };

  const toggleModal = () => setShowModal(false);

  const title = (
    <div className="flex items-center">
      <RemindersIcon />
      <h1 className="text-2xl font-bold p-2">Reminders</h1>
    </div>
  );
  const handleBlur = (field: string) => {
    setIsTouched((prev) => ({ ...prev, [field]: true }));
  };
  const handleSubmit = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="pl-6 flex items-center justify-between border-b-4 border-gray-500 border-double">
        {title}
        <button onClick={() => setShowModal(true)}>
          <AddIcon />
        </button>
      </div>

      <Modal
        show={showModal}
        onClose={toggleModal}
        reminders={true}
        toDo={false}
        title={title}
      >
        <form action={handleAdd}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4">
              <div className="flex p-1 items-center">
                <div className="space-y-1 mr-4">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="date"
                  >
                    Date
                  </label>
                </div>
                <input
                  name="date"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Select date"
                  type="date"
                  onBlur={() => handleBlur("date")}
                  onChange={() =>
                    setIsTouched((prev) => ({ ...prev, date: false }))
                  }
                />
              </div>
              {!isTouched.date && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required.
                </p>
              )}
              <div className="flex p-1 items-center">
                <div className="space-y-1 mr-4">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="date"
                  >
                    Time
                  </label>
                </div>

                <input
                  name="time"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Select time"
                  type="time"
                  onBlur={() => handleBlur("time")}
                  onChange={() =>
                    setIsTouched((prev) => ({ ...prev, time: false }))
                  }
                />
              </div>
              {!isTouched.time && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required.
                </p>
              )}
            </div>

            <div className="flex">
              <textarea
                name="reminder"
                className="border border-gray-300  p-8 rounded w-full"
                placeholder="Add new reminder..."
                //onChange={onChange}
                //rows={2}
                onBlur={() => handleBlur("reminder")}
                onChange={() =>
                  setIsTouched((prev) => ({ ...prev, reminder: false }))
                }
              />
            </div>
          </div>
          {!isTouched.reminder && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
          <div className="flex mt-2 justify-center">
            <button
              className="border border-gray-300 p-2 ml-2 rounded flex align-center w-1/7  hover:bg-gray-200"
              type="submit"
              onClick={handleSubmit}
            >
              Add reminder
            </button>
          </div>
        </form>
      </Modal>
      <div className="p-4">
        {getData?.map((reminders: any) => (
          <div
            className="flex bg-gray-300 dark:bg-gray-600 rounded  p-4 mb-4 justify-between items-center"
            key={reminders.id}
          >
            <div onClick={handleClick}>
              <h1 className="text-xl font-bold">{reminders?.reminder}</h1>
              <div className="flex text-gray-400">
                <p className="text-sm gray-200">{reminders?.date}</p>
                <p className="text-sm ml-4">{reminders?.time}</p>
              </div>
            </div>

            <div className="-mr-1">
              <button onClick={() => handleDelete(reminders.id as any)}>
                <DeleteReminderIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
