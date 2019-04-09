/**
 * Created by f.putra on 2019-04-03.
 */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Button, Container, Content, Fab, Icon} from 'native-base'

const {width, height} = Dimensions.get('window')

class Home extends React.Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'more'}/>
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
                        <Text>MENU</Text>
                    </View>
                </Content>
            </Container>
        );
    }

}

export default Home;
