import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#eee',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 0,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 13,
        borderBottomWidth: 1,
        borderColor: '#dbdbdb',
    },
    iconContainer: {
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
    },
});

export default styles;
