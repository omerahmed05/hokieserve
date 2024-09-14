import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

type Props = {
  headerImage: React.ReactElement;
};

export default function ParallaxScrollView({ headerImage }: Props) {
  return (
    <ThemedView style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/vtcampus.png')} // Replace with your background image
        style={styles.background}
      >
        <View style={styles.imageContainer}>
          {headerImage}
        </View>
      </ImageBackground>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});