import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.header1}>
      <TextInput
        style={styles.txtinput}
        placeholder="your course goals"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" color="green" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  header1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  txtinput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
