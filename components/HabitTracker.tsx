"use client";
import dynamic from "next/dynamic";

import { ChangeEvent, useState } from "react";
import { Habit, data } from "@/lib/habitTracker/types";
import CircleDial from "./CircleDial";
import DropdownMenu from "./DropdownMenu";
import Modal from "./Modal";
import { HabitTrackerIcon, AddIcon, ToggleDropDownIcon } from "./Assets";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { IEmojiPickerProps } from "emoji-picker-react";
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
}: Habit) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentHabit, setCurrentHabit] = useState<any>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [inputStr, setInputStr] = useState<string>("");
  const [chosenEmoji, setChosenEmoji] = useState<IEmojiPickerProps | string>(
    ""
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState({
    emoji: false,
    habit: false,
  });

  const onEmojiClick = (emojiObject: { emoji: data["emoji"] }) => {
    setInputStr((prev) => prev + emojiObject.emoji);
    setShowPicker(false);
    setChosenEmoji(emojiObject.emoji);
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

  const handleEdit = (habit: data) => {
    setShowModal(true);
    setEditModal(true);
    setCurrentHabit(habit);
    setShowDropdown(false);
  };

  const handleEditSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <EditForm
            habitTracker={true}
            formAction={handleEditSubmit}
            errorMessage={isTouched}
            currentHabit={currentHabit}
            handleEmojiInputChange={handleEmojiInputChange}
            handleEmojiOnBlurChange={() => handleBlur("emoji")}
            handleHabitInputChange={handleInputChange}
            handleHabitOnBlurChange={() => handleBlur("habit")}
          />
        ) : (
          <AddForm
            habitTracker={true}
            formAction={handleAdd}
            emojiVal={inputStr}
            onChangeEmoji={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputStr(e.target.value)
            }
            onClickPicker={() => setShowPicker((val) => !val)}
            showPicker={showPicker}
            viewPickerRender={<Picker onEmojiClick={onEmojiClick as any} />}
            onBlurHabit={() => handleBlur("habit")}
            onChangeHabit={() =>
              setIsTouched((prev) => ({ ...prev, title: false }))
            }
            onClickAddHabit={handleSubmit}
            errorMessage={isTouched}
          />
        )}
      </Modal>

      <div className="pt-4">
        {getData?.map((habits: data) => (
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
                  <p className="text-xl font-bold ml-2">{habits.habit}</p>
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
                      editItem={() => handleEdit(habits as Habit["getData"])}
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
