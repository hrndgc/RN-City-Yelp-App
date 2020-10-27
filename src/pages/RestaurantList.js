import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { RestaurantItem } from '../components';

const RestaurantList = (props) => {
    const [restaurantList, setRestaurantList] = useState([]);
    const {selectedCity} = props.route.params;
    


    const fetchReestaurants = () => {
        axios.get(
            'https://opentable.herokuapp.com/api/restaurants', 
        {
            params: {
                city: selectedCity
            }
        })
        .then(response => {
            setRestaurantList(response.data.restaurants);
        })
    }

    useEffect(() => {
        fetchReestaurants();
    }, [])

    const renderRestaurants = ({item}) => {
        return (
            <RestaurantItem
                restaurant={item}
            />
        )
    }

    return(
        <SafeAreaView>
            <View>
                <Text>{selectedCity}</Text>
                <FlatList 
                    data={restaurantList}
                    renderItem={renderRestaurants}
                />
            </View>
        </SafeAreaView>
    );
}

export {RestaurantList}