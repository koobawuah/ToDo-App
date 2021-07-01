import React, {useState} from 'react';
import { Alert, ScrollView, StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, View, Platform, Keyboard } from 'react-native';

import TaskInput from './components/TaskInput'
import Task from './components/Task';

export default function App() {

  const [item, setItem] = useState();
  const [taskList, setTaskList] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.heading}>Today</Text>
           { 
           taskList.length <= 0?<Text style={styles.paragraph}>No Tasks today!</Text>
           :taskList.map( (item, index) => 
              <Task 
                key={index} 
                onPress={ () => {
                  let taskListCopy = [...taskList];
                  taskListCopy.splice(index, 1);
                  setTaskList(taskListCopy)
                }}
                text={item} 
                /> ) }  
      </ScrollView>

      <KeyboardAvoidingView 
        style={styles.footer}
        behavior={Platform.OS === 'ios'?'padding':'height'} >

          <TaskInput 
            btnText='+'
            textValue={item}
            onChangeText={ text => setItem(text)}
            onPress={ () => { Keyboard.dismiss(); setItem(null); return ( 
              !item?Alert.alert('Please Add a Task', 'You must input a task you want to accomplish today!'):setTaskList( [...taskList, item] )
            ) } }
              />

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    paddingTop: 30,
  },
  content: {
    flexGrow: 4,
    paddingHorizontal: 35,
  },  
  footer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  heading: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 25,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: '400',
    justifyContent: 'center',
    color: '#666',
  },
});
