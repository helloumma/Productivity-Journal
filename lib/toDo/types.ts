export type data = {
  id: number | string;
  title: string;
};

export interface ToDo {
  getData: any;
  handleDelete: Function;
  handleAdd: any;
  handleEditsSubmit: Function;
}

export type ToDoEdit = Omit<
  ToDo,
  "handleDelete" | "handleAdd" | "handleEditsSubmit"
>;
