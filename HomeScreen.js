import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, ActivityIndicator } from 'react-native';
import { fetchRecentImages } from '../utils/api';
import { storeData, getData } from '../utils/storage';

export default function HomeScreen() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    try {
      const cached = await getData('images');
      if (cached) setImages(cached);
      const data = await fetchRecentImages();
      if (JSON.stringify(cached) !== JSON.stringify(data)) {
        setImages(data);
        await storeData('images', data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={{ width: 180, height: 180, margin: 5 }}
        />
      )}
    />
  );
}