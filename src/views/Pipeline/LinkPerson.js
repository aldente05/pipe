/**
 * Created by f.putra on 2019-04-09.
 */
import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {Body, Container, Content, Header, Form, Label, Input, Item, Icon, Left, Right, Picker} from 'native-base'
import styles from '../../utils/Style'
import Divider from '../../utils/Divider'

const {width, height} = Dimensions.get('window')

class Home extends React.Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'logo-usd'}/>
        ),
    };

    constructor(props) {
        super(props)
        this.state = {
            active: false,
            selected: undefined,
            data: [
                {
                    title: "ABC",
                    price: 12000
                }
            ],
            index: 0,
            routes: 'Lead In',
        };
    }

    onSave() {

    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        const {routes} = this.state
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Icon name="arrow-back" style={[styles.xxlarge, {color: '#fafafa', left: 10}]}/>
                    </Left>
                    <Body>
                        <Text style={[styles.xlarge, {color: '#fafafa'}]}>Add Deal</Text>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={this.onSave} style={{right: 10}}>
                            <Text style={[styles.large, {color: '#fafafa'}]}>SAVE</Text>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View style={{height: height, padding : 15}}>
                        <Text>List Person</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Home;
