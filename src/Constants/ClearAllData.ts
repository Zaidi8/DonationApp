import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistor} from '@/src/Redux/Reducers/Store'

const clearAllData = async () => {
    try {
      await persistor.purge(); // clears persisted Redux state
      await AsyncStorage.clear(); // optional: clears everything including other keys
      console.log('Storage and Redux state cleared!');
    } catch (e) {
      console.error('Error clearing data:', e);
    }
  };

  export default clearAllData;