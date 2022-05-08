import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import BookAction from '../store/actions/book.action';
import { Ebook } from './Home';
import { Rating, AirbnbRating } from 'react-native-ratings';

const Book = (input: { navigation: any }) => {
  const dispatch = useDispatch();
  const activeBook: Ebook = useSelector((state: any) => state.activeBook);
  React.useEffect(() => {
    dispatch(BookAction.loadBook());
    console.log(activeBook);
  });

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 18 }}>
      <View style={styles.bookDetailContainer}>
        <Text style={{ fontSize: 22, fontWeight: '600' }}>{activeBook.name}</Text>
        <Text style={{ fontSize: 12, fontWeight: '300' }}>de {activeBook.Author}</Text>
        <Text style={{ fontSize: 12, fontWeight: '300' }}>{activeBook.year}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center', borderRadius: 100 }}>
              <Image
                key={activeBook.id.toString()}
                source={{ uri: activeBook.imgUrl }}
                style={{
                  width: 168,
                  height: 168,
                  borderRadius: 100,
                  opacity: 0.5,
                  position: 'relative',
                }}
              />
              <Image
                key="playIcon"
                source={require('../../images/playIcon.png')}
                style={{ marginTop: -95, marginLeft: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Estilo: </Text>
              <Text>{activeBook.category}</Text>
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Duración: </Text>
              <Text>5 hrs 30 mins</Text>
            </Text>
            <View style={{ marginLeft: -50 }}>
              <AirbnbRating
                count={5}
                reviews={['Terrible', 'Malo', 'Regular', 'Bueno', 'Muy bueno!']}
                defaultRating={4}
                reviewSize={20}
                size={20}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 4, marginHorizontal: 22 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Reseña del Libro: </Text>
        <Text style={{ paddingTop: 26 }}>{activeBook.description}</Text>
      </View>
    </View>
  );
};

export default connect()(Book);
