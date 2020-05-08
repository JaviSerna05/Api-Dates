import React from 'react';
import { View,  StyleSheet } from 'react-native';
import { Headline, Text, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

const DetailsDates = ({route}) => {
    const {name, lastname, document, birthdate, city, sector, phone } = route.params.item;
    return ( 
        <View style={globalStyles.container}>
        <Headline style={globalStyles.title}>{ name }</Headline>
            <Text style={styles.text}>LastName: { lastname }</Text>
            <Text style={styles.text}>Document: { document } </Text>
            <Text style={styles.text}>BirthDate: { birthdate } </Text>
            <Text style={styles.text}>City: { city } </Text>
            <Text style={styles.text}>Sector: { sector } </Text>
            <Text style={styles.text}>Phone: { phone } </Text>

            <Button>
                Delete Date
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 20,
        fontSize: 10
    }
})

export default DetailsDates;