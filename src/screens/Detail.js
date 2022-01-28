import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, ImageBackground} from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import { apiGetDetailMovie } from '../services/api';

const Detail = ({navigation, route}) => {
   // props or params
   const routeParams = route?.params;

   //state
   const [detail, setDetail] = useState();
   const [loading, setLoading] = useState(true);

   async function getDetailMovie() {
      console.log('params', routeParams)
      const response = await apiGetDetailMovie(routeParams?.movieId);
      setLoading(false);

      if (response?.data) {
         setDetail(response?.data?.tvShow);
      }
   }

   useState(() => {
      getDetailMovie();
   }, [])

   return (
      <View style={styles.container}>
         <Header
            headerTitle={'Detail'}
            onBack={() => navigation.goBack()}
         />
         {
            loading ?
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
               <ActivityIndicator color={"blue"} size={"large"} />
            </View>
            :
            <ScrollView showsVerticalScrollIndicator={false} >
               <ImageBackground
                  source={{uri: detail?.image_path}}
                  style={styles.movieImage}
                  resizeMode="cover"
               >
                  <Text style={styles.textTitleCenter}>{detail?.name}</Text>
               </ImageBackground>
               <View style={styles.content}>
                  <Text style={styles.movieTitle}>{detail?.name}</Text>
                  <Text>Country: {detail?.country}</Text>
                  <Text>{detail?.description}</Text>
               </View>
            </ScrollView>
         }
      </View>
   )
}

export default Detail;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white'
   },
   movieImage: {
      width: '100%',
      height: 400,
      justifyContent: 'center',
      alignItems: 'center'
   },
   content: {
      padding: 10,

   },
   movieTitle: {
      fontSize: 18,
      fontWeight: 'bold'
   },
   textTitleCenter: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
   }
});