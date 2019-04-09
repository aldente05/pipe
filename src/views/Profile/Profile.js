/**
 * Created by f.putra on 2019-04-03.
 */
import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {Body, Button, Container, Content, Fab, Header, Icon, Picker, Right} from 'native-base'

const {width, height} = Dimensions.get('window')

class Home extends React.Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'person'}/>
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
