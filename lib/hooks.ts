// Custom Hook: useReminders
import { useEffect, useState } from "react";
import { getReminder, newReminder } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
//import { revalidatePath } from "@/lib/utils"; // Make sure to import revalidatePath from the correct path
import { useRouter } from "next/router";

export function addNewReminder() {
  //const router = useRouter();
  const addReminder = async (formData: FormData, e: any) => {
    e.preventDefault();
    const formDataReminders = new FormData(e.target);
    try {
      await newReminder(formDataReminders);
      // Assuming revalidatePath is defined and does what you intend
      //router.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return addReminder;
}
