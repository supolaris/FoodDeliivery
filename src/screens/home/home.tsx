import { View, Text, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import { homeStyles } from './homeStyles';

const Home = () => {
  return (
    <View style={homeStyles.container}>
      <ScrollView>
        <View style={homeStyles.innerContainer}>
            <StatusBar 
            barStyle='dark-content'
            backgroundColor='white'
            />
            <Text>helo world</Text>

        </View>
      </ScrollView>
    </View>
  )
}

export default Home;