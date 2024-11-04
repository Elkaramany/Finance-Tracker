import React from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';
import { colors, fontSizes, fontWeights, lineHeights } from '@/constants';

interface Props {
    value: string | undefined;
    color?: string;
    style?: TextStyle | ViewStyle | Array<ViewStyle | TextStyle> | Array<TextStyle | undefined>;
    small?: boolean;
    caption?: boolean;
    button?: boolean;
    body?: boolean;
    title?: boolean;
    h3?: boolean;
    h2?: boolean;
    h1?: boolean;
    mega?: boolean;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean
    tall?: boolean;
    giant?: boolean;
    customFontSize?: number;
    customLineHeight?: number;
    underLine?: boolean;
    centered?: boolean;
    testID?: string
}

const TextComponent: React.FC<Props> = ({
    value,
    color,
    style,
    small,
    caption,
    button,
    body,
    title,
    h3,
    h2,
    h1,
    mega,
    primary,
    secondary,
    tertiary,
    tall,
    giant,
    customFontSize,
    customLineHeight,
    underLine,
    centered,
    testID,
    ...props
}) => {
    const stylesArray: Array<TextStyle | undefined> = [
        {
            fontSize: fontSizes.body, color: color || colors.text.primary,
            fontFamily: fontWeights.regular, lineHeight: lineHeights.regular,
        },
    ];

    if (color) stylesArray.push({ color });

    if (small) stylesArray.push({ fontSize: fontSizes.small });
    if (caption) stylesArray.push({ fontSize: fontSizes.caption });
    if (button) stylesArray.push({ fontSize: fontSizes.button });
    if (body) stylesArray.push({ fontSize: fontSizes.body });
    if (title) stylesArray.push({ fontSize: fontSizes.title });
    if (h3) stylesArray.push({ fontSize: fontSizes.h3, fontWeight: 'bold' });
    if (h2) stylesArray.push({ fontSize: fontSizes.h2, fontWeight: 'bold' });
    if (h1) stylesArray.push({ fontSize: fontSizes.h1, fontWeight: 'bold' });
    if (mega) stylesArray.push({ fontSize: fontSizes.mega });

    if (primary) stylesArray.push({ color: colors.text.primary });
    if (secondary) stylesArray.push({ color: colors.text.secondary });
    if (tertiary) stylesArray.push({ color: colors.text.tertiary });


    if (tall) stylesArray.push({ lineHeight: lineHeights.tall })
    if (giant) stylesArray.push({ lineHeight: lineHeights.giant })


    if (customFontSize) stylesArray.push({ fontSize: customFontSize });
    if (customLineHeight) stylesArray.push({ lineHeight: customLineHeight });

    if (underLine) stylesArray.push({ textDecorationLine: 'underline' })
    if (centered) stylesArray.push({ textAlign: 'center' })
    return (
        <Text {...props} style={[...stylesArray, style]} testID={testID}>
            {value}
        </Text>
    );
};

export default TextComponent;