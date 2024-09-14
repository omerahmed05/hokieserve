import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require('@/assets/images/hokiebird.png')}
          style={styles.hokiebirdLogo}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  hokiebirdLogo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});