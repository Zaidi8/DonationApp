import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../firebaseConfig';

export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(authentication, email, password);

    // ✅ Force reload to fetch the updated profile (i.e., displayName)
    await userCredential.user.reload();

    // 👇 Return the updated currentUser
    return { success: true, user: authentication.currentUser };
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
