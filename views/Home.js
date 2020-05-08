import React, {useEffect, useState} from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import axios from 'axios';
import { List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';

const Home = ({navigation}) => {

    const [date, saveDates] = useState([]);
    const [readAPI, saveReadAPI] = useState(true);

    useEffect(() => {
        const getDate = async () => {
            try {
                const result = await axios.get('http://127.0.0.1:3000/Dates');
                saveDates(result.data);
                saveReadAPI(false);
            } catch (error) {
                console.log(error);
            }
        }

        if (readAPI) {
            getDate();
        }

       
    }, [readAPI]);


    return ( 
    <View style={globalStyles.container}>

        <Button icon="plus-circle" onPress={() => navigation.navigate("NewDate", {saveReadAPI}) }>
            New Date 
        </Button>

        <Headline style= {globalStyles.title}>{date.length > 0 ? "Dates" : 'There are not dates'}</Headline>


        <FlatList
            data= {date}
            keyExtractor={ date => (date.id).toString() }
            renderItem={ ({item}) => (
                <List.Item
                title= {item.name}
                description= {item.document}
                onPress={() => navigation.navigate("DetailsDate", { item })}
                />
            )} 
        />

        <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => navigation.navigate("NewDate", {saveReadAPI}) }
        />
    </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 20
    }
})

export default Home;