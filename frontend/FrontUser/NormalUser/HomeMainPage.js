import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import NewsFeedPage from './NewsFeed';

//Screen names
const NewsFeed = 'NewsFeed';

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
						iconName = focused ? 'NewsFeed' : 'home-outline';
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
			<Tab.Screen name={homeName} component={NewsFeedPage} />
			{/* <Tab.Screen name={detailsName} component={DetailsScreen} />
			<Tab.Screen name={settingsName} component={SettingsScreen} /> */}
		</Tab.Navigator>
        )
    }

}
