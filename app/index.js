import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import {useState} from 'react';
import {Stack, useRouter} from 'expo-router';

import {Colors, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors.lightWhite,
            paddingTop: SIZES.padding * 2,
        }}>
             
             <Stack.Screen 
             options={{
                headerStyle: {
                    backgroundColor: Colors.lightWhite},

             }}
            //  name="Home" 
            //  component={Home} 
             />


        </SafeAreaView>
    );
    };

export default Home;