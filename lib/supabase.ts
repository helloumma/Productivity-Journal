"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

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

export async function newToDo(formData: FormData) {
  const title = formData.get("title");
  await supabase
    .from("todo")
    .insert({ title, userId: (await user)?.id })
    .select();
  revalidatePath("/notes");
}

export async function getReminder() {
  const { data: reminder } = await supabase
    .from("reminders")
    .select()
    .eq("userId", (await user)?.id);
  console.log(reminder);
  return reminder;
}

export async function newReminder(formData: FormData) {
  const reminder = formData.get("reminder");
  await supabase
    .from("reminders")
    .insert({ reminder, userId: (await user)?.id })
    .select();
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
  await supabase
    .from("habitTracker")
    .insert({ habit, userId: (await user)?.id })
    .select();
  revalidatePath("/notes");
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
