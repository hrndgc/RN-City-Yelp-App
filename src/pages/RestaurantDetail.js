import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const RestaurantDetail = (props) => {
    const {selectedRestaurant} = props.route.params;
    
    return(
        <SafeAreaView>
            <View>
                <Text>Restaurant Detail</Text>
            </View>
        </SafeAreaView>
    );
}

export {RestaurantDetail}