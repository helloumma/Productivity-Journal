import { ReactNode } from "react";

export type data = {
  id: number;
  reminder: string;
  date: string | Date;
  time: ReactNode;
};

export interface Reminders {
  getData: Array<data>;
  handleDelete: Function;
  handleAdd: FormData;
}
