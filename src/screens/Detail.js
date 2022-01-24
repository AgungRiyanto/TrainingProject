import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import axios from 'axios';

const Detail = ({navigation, route}) => {
   // props or params
   const routeParams = route?.params;

   //state
   const [detail, setDetail] = useState();

   function getMovieDetail() {
      axios.get(`https://www.episodate.com/api/show-details?q=${routeParams?.movieId}`
      ).then((response) => {
         console.log('response', response);
         if (response.data) {
            setDetail(response?.data?.tvShow)
         }
      }).catch((err) => {
         console.log('err', err);
      })
   }

   useEffect(() => {
      getMovieDetail();
   }, []);

   return (
      <View style={styles.container}>
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