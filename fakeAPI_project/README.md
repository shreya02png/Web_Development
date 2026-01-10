# Fake API Fetch Project (Async JavaScript)

This is a simple beginner-friendly project that explains **Asynchronous JavaScript**, **Promises**, and the **Event Loop** using a fake API.  
The project shows how real websites fetch data without freezing the page.

# What I Learnt

- How JavaScript works asynchronously
- What a Promise is
- How `async` and `await` work
- How the Event Loop handles background tasks
- How to fetch data without blocking the UI
- How real websites load data


# Stack Used

- HTML
- CSS
- JavaScript (Async / Await)

# How This Project Works

1. User clicks **"Get User Data"** button  
2. JavaScript calls a **fake API function**
3. Fake API waits for 2 seconds (like real server)
4. Page shows **Loading...**
5. After 2 seconds, user data is displayed
6. Website does NOT freeze during loading

# Why Fake API?

Real APIs take time to respond.  
This fake API uses `setTimeout()` to **simulate real network delay** so beginners can understand async behavior easily.

# Key JavaScript Concepts Used

## Promise
A promise represents a value that will be available **later**.

## Async / Await
Allows writing asynchronous code in a **simple and readable** way.

## Event Loop
Handles background tasks like API calls without blocking the main thread.


## Code Explanation

- `fakeAPI()` returns a Promise
- `setTimeout()` simulates API delay
- `await` waits for the promise result
- UI updates after promise resolves
