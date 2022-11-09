import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import SplashScreen from './src/SplashScreen';

import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LogInScreen from './src/LogInScreen';
import RegisterScreen from './src/RegisterScreen';
import HomeMainPage from './FrontUser/NormalUser/HomeMainPage';

import volunteerHomePage from './FrontUser/VolUser/volenteerHomePage';

import foodOfficerHomePage from './GovUser/FoodOfficer/foodOfficerHomePage';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
	<NavigationContainer>
		<Navigator initialRouteName='splash'>
			<Screen name='splash' component={SplashScreen} />
			<Screen name='Login' component={LogInScreen} />
			<Screen name='main' component={MainContainer} />
			<Screen name='register' component={RegisterScreen} />
			<Screen name='userHome' component={HomeMainPage} />
			<Screen name='volenteerHome' component={volunteerHomePage}/>

			{/* food officer */}
			<Screen name='foodOfficerHome' component={foodOfficerHomePage} />

		</Navigator>
	</NavigationContainer>
);

export default AppNavigator;
