import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Scrollbar } from 'react-scrollbars-custom';

type Props = {
  headerImage: React.ReactElement;
};

export default function ParallaxScrollView({ headerImage }: Props) {
  return (
    <ThemedView style={styles.container}>
      <Scrollbar style={styles.scrollbar}>
        <View style={styles.imageContainer}>
          {headerImage}
        </View>
      </Scrollbar>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollbar: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});