import auth from '@react-native-firebase/auth';

export const createUser = async (
  fullname: string,
  email: string,
  password: string,
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);

    await user.user.updateProfile({displayName: fullname});
    console.log(user);
    return user;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Email Already exists!');
    } else if (error.code === 'auth/invalid-email') {
      console.log('Invalid Email!');
    }
    console.log(error);
  }
};
