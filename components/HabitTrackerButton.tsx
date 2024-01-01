"use client";

import { useState } from "react";
import Modal from "./Modal";
import { GraphIcon } from "./Assets";

export default function HabitTrackerButton() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(false);

  const title = "Mood Tracker";
  return (
    <>
      <Modal
        show={showModal}
        onClose={toggleModal}
        reminders={true}
        toDo={false}
        title={title}
      >
        mood tracker modal
      </Modal>
      <button
        className="py-2 ml-4 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        onClick={() => setShowModal(true)}
      >
        <GraphIcon />
      </button>
    </>
  );
}
