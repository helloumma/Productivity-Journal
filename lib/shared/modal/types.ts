import { MouseEventHandler, ReactNode } from "react";

export type Modal = {
  children: ReactNode;
  toDo: boolean;
  reminders: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
  title: React.JSX.Element;
  show: boolean;
};
