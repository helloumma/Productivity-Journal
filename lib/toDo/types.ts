export type data = {
  id: number | string;
  title: string;
};

export interface ToDo {
  getData: Array<data>;
  handleDelete: Function;
  handleAdd: FormData;
  handleEditsSubmit: Function;
}
