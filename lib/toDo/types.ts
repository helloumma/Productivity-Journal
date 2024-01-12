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

// handleEditsSubmit is of type Function
// handleEdit is of type handleEditsSubmit
// handleEdit takes in 'todo' which is of type data
// expected: a type from ToDo for handleEdit
// currently have of type data
// need to create some form of overlap between the getData, data and handlesSubmit

// TO DO: make getData, handleDelete, handleAdd, handleEdit all generic (overlapped in habit tracker, reminders and to do, possibly schedule too)
