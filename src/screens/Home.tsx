import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { styles } from './styles';

import database from '@react-native-firebase/database';
import { useDispatch } from 'react-redux';
import BookAction from '../store/actions/book.action';

export type Ebook = {
  id: number;
  name: string;
  imgUrl: string;
  Author: string;
  price: string;
  description: string;
  category: string;
  year: number;
};

const Home = (input: { navigation: any }) => {
  const dispatch = useDispatch();
  const [ebooks, setEbooks] = React.useState<Ebook[]>([]); // Initial empty array of users

  React.useEffect(() => {
    const onValueChange = database()
      .ref('/')
      .on('value', (snapshot) => {
        if (ebooks.length <= 8) {
          setEbooks([...snapshot.val()]);
        }
      });
    return () => database().ref('/').off('value', onValueChange);
  }, [ebooks]);

  const renderItem = (item: Ebook) => {
    return (
      <TouchableOpacity onPress={() => setActiveBook(item)}>
        <Image
          key={item.id.toString()}
          source={{ uri: item.imgUrl }}
          style={{ width: 172, height: 209, marginBottom: 16, marginLeft: 8 }}
        />
      </TouchableOpacity>
    );
  };

  const setActiveBook = (book: Ebook) => {
    dispatch(BookAction.addBook(book));
    input.navigation.navigate('Book');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.homeHeaderText}>Qué historia escucharás hoy?</Text>
      </View>
      <View style={styles.booksContainer}>
        <FlatList
          data={ebooks}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Home;
