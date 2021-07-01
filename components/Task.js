import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}> 
                <Text style={styles.paragraph}> {props.text} </Text>
                <TouchableOpacity onPress={props.onPress}> 
                    <View style={styles.radioStyle}></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
    },
    taskWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 17,
        paddingHorizontal: 13,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    radioStyle: {
        height: 23,
        width: 23,
        borderRadius: 50,
        backgroundColor: '#c4c4c4',
    },  
    paragraph: {
        flexWrap: 'wrap',
        fontSize: 14,
    },  
})

export default Task;