/**
 * Created by f.putra on 27/11/18.
 */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Body, Button, Container, Content, Fab, Header, Icon, Picker, Right} from 'native-base'
import styles from './../../utils/Style'

const {width, height} = Dimensions.get('window')

class Home extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'home'} color={tintColor}/>
        ),
    };

    constructor(props) {
        super(props)
        this.state = {
            active: false,
            selected: undefined,

        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View>
                        <Text>
                            HOME
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }

}

export default Home;
