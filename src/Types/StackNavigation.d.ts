// types.ts
import { DonationProps } from "../Redux/Reducers/Donations";

export type RootStackParamList = {
  TabsLayout: undefined;
    Login:undefined;
    Registration:undefined;
    Home: undefined; 
    DonationDetails: { donation: DonationProps, badgeCategory:string }; 
  };
  