# Digital Journal

Add items to a to do list and see them in a schedule, create reminders and keep a habit tracker in one app.

### 📋Aims of App

This app enables you to be able to:

- Sign up
- Log in/out
- Add an item into the 'To Do' list with a specific time
- See the "To Do' item in the schedule at the given time
- Edit and delete items in 'To Do', 'Reminders' and 'Habit Tracker'
- Add items into 'Reminders' and 'Habit Tracker'
- Select an emoji from the picker on 'Habit Tracker'

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

- React testing library

### 💭Future Improvements

- Refactor and ensure no DRY practises around codebase
- Add dynamic routing to jump between different dates
- Enable save button on each page

**March 2024: This project is abounded until further improvements/clearer direction is made on Next.js server components working with auth within Supabase as there is an known error of: `Invariant: Method expects to have requestAsyncStorage, none available` when deploying. In addition to this, functionality such as `revalidatePath` also seem to be in flight mode and not working as they should be.**
