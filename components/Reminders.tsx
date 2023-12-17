"use client";

import { addNewReminder } from "@/lib/hooks";
// to do: set up libs folder with a types file

import { getReminder, getUser, newReminder } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";

// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";

export default function Reminders() {
  const [newData, setNewData] = useState<any>();
  // @ts-ignore
  //const [state, formAction] = useFormState(newReminder, []);
  const [addData, setAddData] = useState<any>({ reminder: "" });

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("click");
  };

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    reminder: "",
  });

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleAddReminder = async (e: any) => {
    e.preventDefault;
    const newFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      newFormData.append(key, value);
    });

    await newReminder(newFormData);
    window.location.reload(); // Reload the page
  };
  useEffect(() => {
    const fetchNewReminders = async () => {
      const data = await getReminder();
      setNewData(data);
    };
    fetchNewReminders();
  }, []);

  const handleSubmit = () => {
    window.location.reload();
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Reminders</h1>
      <form action={newReminder}>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-2 gap-4">
            <div className="flex p-1 items-center">
              <div className="space-y-1 ">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="date"
                >
                  Date
                </label>
              </div>
              <input
                name="date"
                className="border p-2 rounded w-full"
                placeholder="Select date"
                type="date"
              />
            </div>
            <div className="flex p-1 items-center">
              <div className="space-y-1">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="date"
                >
                  Time
                </label>
              </div>

              <input
                name="date"
                className="border p-2 rounded w-full"
                placeholder="Select time"
                type="time"
              />
            </div>
          </div>

          <div className="flex ">
            <textarea
              name="reminder"
              className="border border-gray-300  p-8 rounded w-full"
              placeholder="Add new reminder..."
              //onChange={onChange}
              //rows={2}
            />
          </div>
        </div>
        <div className="flex mt-2 justify-center">
          <button
            className="border border-gray-300 p-2 ml-2 rounded flex align-center w-1/7"
            type="submit"
            onClick={handleSubmit}
          >
            Add reminder
          </button>
        </div>
      </form>
      {newData?.map((reminders: any) => (
        <p key={reminders.id} onClick={handleClick}>
          {reminders?.reminder}
        </p>
      ))}
    </>
  );
}
// const handleAddReminder = async (e: React.FormEvent<HTMLFormElement>) => {
//   const router = useRouter();

//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   await newReminder(formData);
//   e.currentTarget.reset();
// };

// // const handleAddReminder = async (e: React.FormEvent<HTMLFormElement>) => {
// //   e.preventDefault();
// //   const formData = new FormData(e.currentTarget);

// //   const reminderData = {
// //     reminder: formData.get("reminder") as string,
// //     userId: (await user)?.id,
// //   };

// //   newReminder(reminderData as any);
// //   //e.currentTarget.reset();
// // };

// // ignore
// const handleClick = (e: any) => {
//   e.preventDefault();
//   console.log("click");
// };
