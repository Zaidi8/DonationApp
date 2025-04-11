import '../global.css';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from '@/src/Redux/Reducers/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from '@/src/Redux/Reducers/Store';
import Home from '@/src/Screens/Home';
import DonationDetails from '@/src/Screens/DonationDetails';
import SignIn from '@/src/Screens/SignIn';
import SignUp from '@/src/Screens/SignUp';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Registration"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DonationDetails"
            component={DonationDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </PersistGate>
    </Provider>
  );
}
