import { createAppContainer, createStackNavigator } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import SighnUpScreen from './src/screens/SighnUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import firebase from 'firebase';
import ENV from'./env.json';


require("firebase/firestore");

const config = {
  apiKey:       ENV.FIREBASE_API_KEY,
  authDomain:   ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:  ENV.FIREBASE_DB_URL,
  projectId:    ENV.FIREBASE_PRJ_ID,
  storageBucket:ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
  firebase.initializeApp(config);

const App = createStackNavigator({

    Login:      LoginScreen,
    signIN:     SighnUpScreen,
    Home:       MemoListScreen,
    MemoEdit:   MemoEditScreen,
    MemoDetail: MemoDetailScreen,
    MemoCreate:   MemoCreateScreen,
  },
{
  defaultNavigationOptions: {
      headerTitle:'在宅医療連携システム「ゆい」',
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerBackTitle: '戻る',
      headerTintColor: '#fff',
      headerTitleStyle: {
        color:'#fff',
        fontSize:24,
      },
    },
});
export default createAppContainer(App);
