# 📸 **PhotoFolio**

**PhotoFolio** is a **photo album management web app** built with **React** and **Firebase Firestore**.  
It lets users **create, view, and manage albums**, and organize photos inside them.  

---

## 🚀 **Features**

- 📂 **Albums Management** – Create, view, and delete albums  
- 🖼️ **Photo Organization** – Manage photos inside albums  
- 🔥 **Firebase Firestore Integration** – Store albums & photos in the cloud  
- ⚡ **React State Management** – Smooth UI updates without refresh  
- 🎉 **React-Toastify Notifications** – Beautiful success/error alerts  
- ⏳ **Loading Indicators** – Show spinner while fetching data  

---

## 🛠️ **Tech Stack**

- **Frontend:** React, CSS  
- **Backend / Database:** Firebase Firestore  
- **UI Feedback:** React-Toastify, Spinner Material  

---

## 📂 **Project Structure**

PhotoFolio/
│── src/
│ ├── api/
│ │ ├── albumApi.js # Album-related API
│ │ └── imageApi.js # Image-related API
│ ├── components/
│ │ ├── albumsList/ # Albums List & logic
│ │ ├── albumForm/ # Album form for adding albums
│ │ ├── imageList/ # Show images inside album
│ │ ├── carousel/ # Image preview carousel
│ │ └── navbar/ # Navbar component
│ ├── assets/ # Static images/icons
│ ├── firebaseinit.js # Firebase config & init
│ ├── App.jsx # Root component
│ └── main.jsx # React entry point
│
└── README.md

yaml
Copy code

---

## ⚙️ **Installation & Setup**

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/your-username/photofolio.git
cd photofolio
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Setup Firebase
Go to Firebase Console

Create a new project

Enable Firestore Database

Add your Firebase config inside firebaseinit.js

js
Copy code
// src/firebaseinit.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MSG_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
4️⃣ Start the project
bash
Copy code
npm run dev
📸 Screenshots
✨ Add screenshots of your app UI here for better presentation

🎯 Future Improvements
🔐 Add Firebase Authentication

☁️ Store images in Firebase Storage

🔍 Add search & filter functionality for albums

📱 Make app responsive for mobile devices

🤝 Contributing
Fork the repository

Create a new branch (feature-xyz)

Commit your changes

Push to your branch

Create a Pull Request

📬 Contact Me
👤 Name: Abhishek Rawat
📧 Email: devabhishekrawat@gmail.com


