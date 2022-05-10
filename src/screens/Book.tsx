import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import BookAction from '../store/actions/book.action';
import { Ebook } from './Home';
import { AirbnbRating } from 'react-native-ratings';
import { Player } from '../audioplayer/player';

const Book = (input: { navigation: any }) => {
  const [playing, setPlaying] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const dispatch = useDispatch();
  const activeBook: Ebook = useSelector((state: any) => state.activeBook);
  React.useEffect(() => {
    dispatch(BookAction.loadBook());
    console.log(activeBook);
  });

  const handlePlay = () => {
    if (!playing) {
      Player.play(activeBook.audioUrl);
      setPlaying(true);
    } else {
      if (!paused) {
        Player.pause();
        setPaused(true);
      } else {
        Player.resume();
        setPaused(false);
      }
    }
  };

  const handleIcon = () => {
    if (!playing || paused) {
      return require('../../images/playIcon.png');
    } else {
      return require('../../images/pauseIcon.png');
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 18 }}>
      <View style={styles.bookDetailContainer}>
        <Text style={{ fontSize: 22, fontWeight: '600', color: '#1F1300' }}>{activeBook.name}</Text>
        <Text style={{ fontSize: 12, fontWeight: '300', color: '#1F1300' }}>de {activeBook.Author}</Text>
        <Text style={{ fontSize: 12, fontWeight: '300', color: '#1F1300' }}>{activeBook.year}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <TouchableOpacity
              style={{ display: 'flex', alignItems: 'center', borderRadius: 100 }}
              onPress={() => handlePlay()}
            >
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
              <Image key="playIcon" source={handleIcon()} style={{ marginTop: -95, marginLeft: 6 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <Text>
              <Text style={{ fontWeight: 'bold', color: '#1F1300' }}>Estilo: </Text>
              <Text style={{ color: '#1F1300' }}>{activeBook.category}</Text>
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold', color: '#1F1300' }}>Duración: </Text>
              <Text style={{ color: '#1F1300' }}>5 hrs 30 mins</Text>
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
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1F1300' }}>Reseña del Libro: </Text>
        <Text style={{ paddingTop: 26, color: '#1F1300' }}>{activeBook.description}</Text>
      </View>
    </View>
  );
};

export default connect()(Book);
