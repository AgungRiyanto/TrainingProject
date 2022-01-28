import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ToastAndroid, ActivityIndicator, TextInput} from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import Placeholder from '../components/Placeholder';
import {apiGetListTvShows, apiSearchMovie} from '../services/api';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = ({navigation, route}) => {

   const [data, setData] = useState();
   const [keyword, setKeyword] = useState('');
   const [loading, setLoading] = useState(false);
   const [isLoadMore, setIsLoadMore] = useState(false);

   useEffect(() => {
      if (keyword && keyword.length >= 3) {
         onSearchMovie();
      } else {
         getListTvShows();
      }
   }, [keyword]);


   async function getListTvShows() {
      setLoading(true);
      const response = await apiGetListTvShows(1);
      setLoading(false)

      if (response.data) {
         setData(response.data);
      } 
   }

   async function onSearchMovie() {
      setLoading(true);
      const response = await apiSearchMovie(keyword, 1);
      setLoading(false);
      
      if (response.data) {
         setData(response.data);
      } 
   }

   async function onLoadMore() {
      const currentPage = data?.page;
      const nextPage = currentPage + 1;
      const lastPage = data?.pages;

      if (nextPage <= lastPage && !isLoadMore) {
         setIsLoadMore(true)
         const response = await apiGetListTvShows(nextPage);

         if (response.data) {
            setData({
               ...data,
               ...response.data,
               tv_shows: data.tv_shows.concat(response.data.tv_shows)
            });
            setIsLoadMore(false);
         }
         
      }
   }

   return (
      <View style={styles.container}>
         <Header
            headerTitle="List Movie"
         /> 
         <View style={[styles.row, styles.searchInput]}>
            <TextInput
               placeholder='Search Movie...'
               style={{paddingVertical: 0}}
               value={keyword}
               onChangeText={(text) => setKeyword(text)}
            />
            <AntDesign name="search1" size={20} color="gray" />
         </View>
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
   },
   row: {
      flexDirection: 'row'
   },
   justifyContent: {
      justifyContent: 'space-between'
   },
   searchInput: {
      borderWidth: 1,
      borderColor: 'gray',
      marginHorizontal: 13,
      marginTop: 10,
      paddingVertical: 5,
      borderRadius: 5,
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      alignItems: 'center'
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