import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView, FlatList} from 'react-native';
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]); // Fix typo here

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text> GOAL LISTER </Text>
      <View style={styles.header1}>
        <TextInput
          style={styles.txtinput}
          placeholder="your course goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" color="green" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalscontainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.goalItems}>
              <Text style={styles.goaltext1}>{itemData.item.text}</Text>
            </View>
          )}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  txtinput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalscontainer: {
    flex: 5
  },
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5c0acc',
   
  },
  goaltext1: {
    color: 'white'
  }
});
