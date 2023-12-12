// Custom Hook: useReminders
import { useEffect, useState } from "react";
import { getReminder, newReminder } from "@/lib/supabase";

export function useReminders() {
  const [reminderData, setReminderData] = useState([]);

  const fetchReminders = async () => {
    try {
      const { data }: any = await getReminder();
      setReminderData(data || []);
    } catch (error) {
      console.error("Error fetching reminders:", error);
    }
  };

  const addReminder = async (formData: FormData) => {
    try {
      await newReminder(formData);
      // No need to fetch reminders here since useEffect handles it
    } catch (error) {
      console.error("Error adding reminder:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []); // Run once on component mount

  return { reminderData, addReminder, fetchReminders };
}

export function addReminder() {}

export function renderReminders() {
  const [newData, setNewData] = useState<[]>();

  useEffect(() => {
    const fetchNewReminders = async () => {
      try {
        const { data }: any = await getReminder();
        setNewData(data);

        return newData;
      } catch (err) {
        throw err;
      }
    };
    fetchNewReminders();
  });
  return { newData };
}
