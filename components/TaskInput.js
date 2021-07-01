import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    Platform, 
    Keyboard } from 'react-native';


const TaskInput = (props) => {


    return (
        <View 
            style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput 
                    placeholder='Type your task here...'
                    style={styles.userInput} 
                    onChangeText={props.onChangeText}
                    value={props.textValue}
                    />

                <TouchableOpacity 
                    style={styles.taskBtn}
                    onPress={props.onPress}
                    >
                    <Text style={styles.btnText}> {props.btnText} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 34,
        marginBottom: 15,
    },
    userInput: {
        width: '75%',
        paddingHorizontal: 13,
        backgroundColor: '#fff',
    },
    taskBtn: {
        padding: 12,
        backgroundColor: '#fff',
    },
    btnText: {
        fontSize: 24,
        fontWeight: '700',
    },
})

export default TaskInput;
