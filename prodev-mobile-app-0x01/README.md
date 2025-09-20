# 📱 prodev-mobile-app-0x01

## 2. Implementing Mobile Components in React Native

### 🎯 Objective
Build a simple React Native app using Expo that demonstrates:
- Usage of predefined components (`View`, `Text`).
- Applying styles with `StyleSheet`.
- Creating multiple styled text components.

---

### 🛠️ Steps Followed

1. **Initialized a New Project**
   ```bash
   npx create-expo-app@latest prodev-mobile-app-0x01
   ```
2. **Reset the Application**

   - Removed default template files.

   - Started with a clean slate in app/index.tsx.

3. **Updated Main Screen**

   - Changed the main <Text> to:

      ```nginx
      Entry Screen - Awesome
      ```

4. **Added Extra Components**
   
   - Inserted three additional <Text> components inside a <View>:

      - **Large text:** "Typescript is great if you practice more"

      - **Medium text:** "React Native provides you a single codebase for cross platforms"

      - **Small text:** "ALX is awesome"

5. **Defined Styles**

   - Used StyleSheet.create() with custom colors, font sizes, weights, and alignments.

## 📂 Project Structure
```pgsql
prodev-mobile-app-0x01/
├── app/
│   └── index.tsx   # Main entry file
├── package.json
└── README.md
```