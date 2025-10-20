// This file is for testing purposes — it ensures that the Login component loads properly 
// and that input fields (Email and Password) are empty by default.

import { render, screen } from '@testing-library/react'; // Import testing utilities
import Login from '../Components/Login'; // Import the Login component to test

// 🧪 Test Case 1 — Checking whether the component renders successfully
test('Checking whether Component is Loading', () => {
  // Render the Login component into a virtual DOM (provided by React Testing Library)
  render(<Login />);

  // Check if the text "Login" is present on the screen (e.g., heading or button)
  // The 'toBeInTheDocument()' matcher ensures the element exists in the rendered output
  expect(screen.queryByText(/Login/)).toBeInTheDocument();
});

// 🧪 Test Case 2 — Checking whether Email and Password inputs are empty by default
test('Checking Email and Password are empty or Not', () => {
  // Render the Login component again (each test runs independently)
  render(<Login />);

  // Verify the Email input field is empty when the component loads
  // 'queryByPlaceholderText' finds input elements by their placeholder attribute
  expect(screen.queryByPlaceholderText('Enter Email')).toHaveValue("");

  // Verify the Password input field is also empty
  expect(screen.queryByPlaceholderText('Enter Password')).toHaveValue("");
});

/*
------------------------------------------
🧠 Quick Notes for Reference:
------------------------------------------
1️⃣ render(<Component />)
   → Simulates mounting the component into a virtual DOM environment.

2️⃣ screen.queryByText("text")
   → Searches for a text element in the rendered component.

3️⃣ expect(...).toBeInTheDocument()
   → Assertion that checks if the element exists.

4️⃣ expect(...).toHaveValue("")
   → Assertion that checks if an input field is empty or has a specific value.

------------------------------------------
✅ Run Tests:
------------------------------------------
Use this command in your terminal:
   npm test
or to run only this specific test file:
   npm test Login.test.js
------------------------------------------
*/
