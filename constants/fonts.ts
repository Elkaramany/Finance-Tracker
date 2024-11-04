import { textScale, verticalScale } from "./dimensions";
export const lineHeights = {
    regular: verticalScale(17.64),
    tall: verticalScale(27.6),
    giant: verticalScale(32.34),
}

export const fontWeights = {
    bold: 'DinNextBold',
    regular: 'DinNextRegular',
    medium: 'DinNextMedium',
    light: 'DinNextLight',
    en: "SpaceMono-Regular",
    lyonBold: "LyonArabicBold",
    lyonSemiBold: "LyonArabicSemiBold",
    lyonRegular: "LyonArabicRegular"
};


export const fontSizes = {
    small: textScale(10),
    caption: textScale(12),
    button: textScale(14),
    body: textScale(16),
    title: textScale(18),
    h3: textScale(20),
    h2: textScale(22),
    h1: textScale(24),
    mega: textScale(26),
};