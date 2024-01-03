"use client";

import SendEmail from "@/actions/Email";
import { useEffect, useState } from "react";
import { data, Reminders } from "@/lib/reminders/types";
import Modal from "./Modal";
import { RemindersIcon, AddIcon, DeleteReminderIcon } from "./Assets";
import AddFrom from "./AddForm";

// temp: have a pop up modal for each reminder at the given time and date set

export default function Reminders({
  getData,
  handleDelete,
  handleAdd,
}: Reminders) {
  const [showModal, setShowModal] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [isTouched, setIsTouched] = useState({
    date: false,
    time: false,
    reminder: false,
  });

  // to do: needs to be refactored to take in date and time and compare it to current date and time

  useEffect(() => {
    // Set an interval to periodically check for items to delete
    const interval = setInterval(() => {
      getData.forEach((item: data) => {
        // console.log(item.date);
        if (new Date(item.date) < new Date()) {
          handleDelete(item.id);
        }
      });
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [getData]);

  const handleSubmit = () => {
    window.location.reload();
  };

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

  const onChangeDate = () => {
    setIsTouched((prev) => ({
      ...prev,
      date: false,
    }));
  };

  const onChangeTime = () => {
    setIsTouched((prev) => ({ ...prev, time: false }));
  };

  const onChangeInfo = () => {
    setIsTouched((prev) => ({ ...prev, reminder: false }));
  };
  const currDate = new Date();
  const currTime = currDate.getTime;
  console.log(currDate.toLocaleTimeString());

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
        {showReminderModal ? (
          "reminders modal for time of reminder"
        ) : (
          <AddFrom
            reminders={true}
            formAction={handleAdd}
            onBlurReminderDate={() => handleBlur("date")}
            onChangeReminderDate={onChangeDate}
            errorMessage={isTouched}
            onBlurReminderTime={() => handleBlur("time")}
            onChangeReminderTime={onChangeTime}
            onBlurReminderInfo={() => handleBlur("reminder")}
            onChangeReminderInfo={onChangeInfo}
          />
        )}
      </Modal>
      <div className="p-4">
        {getData?.map((reminders: data) => (
          <div
            className="flex bg-gray-300 dark:bg-gray-600 rounded  p-4 mb-4 justify-between items-center"
            key={reminders.id}
          >
            <div>
              <h1 className="text-xl font-bold">{reminders?.reminder}</h1>
              <div className="flex text-gray-400">
                <p className="text-sm gray-200">{reminders?.date as string}</p>
                <p className="text-sm ml-4">{reminders?.time}</p>
              </div>
            </div>

            <div className="-mr-1">
              <button onClick={() => handleDelete(reminders.id as number)}>
                <DeleteReminderIcon />
              </button>
            </div>
            {"reminders date" && (reminders?.time as string)}
            {"current date" &&
              new Date().toLocaleTimeString(undefined, { timeStyle: "short" })}
            {reminders?.time ==
            new Date().toLocaleTimeString(undefined, { timeStyle: "short" })
              ? (setShowReminderModal(true) as any)
              : "none"}
          </div>
        ))}
      </div>
    </>
  );
}
