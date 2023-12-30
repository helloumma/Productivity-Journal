# Digital Journal

[TO DO]

### 📋Aims of App

- [TO DO]

### 👩‍💻Technical Details

- TypeScript
- Supabase
- Next.js
- TailwindCSS

### 🔧How to Run the App

```bash
  npm run dev
```

### 🕵️‍♀️ Testing

[TO DO]

### 💭Future Improvements

- Validation on all fields in forms
- Type checking for all four components
- To Do component:
  - Program a modal to add "to dos" to the list (with the ability to add a date/time)
- Schedule component:
  - Show the item added from "to do" in the correct time slot range
- Habit tracker component:
  - Program functionality on the checkbox to change the range of the green bar (over period of time of a week, month, year etc.)
- Reminders component:
  - Program email functionality
- Mood tracker component:
  - Some form of showing analysis of click on different emojis
  - Potentially to be removed from whole thing
- Handle how user is redirected if not logged in
- What happens to base page? (currently using /notes)
- Unit tests
- Delete other unncessary files that came with bootstrapped supabase/next.js app
- Header/nav bar component
  - log in/out button
  - flip between days in the calendar - have a date picker the user can go to
  - save icon button to save all the data from different components
- Centralise all data to be coming from the index page/think about state management
- Make all state go from the top, so setting data and showing/hiding the modal (all the same in all components)
- Must change the onSubmit - window location isn't a good fix (do more research on validatePath when it comes to server side)
