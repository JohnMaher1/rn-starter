import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
            <Text style={styles.text}>Home Screen</Text>
            <Button
            style={styles.buttonGap}
            onPress={() => {
              navigation.navigate('Components');
            }} 
            title="Go to Components Demo"
            />
            <Button
            style={styles.buttonGap}
            title="Go to List Demo"
            onPress={() => {
              navigation.navigate('List');
            }}
            />
            <Button
            style={styles.buttonGap}
            title="Go to Image Demo"
            onPress={() => {
              navigation.navigate('Image');
            }}
            />
            <Button
            style={styles.buttonGap}
            title="Go to Counter Demo"
            onPress={() => {
              navigation.navigate('Counter');
            }}
            />
            <Button
            style={styles.buttonGap}
            title="Go to Color Demo"
            onPress={() => {
              navigation.navigate('Color');
            }}
            />
            <Button
            style={styles.buttonGap}
            title="Go to Square Demo"
            onPress={() => {
              navigation.navigate('Square');
            }}
            />
         </View>
   
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonGap: {
    paddingVertical: 20
  }
});

export default HomeScreen;
