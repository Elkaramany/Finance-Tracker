import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
export const WIDTH = width;
export const HEIGHT = height;
export const DEVICE_TYPE = Platform.OS;
export const IOS = Platform.OS === 'ios';
export const ANDROID = Platform.OS === 'android';

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export const scale = (size: number) => (width / BASE_WIDTH) * size;
export const verticalScale = (size: number) => (height / BASE_HEIGHT) * size;
export const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor;
export const moderateScaleVertical = (size: number, factor = 0.5) =>
    size + (verticalScale(size) - size) * factor;

export const textScale = (percent: number) => {
    const screenHeight = Dimensions.get('window').height;
    const ratio = screenHeight / Dimensions.get('window').width;
    const deviceHeight = BASE_WIDTH ? screenHeight * (ratio > 1.8 ? 0.126 : 0.15) : Platform.OS === 'android' ? screenHeight - (StatusBar.currentHeight || 0) : screenHeight;
    return Math.round((percent * deviceHeight) / 100);
};
