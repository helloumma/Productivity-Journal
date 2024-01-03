import { MouseEventHandler } from "react";

export type DropdownMenu = {
  habits?: boolean;
  deleteItem: MouseEventHandler<HTMLAnchorElement>;
  editItem: MouseEventHandler<HTMLAnchorElement>;
};
