import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const SearchBar = (props) => {
    return (
        <View style={StyleSheet.container}>
            <TextInput 
                placeholder={props.placeholder}
                onChangeText={(value) => props.onSearch(value)}
            />
        </View>
    )
}

export {SearchBar}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        margin: 5,
        padding: 5,
        borderRadius: 5,
    }
})