"use server";

import { createClient } from "@/utils/supabase/server";
import { defer } from "@defer/client";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import SendEmail from "../defer/Email";
import router from "next/navigation";

const cookieStore = cookies();
const supabase = createClient(cookieStore);
const user = getUser();

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function getToDo() {
  const { data: todos } = await supabase
    .from("todo")
    .select()
    .eq("userId", (await user)?.id);
  return todos;
}

export async function newToDo(formData: FormData, state: any) {
  const title = formData.get("titleToDo");
  const time = formData.get("time");

  await supabase.from("todo").insert({ title, userId: (await user)?.id, time });

  revalidatePath("/notes");
  return { message: true };
}

export async function deleteToDo(id: string) {
  await supabase.from("todo").delete().eq("id", id);
  revalidatePath("/notes");
}

export async function editToDo(title: any, id: string, time: any) {
  const { data, error } = await supabase
    .from("todo")
    .update({ title: title, time: time })
    .eq("id", id)
    .select();
  if (error) console.log(error);
  revalidatePath("/notes");
  return data;
}

export async function getReminder() {
  const { data: reminder } = await supabase
    .from("reminders")
    .select()
    .eq("userId", (await user)?.id);
  return reminder;
}

export async function newReminder(
  formData: FormData,
  prevState: {
    message: string;
  }
) {
  const reminder = formData.get("reminder");
  const time = formData.get("time");
  const date = formData.get("date");
  try {
    await supabase
      .from("reminders")
      .insert({ reminder, time, date, userId: (await user)?.id });
    revalidatePath("/notes");
    return { message: true };
  } catch (err) {
    return { message: err };
  }

  // if (!response.error) {
  //   const sendTime: any = new Date(`${date} ${time}`);

  //   SendEmail();
  // }
  // const sendTime = new Date(`${date} ${time}`);
  // defer(SendEmail, sendTime as any);

  // console.log(sendTime);
  // console.log(new Date());
  // const currTime = new Date();
  // currTime.setSeconds(0);
  // console.log(sendTime === currTime);
}

export async function deleteReminder(id: string) {
  await supabase.from("reminders").delete().eq("id", id);
  revalidatePath("/notes");
}

export async function getHabit() {
  const { data: habit } = await supabase
    .from("habitTracker")
    .select()
    .eq("userId", (await user)?.id);
  return habit;
}

export async function newHabit(formData: FormData) {
  const habit = formData.get("habit");
  const emoji = formData.get("emoji");
  await supabase
    .from("habitTracker")
    .insert({ habit, emoji, userId: (await user)?.id });

  revalidatePath("/notes");
  console.log(formData);
}

export async function deleteHabit(id: string) {
  await supabase.from("habitTracker").delete().eq("id", id);
  revalidatePath("/notes");
}

export async function editHabit(habit: any, id: string, emoji: any) {
  const { data, error } = await supabase
    .from("habitTracker")
    .update({ habit: habit, emoji: emoji })
    .eq("id", id)
    .select();
  if (error) console.log(error);
  revalidatePath("/notes");
  console.log(data);
  return data;
}

export async function getSchedule() {
  const { data: schedule } = await supabase
    .from("schedule")
    .select()
    .eq("userId", (await user)?.id);
  return schedule;
}

// only use for testing purposes
export async function newSchedule(formData: FormData) {
  const item = formData.get("item");
  await supabase
    .from("schedule")
    .insert({ item, userId: (await user)?.id })
    .select();
  revalidatePath("/notes");
}
