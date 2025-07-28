import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {authentication} from '../firebaseConfig';

export const createUser = async (
  fullname: string,
  email: string,
  password: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authentication,
      email,
      password,
    );

    await updateProfile(userCredential.user, {
      displayName: fullname,
    });

    return userCredential.user;
  } catch (error: any) {
    throw error; // Rethrow for error handling in UI
  }
};
