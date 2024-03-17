import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddFormComponent from "./AddForm";
import { AddForm } from "@/lib/shared/addForm/types";

const toDoProps: AddForm = {
  formAction: "example",
  toDo: true,
};

const reminderProps: AddForm = {
  formAction: "example",
  reminders: true,
};

const habittrackerProps: AddForm = {
  formAction: "example",
  habitTracker: true,
};

describe("Add Form: To Do", () => {
  render(<AddFormComponent {...toDoProps} />);
  // title and icon render
  it("renders the correct amount of labels", () => {
    expect(screen.getByRole("label")).toHaveLength(2);
  });
  // task label render
  // time label render
  // task input box
  // time input box
  // 'add task' button
});

test("Add Form: Reminders", () => {
  render(<AddFormComponent {...reminderProps} />);
  // title and icon render
  // date label render
  // time label render
  // reminder text box render
  // date input render
  // time input render
  // 'add reminder' button
});

test("Add Form: Habit Tracker", () => {
  render(<AddFormComponent {...habittrackerProps} />);
  // title and icon render
  // new habit input render
  // 'add habit' button
});
