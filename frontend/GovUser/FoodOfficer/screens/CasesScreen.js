import * as React from 'react';
import { Linking } from 'react-native';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from 'react-native';

 
import Strings from './Strings';

export default function CaseScreen({ navigation }) {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text
					style={{
						fontSize: 26,
						fontWeight: 'bold',
						marginTop: 10,
					}}
				>
					Food Crises Cases
				</Text>
				<View style={styles.body}>
					<View style={styles.card2}>
					<Text 
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								marginLeft: 25,
								marginTop: 12,
							}}
							onPress={() => Linking.openURL('http://google.com')}
						>
							Case 01
						</Text>

						 
						 
					</View>
	 
				</View>
				<View style={styles.body2}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 12,
								fontWeight: 'bold',
								marginLeft: 25,
								marginTop: 17,
							}}
						>
							There are two of myfriends suffering from hungerness
						</Text>
					
					</View>
					<TouchableOpacity
							onPress={() =>
								this.props.navigation.navigate(
									Strings.screens.ProfileScreen
								)
							}
							style={styles.btn}
							activeOpacity={0.5}
						>
							<View>
								<Text style={styles.btnTxt}>View </Text>
							</View>
						</TouchableOpacity>
				</View>
				<View style={styles.body}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								marginLeft: 25,
								marginTop: 12,
							}}
						>
							Case 02
						</Text>
	
					</View>
				</View>
				<View style={styles.body2}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 12,
								fontWeight: 'bold',
								marginLeft: 22,
								marginTop: 17,
							}}
						>
							There are two of myfriends suffering from hungerness
						</Text>	 
					</View>
					<TouchableOpacity
							onPress={() =>
								this.props.navigation.navigate(
									Strings.screens.SupplierDashboardScreen
								)
							}
							style={styles.btn}
							activeOpacity={0.5}
						>
							<View>
								<Text style={styles.btnTxt}>View</Text>
							</View>
						</TouchableOpacity>
				</View>

				<View style={styles.body}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								marginLeft: 22,
								marginTop: 10,
							}}
						>
							Case 03
						</Text>
						
					</View>
				</View>
				<View style={styles.body2}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 12,
								fontWeight: 'bold',
								marginLeft: 22,
								marginTop: 17,
							}}
						>
							There are two of myfriends suffering from hungerness
						</Text>
						 
					</View>
					<TouchableOpacity
							onPress={() =>
								this.props.navigation.navigate(
									Strings.screens.ProfileScreen
								)
							}
							style={styles.btn}
							activeOpacity={0.5}
						>
							<View>
								<Text style={styles.btnTxt}>View</Text>
							</View>
						</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#35C953',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 10,
	},
 
	cardImage1: {
		width: 60,
		height: 60,
		margin: 13,
		backgroundColor: '#35C953',
		// borderRadius: 10,
		marginLeft: -50,
		marginTop: 50,
	},
	cardImage2: {
		width: 60,
		height: 60,
		margin: 13,
		backgroundColor: '#35C953',
		// borderRadius: 10,
		marginLeft: -40,
		marginTop: 50,
	},
	cardImage3: {
		width: 60,
		height: 60,
		margin: 13,
		backgroundColor: '#35C953',
		// borderRadius: 10,
		marginLeft: -65,
		marginTop: 50,
	},
	cardImage4: {
		width: 60,
		height: 60,
		margin: 13,
		backgroundColor: '#35C953',
		// borderRadius: 10,
		marginLeft: -90,
		marginTop: 50,
	},
	body: {
		marginTop: 20,
		backgroundColor: '#ffffff',
		width: 350,
		height: 150,
		borderRadius: 10,
	},
	body2: {
		marginTop: -150,
		marginLeft: 170,
		backgroundColor: '#ffffff',
		width: 170,
		height: 150,
		borderRadius: 10,
	},
	loginBtn: {
		backgroundColor: '#ffffff',
		width: 300,
		height: 50,
		justifyContent: 'center',
		borderRadius: 10,
		marginLeft: 30,
		marginBottom: 10,
	},
	loginText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
	card: {
		flexDirection: 'row',
	},
	card2: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		width: 150,
		height: 130,
		marginLeft: 10,
		marginTop: 10,
		borderRadius: 20,
	},
	card3: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		width: 130,
		height: 130,
		marginLeft: 30,
		marginTop: 10,
		borderRadius: 20,
	},
	btnTxt: {
		backgroundColor: '#35C953',
		fontSize: 15,
		textAlign: 'center',
		marginLeft: 50,
		marginTop: -50,
		width: 80,
		height: 20,
	},
});
