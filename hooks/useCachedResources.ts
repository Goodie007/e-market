import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'Raleway-Black': require('../assets/fonts/Raleway/static/Raleway-Black.ttf'),
          'Raleway-BlackItalic': require('../assets/fonts/Raleway/static/Raleway-BlackItalic.ttf'),
          'Raleway-Regular': require('../assets/fonts/Raleway/static/Raleway-Regular.ttf'),
          'Raleway-Light': require('../assets/fonts/Raleway/static/Raleway-Light.ttf'),
          //'Raleway-Medium': require('../assets/fonts/Raleway/static/Ralway-Medium.ttf'),
          'Raleway-Bold': require('../assets/fonts/Raleway/static/Raleway-Bold.ttf'),
          'Raleway-BoldItalic': require('../assets/fonts/Raleway/static/Raleway-BoldItalic.ttf'),
          'Raleway-Extralight': require('../assets/fonts/Raleway/static/Raleway-ExtraLight.ttf'),
          'Raleway-ExtraLightItalic': require('../assets/fonts/Raleway/static/Raleway-ExtraLightItalic.ttf'),
          'Raleway-Italic': require('../assets/fonts/Raleway/static/Raleway-Italic.ttf'),
          'Raleway-LightItalic': require('../assets/fonts/Raleway/static/Raleway-LightItalic.ttf'),
          'Raleway-MediumItalic': require('../assets/fonts/Raleway/static/Raleway-MediumItalic.ttf'),
          'Raleway-SemiBold': require('../assets/fonts/Raleway/static/Raleway-SemiBold.ttf'),
          'Raleway-SemiBoldItalic': require('../assets/fonts/Raleway/static/Raleway-SemiBoldItalic.ttf'),
          'Raleway-Thin': require('../assets/fonts/Raleway/static/Raleway-Thin.ttf'),
          'Raleway-ThinItalic': require('../assets/fonts/Raleway/static/Raleway-ThinItalic.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
