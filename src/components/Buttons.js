import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#2f4f4f',
        color: '#fffaf0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 40
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#ff4500',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTiple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTiple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (

        <TouchableHighlight onPress={() => props.onClick(props.label)}>

            <Text style={stylesButton}>{props.label}</Text>
            
        </TouchableHighlight>

    )
}