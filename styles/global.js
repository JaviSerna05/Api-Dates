import  { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: '2.5%'

    },

    title: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 5,
        fontSize: 20
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 20
    }
});

export default globalStyles;