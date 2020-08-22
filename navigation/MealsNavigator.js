import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import MenuScreen from '../screens/MenuScreen';
import RegisterScreen from '../screens/RegisterScreen';
import hello from '../screens/hello';
import flex from '../screens/flex';
import dice from '../screens/dice';
import currency from '../screens/currency';
import welcome from '../screens/welcome';

const MealsNavigator = createStackNavigator({
  welcome:welcome,
  Login : LoginScreen,
  Menu: MenuScreen,
  Register: RegisterScreen,
  hello: hello,
  flex: flex,
  Dice: dice,
  currency: currency,
});

export default createAppContainer(MealsNavigator);