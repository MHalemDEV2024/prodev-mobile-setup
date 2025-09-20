
# Task 0: Setting Up and Testing Your Environment

**Objective:** Prepare your machine for mobile development.

**✅ Ensure you have:**

- Node.js LTS installed

- VS Code installed

- Expo CLI installed

- Expo Go installed on your device

**📄 Deliverable:**

- Document your setup process and any challenges in this README.

## 🛠 Setup Process (My Notes)

- Checked Node.js installation:
    ```
    node -v
    npm -v
    ```

- Installed Expo CLI:
    ```
    npm install -g expo-cli
    ```

- Created new Expo project with TypeScript:
  ```
  npx create-expo-app MyApp
  cd MyApp
  ```

- Started development server:
  ```
  npx expo start
  ```

- Installed Expo Go on my phone & scanned the QR code.

## ⚡ Challenges Faced (and Solutions)

- (Example) "expo-cli not recognized" → Reinstalled Node.js and updated npm.

- (Example) App not loading → Connected laptop & phone to same Wi-Fi.

(Add your real notes here.)

## ✅ Benefits of This Stack

- Cross-platform: one codebase for Android & iOS.

- Type safety with TypeScript → fewer runtime errors.

- Efficient styling with NativeWindCSS.

- Faster dev cycles with Expo.

## 🚀 Next Steps

- Configure TypeScript (tsconfig.json).

- Install and configure NativeWindCSS.

- Build first screens following mockups.

- Explore Expo APIs (camera, notifications, maps).