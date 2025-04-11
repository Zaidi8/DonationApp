import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Zaid',
  lastName: 'Zaheer',
  userID: 1,
  proileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {setUser} = UserSlice.actions;
export default UserSlice.reducer;
