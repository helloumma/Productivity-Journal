import {
  ChangeEvent,
  ChangeEventHandler,
  DetailedHTMLProps,
  FocusEventHandler,
  MouseEventHandler,
  TextareaHTMLAttributes,
} from "react";

export type AddForm = {
  test?: any;
  formAction?: any;
  onBlurReminderDate?: FocusEventHandler<HTMLInputElement>;
  onBlurReminderTime?: FocusEventHandler<HTMLInputElement>;
  onBlurReminderInfo?:
    | DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >
    | FocusEventHandler<HTMLTextAreaElement>
    | undefined;
  onChangeReminderInfo?: ChangeEventHandler<HTMLTextAreaElement>;
  reminders?: boolean;
  habitTracker?: boolean;
  toDo?: boolean;
  onChangeReminderDate?: FocusEventHandler<HTMLInputElement>;
  onChangeReminderTime?: FocusEventHandler<HTMLInputElement>;
  errorMessage?: {
    date?: boolean;
    time?: boolean;
    reminder?: boolean;
    habit?: boolean;
    title?: boolean;
  };
  emojiVal?: string;
  onChangeEmoji?: ChangeEventHandler<HTMLInputElement>;
  onClickPicker?: MouseEventHandler<HTMLButtonElement>;
  showPicker?: boolean;
  viewPickerRender?: any;
  onBlurHabit?: FocusEventHandler<HTMLInputElement>;
  onChangeHabit?: ChangeEventHandler<HTMLInputElement>;
  onClickAddHabit?: MouseEventHandler<HTMLButtonElement>;
  onBlurToDoTitle?: FocusEventHandler<HTMLInputElement>;
  onChangeToDoTitle?: ChangeEventHandler<HTMLInputElement>;
  onChangeToDoTime?: ChangeEventHandler<HTMLInputElement>;
  onBlurToDoTime?: FocusEventHandler<HTMLInputElement>;
  handleSubmitReminder?: any;
  showModal?: () => void;
  handleToDoSubmit?: any;
};
