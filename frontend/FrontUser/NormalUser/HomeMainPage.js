import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import NewsFeedPage from './NewsFeed';
import DonateCreation from './DonateCreation';
import DonateDonation from './DonateDonation';
import Notification from './Notification';
import Profile from './Profile';

//Screen names
const NewsFeed = 'NewsFeed';
const CREATE = 'Create';
const DONATE = 'Donate';
const PROFILE = 'Profile';
const NOTIFICATION = 'Notification';

const Tab = createBottomTabNavigator();

export default class HomeMainPage extends React.Component {


    render(){
        return(
            <Tab.Navigator
			initialRouteName={NewsFeed}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					let rn = route.name;

					if (rn === NewsFeed) {
						iconName = focused ? 'logo-buffer' : 'logo-buffer';
					} else if (rn === CREATE) {
						iconName = focused ? 'add' : 'add-outline';
					} else if (rn === DONATE) {
						iconName = focused ? 'md-heart' : 'md-heart-outline';
					}else if (rn === NOTIFICATION) {
						iconName = focused ? 'notifications' : 'notifications-outline';
					}else if (rn === PROFILE) {
						iconName = focused ? 'person' : 'person-outline';
					}

					// You can return any component that you like here!
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
			<Tab.Screen name={NewsFeed} component={NewsFeedPage} />
			<Tab.Screen name={CREATE} component={DonateCreation} />
			<Tab.Screen name={DONATE} component={DonateDonation} />
            <Tab.Screen name={NOTIFICATION} component={Notification} />
            <Tab.Screen name={PROFILE} component={Profile} />
		</Tab.Navigator>
        )
    }

}
