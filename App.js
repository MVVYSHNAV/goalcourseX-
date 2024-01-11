// App.js
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text,  View, FlatList } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(goalKey) {
    // Implement logic to delete the goal with the given key
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== goalKey)
    );
  }



  return (
    <View style={styles.container}>
      <Text> GOAL LISTER </Text>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalscontainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItems
              text={itemData.item.text}
              onDeleteItem={() => deleteGoalHandler(itemData.item.key)}
            />
          )}
          keyExtractor={(item, index) => item.key}
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

 
  goalscontainer: {
    flex: 5,
  },
});
