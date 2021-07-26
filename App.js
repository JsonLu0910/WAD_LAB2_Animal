
import { createAppContainer } from 'react-navigation';
import {
    createStackNavigator,
} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import AnimalScreen from './AnimalScreen';

const RootStack = createStackNavigator({
    /**
    * This is the route configuration object.
    * It defines 3 routes:
    * 1. Home
    * 2. Chicken
    * 3. Duck
    **
    Each route corresponds to the following screens, respectively:
    * 1. HomeScreen
    * 2. ChickenScreen
    * 3. DuckScreen
    */
    Home: {
        screen: HomeScreen,
    },

    Animal :{
      screen : AnimalScreen,
    },
   
}, {
    /**
    * This is the options object
    */
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#a80000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});
const AppContainer = createAppContainer(RootStack);
export default AppContainer;
