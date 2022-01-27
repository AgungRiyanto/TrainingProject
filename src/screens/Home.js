import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ToastAndroid, ActivityIndicator} from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import Placeholder from '../components/Placeholder';

const Home = ({navigation, route}) => {
   console.log('route =', route);

   const [data, setData] = useState();
   const [email, setEmail] = useState('');
   const [loading, setLoading] = useState(false);
   const [isLoadMore, setIsLoadMore] = useState(false);

   useEffect(() => {
      // ToastAndroid.show(route?.params?.nama, ToastAndroid.LONG);
      // setEmail(route?.params?.email);
      getListTvShows();
   }, []);

   function getListTvShows() {
      setLoading(true);
      axios('https://www.episodate.com/api/most-popular?page=1')
      .then((jsonResponse) => {
         console.log('response using axios', jsonResponse);
         setData(jsonResponse.data);
         setLoading(false);
      }).catch((err) => {
         console.log('err', err);
         // setLoading(false);

      })
   }

   function onLoadMore() {
      const currentPage = data?.page;
      const nextPage = currentPage + 1;
      const lastPage = data?.pages;

      if (nextPage <= lastPage && !isLoadMore) {
         setIsLoadMore(true)
         axios(`https://www.episodate.com/api/most-popular?page=${nextPage}`)
         .then((jsonResponse) => {
            console.log('response using axios', jsonResponse);
            setData({
               ...data,
               ...jsonResponse.data,
               tv_shows: data.tv_shows.concat(jsonResponse.data.tv_shows)
            });
            setIsLoadMore(false);
         }).catch((err) => {
            console.log('err', err);
            setIsLoadMore(false);
         })
         
      }
   }

   console.log('data', data)

   return (
      <View style={styles.container}>
         <Header
            headerTitle="List Movie"
         /> 
         <FlatList
            data={data?.tv_shows}
            onEndReached={() => onLoadMore()}
            onEndReachedThreshold={0.1}
            renderItem={({item}) => (
               <TouchableOpacity 
                  onPress={() => navigation.navigate('HomeNavigation', {screen: 'Detail', params: {movieId: item?.id}})} 
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
            ListEmptyComponent={
               loading ? 
               <Placeholder count={10} />
               :
               <Text>Data kosong</Text>
            }
            ListFooterComponent={
               isLoadMore && 
               <View style={{alignItems: 'center'}}>
                  <ActivityIndicator color={"blue"} size="large" />
               </View>
            }
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
   justifyContent: {
      justifyContent: 'space-between'
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
      height: 100,
      borderRadius: 10
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