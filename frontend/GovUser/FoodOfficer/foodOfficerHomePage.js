import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import CasesScreen from './screens/CasesScreen';
import DonationsScreen from './screens/DonationsScreen';
import ProfileScreen from './screens/ProfileScreen';

//Screen names
const homeName = 'Home';
const projects = 'Projects';
const cases = 'Cases';
const donations = 'Donations';
const profile = 'Profile';

const Tab = createBottomTabNavigator();

function MainContainer() {
	return (
		<Tab.Navigator
			initialRouteName={homeName}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					let rn = route.name;

					if (rn === homeName) {
						iconName = focused ? 'home' : 'home-outline';
					} else if (rn === cases) {
						iconName = focused ? 'reader' : 'reader-outline';
					} else if (rn === projects) {
						iconName = focused ? 'checkmark-done-circle' : 'checkmark-done-circle-outline';
					} else if (rn === donations) {
						iconName = focused ? 'heart' : 'heart-outline';
					} else if (rn === profile) {
						iconName = focused ? 'person' : 'person-outline';
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'grey',
				labelStyle: { paddingBottom: 10, fontSize: 10 },
				style: { padding: 10, height: 70 },
			}}
		>
			<Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={projects} component={ProjectsScreen} />
			<Tab.Screen name={cases} component={CasesScreen} />
			<Tab.Screen name={donations} component={DonationsScreen} />
			<Tab.Screen name={profile} component={ProfileScreen} />
		</Tab.Navigator>
	);
}

export default MainContainer;
