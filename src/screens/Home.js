import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import axios from 'axios';

const Home = ({navigation}) => {
   const [data, setData] = useState();

   function getMovieList() {
      axios.get('https://www.episodate.com/api/most-popular?page=1'
      ).then((response) => {
         console.log('response', response);
         if (response.data) {
            setData(response?.data);
         }
      }).catch((err) => {
         console.log('err', err);
      })
   }

   useEffect(() => {
      getMovieList();
   }, []);

   console.log('data', data)

   return (
      <View style={styles.container}>
         <Text>Home screen</Text>
         {/* <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={styles.buttonHome}>
            <Text style={{color: 'white'}}>Go To Detail</Text>
         </TouchableOpacity> */}
         <FlatList
            data={data?.tv_shows}
            renderItem={({item})=> (
               <TouchableOpacity 
                  onPress={() => navigation.navigate('Detail', {movieId: item?.id})} 
                  style={styles.movieCard}
               >
                  <View style={styles.row}>
                     <Image
                        source={{uri: item?.image_thumbnail_path}}
                        style={styles.movieThumbnail}
                        resizeMode="contain"
                     />
                     <View>
                        <Text style={styles.movieTitle}>{item?.name}</Text>
                        <Text>Country: {item?.country}</Text>
                     </View>
                  </View>
                 
               </TouchableOpacity>
            )}
         />
      </View>
   )
}

export default Home;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white'
      // justifyContent: 'center',
      // alignItems: 'center'
   },
   row: {
      flexDirection: 'row'
   },
   movieCard: {
      backgroundColor: 'white',
      marginVertical: 10,
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 5,
      // shadow
      shadowColor: 'rgba(46, 50, 132, 0.15)',
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 4,
   },
   movieThumbnail: {
      width: 100,
      height: 100
   },
   movieTitle: {
      fontSize: 16,
      fontWeight: 'bold'
   },
   buttonHome: {
      marginTop: 10,
      backgroundColor: 'blue',
      padding: 10
   }
});