/**
 * Created by f.putra on 2019-04-10.
 */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './../utils/Style';
import PropTypes from 'prop-types';
const getIcon = (type, active) => {
    let icn;
    switch (type) {
        case 'first':
            icn = active
                ? "A"
                : "A1";
            break;
        case 'second':
            icn = active
                ? "B"
                : "B1";
            break;
        case 'third':
            icn = active
                ? "C"
                : "C1";
            break;
        case 'fourth':
            icn = active
                ? "D"
                : "D1";
            break;
        case 'fifth':
            icn = active
                ? "E"
                : "E1";
            break;
    }
    return icn;
};
const ButtonSwitch = props => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.buttonStyle}
            >
                <Text>
                    {getIcon(props.type, props.active)}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
ButtonSwitch.propTypes = {
    type: PropTypes.string,
    active: PropTypes.bool,
    onPress: PropTypes.func
};
ButtonSwitch.defaultProps = {
    active: false
};
export default ButtonSwitch;
