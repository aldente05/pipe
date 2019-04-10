/**
 * Created by f.putra on 4/16/17.
 */

import {Dimensions, PixelRatio, Platform, StyleSheet} from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
    }
}

export function paddingHome() {
    if (Platform.OS === 'ios') {
        return 20
    } else {
        return 0
    }
}

const metric = {
    containerWidth: SCREEN_WIDTH - 30,
    switchWidth: SCREEN_WIDTH / 5
}

const style = StyleSheet.create({
    mini: {
        fontSize: normalize(10),
    },
    small: {
        fontSize: normalize(13),
    },
    medium: {
        fontSize: normalize(15),
    },
    large: {
        fontSize: normalize(18),
    },
    xlarge: {
        fontSize: normalize(22),
    },
    xxlarge: {
        fontSize: normalize(24),
    },
    xxxlarge: {
        fontSize: normalize(26),
    },
    container: {
        backgroundColor: '#f5f5f5'
    },
    containerSwitch: {
        width: SCREEN_WIDTH,
        height: 35,
        flexDirection: 'row',
        backgroundColor: '#c8e6c9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#616161',
    },
    subHeader: {
        backgroundColor: '#f5f5f5',
    },
    iconWhite: {
        color: '#f5f5f5',
    },
    scene: {
        flex: 1,
    },
    switcher: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#f5f5f5',
        borderRadius: 28,
        height: 33,
        alignItems: 'center',
        justifyContent: 'center',
        width: metric.switchWidth,
        elevation: 4,
        shadowOpacity: 0.31,
        shadowRadius: 10,
        shadowColor: '#616161'
    },
    buttonStyle: {
        flex: 1,
        width: metric.containerWidth / 5,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default style;
