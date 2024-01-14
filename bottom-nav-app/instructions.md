1) 
npm install @react-navigation/native @react-navigation/bottom-tabs 
@react-navigation/native-stack @react-navigation/drawer
@react-navigation/material-top-tabs react-native-tab-view
2) 
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-pager-view
3) 
in babel.config.js 
add 
  return {
    presets: ['babel-preset-expo'],
    plugins: ["react-native-reanimated/plugin"],
  };

4) 
yarn add expo 
cd into app folder with package.json 
npx expo start  

5) make components folder in app
make navigation.js

make screens folder 
screens/Feed.js 

edit App.js 

6) 
add data folder
add tweets.js 

7) 
add images to assets 

8) 
npm install @firebase/auth