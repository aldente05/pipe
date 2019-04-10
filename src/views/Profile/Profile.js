/**
 * Created by f.putra on 2019-04-03.
 */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Container, Content, Icon} from 'native-base'
import styles from './../../utils/Style'

const {width, height} = Dimensions.get('window')

class Home extends React.Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <View
                style={[styles.xxlarge, {
                    width: width * 0.09,
                    height: height * 0.055,
                    borderRadius: 15,
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignContent: 'center',
                    borderColor: tintColor,
                    backgroundColor: tintColor
                }]}>
                <Icon name={'person'} style={{alignSelf: 'center'}}/>
            </View>
        ),
    };

    constructor(props) {
        super(props)
        this.state = {
            active: false,
            selected: undefined
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Text>
                            PROFILE
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }

}

export default Home;
