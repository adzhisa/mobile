import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'fredoka': require('./src/font/fredoka_one_regular.ttf'),
  });
};
