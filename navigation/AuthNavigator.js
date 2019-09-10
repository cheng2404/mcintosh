import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SetSavingScreen from '../screens/SetSavingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PlanScreen from '../screens/PlanScreen';

const AuthNavigatour = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    SetSaving: { screen: SetSavingScreen },
    Profile: {screen: ProfileScreen},
    Plan: {screen: PlanScreen}
  },
  {
    headerMode: 'none'
  }
)

export default AuthNavigatour;