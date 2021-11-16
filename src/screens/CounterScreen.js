import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text>
                <Button title="Increase" onPress={() => {
                    setCounter(counter + 1);
                }} />
                <Button title="Decrease" onPress={() => {
                    setCounter(counter - 1);
                }} />
                Current Count: {counter}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default CounterScreen;
// imr = import React from 'react'
// imrn = import { moduleName } from 'react-native'

// slr = Stateless Component Return, i.e the const CounterScreen and export default
// rnss = Stylesheet creating
// Shift + Alt + Down = Duplicate line down