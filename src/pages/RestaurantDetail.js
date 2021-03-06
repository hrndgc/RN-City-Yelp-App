import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions, Image, Button, Linking} from 'react-native';

const RestaurantDetail = (props) => {
    const {selectedRestaurant} = props.route.params;
    
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={StyleSheet.container}>
                <Text style={styles.name}>Restaurant Detail</Text>

                <Image
                    style={styles.image}
                    source={{uri: selectedRestaurant.image_url}}
                />

                <View> style={styles.infoContainer}
                     <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
                </View>

                <View> style={styles.infoContainer}
                     <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
                </View>

                <View> style={styles.infoContainer}
                     <Text style={styles.infoText}>{selectedRestaurant.phone}</Text>
                </View>

                <Button title="Go for reserve" onPress={() => Linking(selectedRestaurant.mobile_reserve_url)} />
            </View>
        </SafeAreaView>
    );
}

export {RestaurantDetail}

const styles =StyleSheet.create({
    container: {flex: 1, padding: 10},
    name: {fontWeight: '300', fontSize: 30},
    image: {height: Dimensions.get('window').height / 3},
    infoContainer: {
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    infoText: {color: 'white', fontWeight: 'bold'}
})