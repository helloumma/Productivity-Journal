"use client";
import dynamic from "next/dynamic";
import {
  newHabit,
  getUser,
  getHabit,
  deleteHabit,
  editHabit,
} from "@/actions/supabase";
import { useEffect, useState } from "react";
import { habit } from "@/lib/habitTracker/types";
import Toggle from "./Toggle";
import CircleDial from "./CircleDial";
import DropdownMenu from "./DropdownMenu";
import Modal from "./Modal";
import Picker from "emoji-picker-react";

export default function HabitTracker() {
  const [data, setData] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentHabit, setCurrentHabit] = useState<any>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [inputStr, setInputStr] = useState<string>("");
  const [chosenEmoji, setChosenEmoji] = useState();

  const onEmojiClick = (event: any, emojiObject: any) => {
    setInputStr((prev) => prev + emojiObject.emoji);
    setShowPicker(false);
    setChosenEmoji(emojiObject.emoji);
  };
  console.log(chosenEmoji);

  const handleClick = (e: any) => {
    e.preventDefault;
    console.log("click");
  };

  const onEmojiClickNEW = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject);
  };

  useEffect(() => {
    const fetchHabits = async () => {
      const getData = await getHabit();
      setData(getData);
    };
    fetchHabits();
  }, []);

  const handleSubmit = () => {
    window.location.reload();
  };

  const handleDropdownToggle = (todoId: string) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [todoId]: !prevStates[todoId],
    }));
  };

  const toggleModal = () => setShowModal(false);

  const handleDelete = async (id: string) => {
    await deleteHabit(id);
    window.location.reload();
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
    setEditModal(true);
    setCurrentHabit(habit);
  };

  const handleEditSubmit = async (e: any) => {
    e.preventDefault;
    const updatedData = await editHabit(
      currentHabit.habit,
      currentHabit.id,
      currentHabit.emoji
    );

    //console.log(updatedData);
    if (updatedData) {
      const getData = await getHabit(); // Refetch the updated list
      setData(getData); // Update the state with the new list
      console.log(data);
    } else {
      console.log("error");
    }
    setShowModal(false);
    //window.location.reload();
    //console.log(data);
  };

  return (
    <>
      <div className="pl-6 flex items-center justify-between border-b-4 border-gray-500 border-double">
        <div className="flex items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 00-3.01 3.154 19.877 19.877 0 00-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z" />
          </svg>
          <h1 className="text-2xl font-bold p-2">Habit Tracker</h1>
        </div>

        <button onClick={() => setShowModal(true)}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.5em"
            width="1.5em"
            className="mr-6"
          >
            <path d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
          </svg>
        </button>
      </div>

      <Modal show={showModal} onClose={toggleModal}>
        {editModal ? (
          <form action={handleEditSubmit}>
            <input
              name="emoji"
              className="border border-gray-300  p-2 rounded w-1/6"
              placeholder="emoji"
              value={currentHabit ? currentHabit.emoji : ""}
              onChange={handleEmojiInputChange}
            />
            <input
              name="habit"
              className="border border-gray-300  p-2 rounded w-5/6"
              placeholder="Edit habit..."
              value={currentHabit ? currentHabit.habit : ""}
              onChange={handleInputChange}
            />
            <button
              className="border border-gray-300 p-2 ml-2 rounded w-1/7"
              type="submit"
            >
              Save habit
            </button>
          </form>
        ) : (
          <form action={newHabit}>
            <input
              name="emoji"
              className="border border-gray-300  p-2 rounded w-1/6"
              value={inputStr}
              onChange={(e) => setInputStr(e.target.value)}
              hidden={true}
            />
            <button onClick={() => setShowPicker((val) => !val)}>
              {inputStr ? inputStr : "Select emoji"}
            </button>
            {showPicker && <Picker onEmojiClick={onEmojiClick} />}
            <input
              name="habit"
              className="border border-gray-300  p-2 rounded w-5/6"
              placeholder="Add new habit..."
            />
            <button
              className="border border-gray-300 p-2 ml-2 rounded w-1/7"
              type="submit"
              onClick={handleSubmit}
            >
              Add habit
            </button>
          </form>
        )}
      </Modal>

      <div className="pt-4">
        {data?.map((habits: habit) => (
          <>
            <div className="flex items-center ">
              <div className="pb-6 px-6 w-full" key={habits.id}>
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
                    <Toggle />
                    <button
                      onClick={() => handleDropdownToggle(habits.id as string)}
                    >
                      <svg
                        className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 4 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M1.5 2h.01M1.5 8h.01m-.01 6h.01"
                        />
                      </svg>
                    </button>
                    {dropdownStates[habits.id] && (
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
          </>
        ))}
      </div>

      {/* <div className="flex flex-wrap">
        {data?.map((habits: habit) => (
          <CircleDial
            key={habits.id}
            percentage={Math.floor(Math.random() * 100).toPrecision(1)}
            emoji={habits.emoji}
            title={habits.habit}
          />
        ))}
      </div> */}
    </>
  );
}
