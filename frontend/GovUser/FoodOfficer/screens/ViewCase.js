import * as React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { appURLs } from '../../../enums/url';

import axios from 'axios';
import { useRoute } from '@react-navigation/native';

export default function ViewCase(props) {
	const route = useRoute();
	const [id, setId] = React.useState('');
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		console.log(route.params.id);
		var url = appURLs.BaseURL + `foodOfficer/cases/${route.params.id}`;
		axios.get(url).then((res) => {
			console.log(res.data.data);
			setData(res.data.data);
		});
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../../assets/cases.png')}
				/>
				<View style={styles.body}>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold' }}>Case Id :</Text>

						<Text style={{ fontSize: 19 }}>{data.caseId}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold' }}>Case :</Text>

						<Text style={{ fontSize: 19 }}>{data.title}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold' }}>
							Description :
						</Text>

						<Text style={{ fontSize: 19 }}>{data.description}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold' }}>Location :</Text>

						<Text style={{ fontSize: 19 }}>{data.location}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold' }}>
							Open Date :
						</Text>

						<Text style={{ fontSize: 19 }}>{data.openedDate}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold' }}>End Date :</Text>

						<Text style={{ fontSize: 19 }}>{data.endDate}</Text>
					</View>
				</View>
				<TouchableOpacity
					style={styles.loginBtn}
					onPress={() => props.navigation.navigate('assignFam')}
				>
					<Text style={styles.loginText}>Assign Family Details</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 10,
	},
	body: {
		backgroundColor: '#35C953',
		width: 350,
		height: 400,
		borderRadius: 10,
		justifyContent: 'center',
	},
	data: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 30,
		justifyContent: 'center',
	},
	loginBtn: {
		backgroundColor: '#35C953',
		width: 350,
		height: 50,
		justifyContent: 'center',
		borderRadius: 10,
		marginBottom: 10,
		marginTop: 10,
	},
	loginText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
