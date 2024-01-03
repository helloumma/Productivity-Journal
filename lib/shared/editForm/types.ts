import { ChangeEventHandler, FocusEventHandler } from "react";

export type EditForm = {
  formAction?: string | FormData;
  errorMessage?: {
    date?: boolean;
    time?: boolean;
    reminder?: boolean;
    habit?: boolean;
    title?: boolean;
    emoji?: boolean;
  };
  habitTracker?: boolean;
  toDo?: boolean;
  currentToDo?: {
    title: string;
    time: string;
  };
  currentHabit?: {
    emoji?: string;
    habit?: string;
  };
  handleInputChangeToDo?: ChangeEventHandler<HTMLInputElement>;
  handleBlurToDoEdit?: FocusEventHandler<HTMLInputElement>;
  handleTimeChangeToDo?: ChangeEventHandler<HTMLInputElement>;
  handleBlurToDoTimeEdit?: FocusEventHandler<HTMLInputElement>;
  handleEmojiInputChange?: ChangeEventHandler<HTMLInputElement>;
  handleEmojiOnBlurChange?: FocusEventHandler<HTMLInputElement>;
  handleHabitInputChange?: ChangeEventHandler<HTMLInputElement>;
  handleHabitOnBlurChange?: FocusEventHandler<HTMLInputElement>;
};
