import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import { CityItem, SearchBar } from '../components'

const CityList = (props) => {
    const [cityList, setCityList] = useState([]);

   // ASSYNC-AWAIT
    const fetchCityData = async () => {
       const { data } = await axios.get("https://opentable.herokuapp.com/api/cities");
       setCityList(data.cities); 
    }

    useEffect(() => {
        fetchCityData()
    }, [])
    
const renderCities = ({ item }) => <CityItem cityName={item}/>

const renderSeperator = () => <View style={{ borderWidth: 1, borderColor: '#e0e0e0'}} />

    return(
        <SafeAreaView>
            <View>
                <SearchBar 
                    placeholder="Type any city name..." 
                    onSearch={value}
                />
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={cityList}
                    renderItem={renderCities}
                    ItemSeparatorComponent={renderSeperator}
                />
            </View>
        </SafeAreaView>
    )
}

export {CityList}
