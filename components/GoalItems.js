import {StyleSheet , View, Text,Pressable } from 'react-native';

function goalItems(props) {
    return (
        <Pressable
      onPress={props.onDeleteItem}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.pressableContainer,
      ]}
    >
      <View style={styles.goalItems}>
        <Text style={styles.goaltext1}>{props.text}</Text>
      </View>
    </Pressable>
    );
};



const styles = StyleSheet.create({
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
export default goalItems;