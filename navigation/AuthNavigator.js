import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SetSavingScreen from '../screens/SetSavingScreen';
import SavingHistoryScreen from '../screens/SavingHistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PlanScreen from '../screens/PlanScreen';
import AddRecordScreen from '../screens/AddRecordScreen';
import SavingRecordScreen from '../screens/SavingRecordScreen';
import SpendingRecordScreen from '../screens/SpendingRecordScreen';
import ProfileCollectionScreen from '../screens/ProfileCollectionScreen';
import PlanEditScreen from '../screens/PlanEditScreen';

const AuthNavigatour = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    SetSaving: { screen: SetSavingScreen },
    SavingHistory: { screen: SavingHistoryScreen },
    Profile: {screen: ProfileScreen},
    Plan: {screen: PlanScreen},
    AddRecord: {screen: AddRecordScreen},
    SavingRecord: {screen: SavingRecordScreen},
    SpendingRecord: {screen: SpendingRecordScreen},
    ProfileCollection:{screen: ProfileCollectionScreen},
    PlanEdit :{PlanEditScreen}
  },
  {
    headerMode: 'none'
  }
)

export default AuthNavigatour;