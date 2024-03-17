import { IEmojiPickerProps } from "emoji-picker-react";

export type data = {
  id: number | string;
  habit: string;
  emoji: string | IEmojiPickerProps;
};

export interface Habit {
  getData: Array<data>;
  handleDelete: Function;
  handleAdd: FormData;
  handleEditsSubmit: Function;
}
