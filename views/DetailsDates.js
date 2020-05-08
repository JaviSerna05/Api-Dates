import React from 'react';
import { View,  StyleSheet, Alert } from 'react-native';
import { Headline, Text, Button, Subheading, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const DetailsDates = ({navigation, route}) => {
    const { saveReadAPI } = route.params;
    console.log(route.params);
    const {id, name, lastname, document, birthdate, city, sector, phone } = route.params.item;
    const showConfirmate = () => {
        Alert.alert(
            '¿Do you want delete this date?',
            'A deleted date cannot be retrieved',
            [
                {text: 'Yes Delete', onPress: () => deleteDate() },
                {text: 'Cancel', style: 'cancel'}
            ]
        )
    }

    const deleteDate = async () => {
        const url = `http://127.0.0.1:3000/Dates/${id}`;
        console.log(url);
        try {
            await axios.delete(url);
        } catch (error) {
            console.log(error);
        }

        //Redirect
        navigation.navigate('Home');

        //Recheck the API
        saveReadAPI(true);
    }

    return ( 
        <View style={globalStyles.container}>
        <Headline style={globalStyles.title}>{ name + " " + lastname }</Headline>
            <Text style={styles.text}>Document: <Subheading> { document } </Subheading> </Text>
            <Text style={styles.text}>BirthDate: <Subheading> { birthdate } </Subheading>  </Text>
            <Text style={styles.text}>City: <Subheading> { city } </Subheading>  </Text>
            <Text style={styles.text}>Sector: <Subheading> { sector } </Subheading> </Text>
            <Text style={styles.text}>Phone: <Subheading> { phone } </Subheading> </Text>

            <Button style={styles.buttonDelete} mode="outlined" icon="cancel" onPress={() => showConfirmate()}>
                Delete Date
            </Button>

            <FAB
                icon="pencil"
                style={globalStyles.fab}
                onPress={() => navigation.navigate("NewDate", {date:route.params.item,  saveReadAPI}) }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 20,
        fontSize: 15
    },
    buttonDelete: {
        marginTop: 100,
        backgroundColor: '#f05545',
        textDecorationColor: 'blue'
    }
})

export default DetailsDates;