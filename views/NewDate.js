import React, { useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const NewDate = ({navigation, route}) => {

    console.log(route.params);
    const {saveReadAPI} = route.params;

    //Form Fields
    const [ name, saveName] = useState('');
    const [ lastname, saveLastName] = useState('');
    const [ document, saveDocument] = useState('');
    const [ birthdate, saveBirthDate] = useState('');
    const [ city, saveCity] = useState('');
    const [ sector, saveSector] = useState('');
    const [ phone, savePhone] = useState('');
    const [ alert, saveAlert] = useState(false);

    //Detect if we are editing
    useEffect(() => {
        if(route.params.date){
            const {name, lastname, document, birthdate, city, sector, phone} = route.params.date;

            saveName(name);
            saveLastName(lastname);
            saveDocument(document);
            saveBirthDate(birthdate);
            saveCity(city);
            saveSector(sector);
            savePhone(phone);
        } 
    }, []);

    const createDate = async () => {
        //Validation
        if (name === '' || phone === '' || lastname === '' || document === ''
        || birthdate === '' || city === '' || sector === '') {
            saveAlert(true);
            return;
        } else {
            
        }
        //Create Date
        const date = { name, lastname, document, birthdate, city, sector, phone};
        console.log(date);

        //If we are edit  or create a new date
        if (route.params.date) {
            const {id} = route.params.date;
            date.id = id;
            const url = `http://127.0.0.1:3000/Dates/${id}`;
            
            try {
                await axios.put(url, date);
            } catch (error) {
                console.log(error);
            }

        }else {
             //Save the date in the API
        try {
            //For Android - ZL4225TWKH 
            await axios.post('http://127.0.0.1:3000/Dates', date);

            // await axios.post('http://localhost:3000/Dates', date)
        } catch (error) {
            console.log(error);
        }
        }
       

        //Redirect
        navigation.navigate('Home');

        //Clean the form
        saveName('');
        saveLastName('');
        saveDocument('');
        saveBirthDate('');
        saveCity('');
        saveSector('');
        savePhone('');

        //Change true for give us the new date
         saveReadAPI(true);
    }

    return ( 
       <View style={globalStyles.container}>
           <Headline style={globalStyles.title}>Add New Date</Headline>

            <TextInput 
                label="Name"
                mode='outlined'
                placeholder="Add your name"
                onChangeText={ text => saveName(text) }
                value={name}
                style={styles.input}
            />
            <TextInput 
                label="LastName"
                mode='outlined'
                placeholder="Add your lastname"
                onChangeText={ text => saveLastName(text)  }
                value={lastname}
                style={styles.input}
            />
            <TextInput 
                label="Document"
                mode='outlined'
                placeholder="Add your number-document"
                onChangeText={ text => saveDocument(text)  }
                value={document}
                maxLength={12}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput 
                label="BirthDate"
                mode='outlined'
                placeholder="Add your birthdate 03/05/1993"
                onChangeText={ text => saveBirthDate(text)  }
                value={birthdate}
                style={styles.input}
            />
            <TextInput 
                label="City"
                mode='outlined'
                placeholder="Add your city"
                onChangeText={ text => saveCity(text)  }
                value={city}
                style={styles.input}
            />
            <TextInput 
                label="Sector"
                mode='outlined'
                placeholder="Add your sector"
                onChangeText={ text => saveSector(text)  }
                value={sector}
                style={styles.input}
            />
            <TextInput 
                label="Mobile Number"
                mode='outlined'
                placeholder="Add your phone-number"
                onChangeText={ text => savePhone(text)  }
                value={phone}
                maxLength={10}
                keyboardType="phone-pad"
                style={styles.input}
            />
            <Button icon="pencil-circle" mode="outlined" onPress={() => createDate()}>
                Create Date
            </Button>

           <Portal>
             <Dialog
                visible={alert}
                onDismiss={ () => saveAlert(false) }
             >

                <Dialog.Title>Error</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>All fields are required</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={ () => saveAlert(false) }>OK</Button>
                </Dialog.Actions>
             </Dialog>
           </Portal>
       </View> 
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 5,
        marginHorizontal: '2.5%'

    }
});

export default NewDate;