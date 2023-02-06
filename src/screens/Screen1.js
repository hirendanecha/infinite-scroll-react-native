import React, {useState, useEffect} from 'react';
import {FlatList, Image, SafeAreaView} from 'react-native';
import {StyleSheet, View} from 'react-native';
import globalImage from '../assets';
import CustomModal from '../components/CustomModal';

const Screen1 = () => {
  const imageData = [
    {
      pic: globalImage.pic1,
    },
    {
      pic: globalImage.pic2,
    },
    {
      pic: globalImage.pic3,
    },
    {
      pic: globalImage.pic4,
    },
    {
      pic: globalImage.pic5,
    },
    {
      pic: globalImage.pic6,
    },
    {
      pic: globalImage.pic7,
    },
    {
      pic: globalImage.pic8,
    },
    {
      pic: globalImage.pic9,
    },
  ];
  const [animatedData, setAnimatedData] = useState([
    ...imageData,
    ...imageData,
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    showModel();
  }, []);

  const showModel = () => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 10000);
    return () => clearTimeout(timer);
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.pic} style={styles.itemImage} />
      </View>
    );
  };
  const fetchMore = () => {
    if (animatedData) {
      setAnimatedData([...animatedData, ...imageData]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={3}
        data={animatedData}
        renderItem={renderItem}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.3}
      />
      <CustomModal
        modalVisible={modalVisible}
        onClose={() => {
          setModalVisible(!modalVisible);
          showModel();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 4,
  },
});
export default Screen1;
