import type { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

type Props = {
  headerImage: ReactElement;
};

export default function ParallaxScrollView({ headerImage }: Props) {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.imageContainer}>
        {headerImage}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});