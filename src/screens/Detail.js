import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import axios from 'axios';
import Header from '../components/Header';

const Detail = ({navigation, route}) => {
   // props or params
   const routeParams = route?.params;

   //state
   const [detail, setDetail] = useState();

   function getDetailMovie() {
      console.log('params', routeParams)
      axios(`https://www.episodate.com/api/show-details?q=${routeParams.movieId}`)
      .then((response) => {
         console.log('response detail movie', response)
         setDetail(response.data.tvShow);

      }).catch((err) => {
         console.log('err', err)

      })
   }

   useState(() => {
      getDetailMovie();
   }, [])

   return (
      <View style={styles.container}>
         <Header
            headerTitle={detail?.name || 'Detail'}
            onBack={() => navigation.goBack()}
         />
         <ScrollView showsVerticalScrollIndicator={false} >
            <Image
               source={{uri: detail?.image_path}}
               style={styles.movieImage}
               resizeMode="cover"
            />
            <View style={styles.content}>
               <Text style={styles.movieTitle}>{detail?.name}</Text>
               <Text>Country: {detail?.country}</Text>
               <Text>{detail?.description}</Text>
            </View>
         </ScrollView>
      </View>
   )
}

export default Detail;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white'
      // justifyContent: 'center',
      // alignItems: 'center'
   },
   movieImage: {
      width: '100%',
      height: 300
   },
   content: {
      padding: 10,

   },
   movieTitle: {
      fontSize: 18,
      fontWeight: 'bold'
   }
});