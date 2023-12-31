"use client";
import dynamic from "next/dynamic";

import { useState } from "react";
import { habit } from "@/lib/habitTracker/types";
import CircleDial from "./CircleDial";
import DropdownMenu from "./DropdownMenu";
import Modal from "./Modal";
import { HabitTrackerIcon, AddIcon, ToggleDropDownIcon } from "./Assets";
const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

/**
 * TO DO
 * - Need to think about to get around editing emoji for each habit in the edit modal
 */

export default function HabitTracker({
  getData,
  handleDelete,
  handleEditsSubmit,
  handleAdd,
}: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentHabit, setCurrentHabit] = useState<any>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [inputStr, setInputStr] = useState<string>("");
  const [chosenEmoji, setChosenEmoji] = useState();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState({
    emoji: false,
    habit: false,
  });

  const onEmojiClick = (event: any, emojiObject: any) => {
    setInputStr((prev) => prev + emojiObject.emoji);
    setShowPicker(false);
    setChosenEmoji(emojiObject.emoji);
  };

  const handleClick = (e: any) => {
    e.preventDefault;
    console.log("click");
  };

  const handleSubmit = () => {
    window.location.reload();
  };

  const handleDropdownToggle = (todoId: string) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [todoId]: !prevStates[todoId],
    }));
    setShowDropdown(true);
  };

  const toggleModal = () => {
    setShowModal(false);
    setEditModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    if (currentHabit) {
      setCurrentHabit({
        ...currentHabit,

        habit: e.target.value,
      });
    }
  };

  const handleEmojiInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    if (currentHabit) {
      setCurrentHabit({
        ...currentHabit,

        emoji: e.target.value,
      });
    }
  };

  const handleEdit = (habit: habit) => {
    setShowModal(true);
    setEditModal(true);
    setCurrentHabit(habit);
    setShowDropdown(false);
  };

  const handleEditSubmit = async (e: any) => {
    e.preventDefault;
    const updatedData = handleEditsSubmit(
      currentHabit.habit,
      currentHabit.id,
      currentHabit.emoji
    );

    if (updatedData) {
      getData;
    } else {
      console.log("error");
    }
    setShowModal(false);
    setShowDropdown(false);
  };

  const title = (
    <div className="flex items-center">
      <HabitTrackerIcon />
      <h1 className="text-2xl font-bold p-2">Habit Tracker</h1>
    </div>
  );
  const handleBlur = (field: string) => {
    setIsTouched((prev) => ({ ...prev, [field]: true }));
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
        reminders={false}
        toDo={true}
        title={title}
      >
        {editModal ? (
          <form action={handleEditSubmit}>
            <input
              name="emoji"
              className="border border-gray-300  p-2 rounded w-1/6"
              placeholder="emoji"
              value={currentHabit ? currentHabit.emoji : ""}
              onChange={handleEmojiInputChange}
              onBlur={() => handleBlur("emoji")}
            />
            {!isTouched.emoji && (
              <p className="text-red-500 text-sm mt-1">
                This field is required.
              </p>
            )}
            <input
              name="habit"
              className="border border-gray-300  p-2 rounded w-5/6"
              placeholder="Edit habit..."
              value={currentHabit ? currentHabit.habit : ""}
              onChange={handleInputChange}
              onBlur={() => handleBlur("habit")}
            />
            {!isTouched.habit && (
              <p className="text-red-500 text-sm mt-1">
                This field is required.
              </p>
            )}
            <button
              className="border border-gray-300 p-2 ml-2 rounded w-1/7  mt-4  hover:bg-gray-200"
              type="submit"
            >
              Save habit
            </button>
          </form>
        ) : (
          <form action={handleAdd}>
            <input
              name="emoji"
              className="border border-gray-300  p-2 rounded w-1/6"
              value={inputStr}
              onChange={(e) => setInputStr(e.target.value)}
              hidden={true}
            />
            <button
              onClick={() => setShowPicker((val) => !val)}
              className="text-2xl"
            >
              {inputStr ? inputStr : "☺"}
            </button>
            {showPicker && <Picker onEmojiClick={onEmojiClick} />}
            <input
              name="habit"
              className="border border-gray-300  p-2 rounded w-5/6 ml-4"
              placeholder="Add new habit..."
              onBlur={() => handleBlur("habit")}
              onChange={() =>
                setIsTouched((prev) => ({ ...prev, title: false }))
              }
            />
            {!isTouched.habit && (
              <p className="text-red-500 text-sm mt-1">
                This field is required.
              </p>
            )}
            <button
              className="border border-gray-300 p-2 ml-2 rounded w-1/7 mt-4 hover:bg-gray-200"
              type="submit"
              onClick={handleSubmit}
            >
              Add habit
            </button>
          </form>
        )}
      </Modal>

      <div className="pt-4">
        {getData?.map((habits: habit) => (
          <div className="flex items-center" key={habits.id}>
            <div className="pb-3 px-6 w-full">
              <div className="flex justify-between  rounded bg-green-200 mb-2 dark:bg-green-700">
                <div className="flex items-center">
                  <div className="p-3">
                    <CircleDial
                      key={habits.id}
                      percentage={Math.floor(Math.random() * 100).toPrecision(
                        1
                      )}
                      emoji={habits.emoji}
                    />
                  </div>
                  <p className="text-xl font-bold ml-2" onClick={handleClick}>
                    {habits.habit}
                  </p>
                </div>
                <div className="flex items-center">
                  {/* <Toggle /> */}
                  <input
                    type="checkbox"
                    className="checkbox appearance-none h-8 w-8 border border-gray-300 
                rounded-full bg-white checked:bg-green-600 checked:border-transparent 
                focus:outline-none mr-2 cursor-pointer"
                    style={{ borderRadius: "50%" }}
                  />
                  <button
                    onClick={() => handleDropdownToggle(habits.id as string)}
                  >
                    <ToggleDropDownIcon />
                  </button>
                  {dropdownStates[habits.id] && showDropdown && (
                    <DropdownMenu
                      habits={true}
                      deleteItem={() => handleDelete(habits.id as string)}
                      editItem={() => handleEdit(habits as any)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
