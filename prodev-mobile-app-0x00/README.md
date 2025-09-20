# 📱 First Mobile App with Expo Router

This project demonstrates the setup of a **React Native mobile application** using the **Expo Router template**.  
The goal is to scaffold a new app, explore its structure, modify the home screen, and observe the effects of resetting the project.

---

## 🎯 Objective
- Scaffold the first mobile application with **Expo Router**.  
- Understand the project structure.  
- Modify the default screen.  
- Document the effects of `reset-project`.

---

## ⚙️ Steps Followed

### 1. Navigate to Project Directory
```bash
cd prodev-mobile-setup
```

### 2. Initialize Expo Router Project
```
npx create-expo-app@latest .
```

- This command created a new Expo project with Expo Router support.

### 3. Modify the Home Screen

- Open: app/(tabs)/index.tsx

- Locate the default text:

```
Welcome!
```

- Replace with:
```
** First App Created**
```

### 4. Run the App
```
npx expo start
```

- iOS: Scan the QR code with the Camera app.

- Android: Scan the QR code with the Expo Go app.

The modified text appeared on the home screen. ✅


## 🔄 Resetting the Project

Command:
```
npm run reset-project
```

### 📝 Observations

- The project was reset to its initial state.

- All custom changes (e.g., modified text) were removed.

- Cache and temporary files were cleared.

- It returned the app to a clean scaffold as if freshly created.


## 📂 Project Structure (Key Files)
```
prodev-mobile-app-0x00/
│── app-example/
│   ├── app/
│   │   └── (tabs)/
│   │       └── index.tsx      # Modified home screen
│   └── constants/
│       └── Colors.tsx         # Default color configuration
│
│── README.md                  # Documentation

```
