import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        flexGrow: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'

    },
    buttonContainer: {
        marginTop: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#007BFF',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '80%',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20

    }
});