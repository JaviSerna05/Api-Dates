import React from 'react';
import { Button } from 'react-native-paper';

const MenuTop = ({navigation, route}) => {

    console.log(navigation);

    const handlePress = () => {
        navigation.navigate('NewDate');
    }

    return ( 
        <Button icon="plus-circle" color="#0655BF" onPress={ () => handlePress() }>
            New-Date
        </Button>
    );
}

export default MenuTop;
