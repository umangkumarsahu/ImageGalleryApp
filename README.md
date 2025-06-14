# 📸 ImageGalleryApp

A simple React Native app that fetches and displays recent images from Flickr using their public API. It features image caching using AsyncStorage so that previously viewed images can be seen offline.

## 🚀 Features

- Shows recent images from Flickr
- Image caching using AsyncStorage
- Offline access to last viewed images
- React Navigation Drawer with a “Home” option

---

## 📦 Dependencies

- `react-native`
- `axios`
- `@react-navigation/native`
- `@react-navigation/drawer`
- `@react-native-async-storage/async-storage`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-safe-area-context`
- `react-native-screens`

---

## 🛠️ Installation Steps

1. Clone the Repository**  
   ```bash
   git clone https://github.com/umangkumarsahu/ImageGalleryApp.git
   cd ImageGalleryApp
2. Install Dependencies
   npm install
3. Run the App
   npx react-native run-ios

🧪 Testing Offline Mode
1.Run the app with internet access.

2. Wait for the images to load.

3. Close the app.

4. Turn off internet access.

5. Reopen the app — previously viewed images should load from cache.



API Used
https://jsonplaceholder.typicode.com/photos


📁 Folder Structure
ImageGalleryApp/
├── App.js
├── package.json
├── README.md





