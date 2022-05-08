import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import BookAction from '../store/actions/book.action';
import { Ebook } from './Home';

const Book = (input: { navigation: any }) => {
  const dispatch = useDispatch();
  const activeBook: Ebook = useSelector((state: any) => state.activeBook);
  React.useEffect(() => {
    dispatch(BookAction.loadBook());
    console.log(activeBook);
  });

  return (
    <View style={styles.bookDetailContainer}>
      <Text style={{ fontSize: 22, fontWeight: '600' }}>{activeBook.name}</Text>
      <Text style={{ fontSize: 12, fontWeight: '300' }}>de {activeBook.Author}</Text>
      <Text style={{ fontSize: 12, fontWeight: '300' }}>{activeBook.year}</Text>
      <TouchableOpacity style={{ display: 'flex', alignItems: 'center', alignContent: 'center', borderRadius: 100 }}>
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
        <Image key="playIcon" source={require('../../images/playIcon.png')} style={{ marginTop: -100 }} />
      </TouchableOpacity>
    </View>
  );
};

export default connect()(Book);
