/**
 * Created by f.putra on 5/4/17.
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {View, ViewPropTypes} from "react-native";

export default class Divider extends Component {

    static propTypes = {
        inset: PropTypes.bool,
        style: ViewPropTypes.style
    };

    static defaultProps = {
        inset: false,
        theme: 'light'
    };

    render() {
        const { inset, theme, style } = this.props;

        return (
            <View
                style={[
                    styles.divider,
                    inset && { marginLeft: 72 }, {
                        backgroundColor: theme === 'light' ? 'rgba(0,0,0,.12)' : 'rgba(255,255,255,.12)'
                    },
                    style
                ]}
            />
        );
    }
}

const styles = {
    divider: {
        height: 1
    }
};