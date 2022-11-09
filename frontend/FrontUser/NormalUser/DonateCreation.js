import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class DonateCreation extends React.Component {


    render() {
        return (
            <View style={styles.container}>


                <View style={styles.textContainer}>

                    <Text style={{ fontSize: 45, fontWeight: 'bold', color: '#fff' }}>Choose</Text>
                    <Text style={{ fontSize: 45, fontWeight: 'bold', color: '#fb7e00' }}>One</Text>

                </View>

                <View style={styles.containerTwo}>

                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: 70 }}>Want To Donate ?</Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'black', marginTop: 5 }}>Create Case</Text>



                    <View style={styles.buttonContainer} >
                        <View style={styles.circleButtons}>
                        <Ionicons style={{marginTop:25}} name={'fast-food'} size={70} color={'white'}/>
                        <Text style={{ fontSize: 25, fontWeight: '400', color: 'black', marginTop: 50 }}>Food</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: 'black', marginTop: 2, justifyContent: 'center', alignItems: 'center',textAlign:'center' }}>Donate your food for needy</Text>
                        </View>
                        <View style={styles.circleButtonsWithBoarder}>
                        <FontAwesome5 style={{marginTop:25}} name={'hands-helping'} size={70} color={'black'}/>
                        <Text style={{ fontSize: 25, fontWeight: '400', color: 'black', marginTop: 50 }}>Case</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: 'black', marginTop: 2, justifyContent: 'center', alignItems: 'center',textAlign:'center' }}>Create a case for home</Text>
                        </View>


                    </View>
                    <Image style={styles.image} source={require('../../assets/donate.webp')} />

                </View>


                {/* <Text
                    onPress={() => alert('This is the "Home" screen.')}
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Create Donation</Text> */}

            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#3d475f',
    },
    containerTwo: {
        flex: 5,
        width: 490,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    buttonContainer: {
        marginTop:15,
        flexDirection: 'row'
    },
    circleButtons: {
        width: 130,
        backgroundColor: '#fb7e00',
        borderRadius: 100,
        height: 130,
        margin:30,
        alignItems: 'center',

    },
    circleButtonsWithBoarder: {
        width: 130,
       
        borderRadius: 100,
        height: 130,
        margin:30,
        alignItems: 'center',
        borderColor:'#fb7e00',
        borderWidth:3

    },image: {
		width: 300,
		height: 300,
		marginTop: 103,
	},

})