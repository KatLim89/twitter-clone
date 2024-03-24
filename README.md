# Twitter Clone using React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
---------------------------------------------------------
Tools [branch: main]:
1. Backend database built using PostgreSQL in Neon (https://neon.tech/)
2. Authentication (register/login/logout) using JSON Web Token (JWT) stored in local storage
3. Frontend UI styled with Bootstrap, React Bootstrap & Bootstrap Icons
4. Frontend base coding refactored with React Redux toolkit (async thunk functions)
5. Bonus addition: AI chatbot built using OpenAI API

Tools [branch: firebase-v1]:
1. Authentication function replaced with Firebase Authentication, including login using Google account
2. Backend database replaced with Firestore Database (NoSQL)
3. Includes: Firebase Storage to store uploaded images

--------------------------------------------------------
Live demo hosted on Vercel: https://twitter-clone-lac-sigma.vercel.app/

** Minor issue (unsolved): unable to redirect to login page after logging out; need to manually change the website address to default (remove "/profile" from the end)

Working buttons in sidebar: Chatbot, Logout, Tweet

- Clicking on Chatbot / Tweet button will open a Modal window.
- Please be patient as AI Chatbot takes a few seconds to respond to user input, depending on complexity.

Working buttons in each post: heart (like/unlike function), pencil (edit function), trash-bin (delete function)

- Clicking on trash-bin button will open a Modal window to confirm Delete action.
