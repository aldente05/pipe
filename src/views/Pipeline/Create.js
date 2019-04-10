/**
 * Created by f.putra on 2019-04-09.
 */
import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {Body, Container, Content, Form, Header, Icon, Input, Item, Label, Left, Picker, Right} from 'native-base'
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
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{left: 10}}>
                            <Icon name="close" style={[styles.xxlarge, {color: '#fafafa'}]}/>
                        </TouchableOpacity>
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
                    <View style={{height: height, padding: 15}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Icon name="person" style={[styles.xxlarge, {color: '#2196f3', left: 10}]}/>
                            <TouchableOpacity onPress={this.onSave} style={{left: width / 9}}>
                                <Text style={[styles.large, {color: '#2196f3'}]}>LINK A PERSON</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Icon name="business" style={[styles.xxlarge, {color: '#2196f3', left: 10}]}/>
                            <TouchableOpacity onPress={this.onSave} style={{left: width / 9}}>
                                <Text style={[styles.large, {color: '#2196f3'}]}>LINK AN ORGANIZATION</Text>
                            </TouchableOpacity>
                        </View>

                        <Divider style={{marginBottom: 15}}/>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Icon name="logo-usd" style={[styles.xxlarge, {color: '#212121', left: 10}]}/>
                            <Form style={{top: -20}}>
                                <Item floatingLabel
                                      style={{backgroundColor: '#eeeeee', left: width / 9, width: width / 1.4}}>
                                    <Label>DEAL</Label>
                                    <Input/>
                                </Item>
                            </Form>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Form style={{top: -20}}>
                                <Item floatingLabel
                                      style={{backgroundColor: '#eeeeee', left: width / 7, width: width / 1.4}}>
                                    <Label>DEAL VALUE</Label>
                                    <Input/>
                                </Item>
                            </Form>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" style={{color: '#212121'}}/>}
                                placeholder="Currency"
                                placeholderStyle={{color: "#212121"}}
                                placeholderIconColor="#bfc6ea"
                                style={{backgroundColor: '#eeeeee', left: width / 5.5, width: width / 1.4}}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Currency" value="key0"/>
                                <Picker.Item label="Pipeline 2" value="key1"/>
                                <Picker.Item label="Pipeline 3" value="key2"/>
                                <Picker.Item label="Pipeline 4" value="key3"/>
                                <Picker.Item label="Pipeline 5" value="key4"/>
                            </Picker>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Icon name="list" style={[styles.xxlarge, {color: '#212121', left: 10}]}/>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" style={{color: '#212121'}}/>}
                                placeholder="Pipeline"
                                placeholderStyle={{color: "#212121"}}
                                placeholderIconColor="#bfc6ea"
                                style={{backgroundColor: '#eeeeee', left: width / 7, width: 100}}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Pipeline 1" value="key0"/>
                                <Picker.Item label="Pipeline 2" value="key1"/>
                                <Picker.Item label="Pipeline 3" value="key2"/>
                                <Picker.Item label="Pipeline 4" value="key3"/>
                                <Picker.Item label="Pipeline 5" value="key4"/>
                            </Picker>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" style={{color: '#212121'}}/>}
                                placeholder="Stage"
                                placeholderStyle={{color: "#212121"}}
                                placeholderIconColor="#bfc6ea"
                                style={{backgroundColor: '#eeeeee', left: width / 5.5, width: 100}}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Lead In" value="key0"/>
                                <Picker.Item label="Contact Made" value="key1"/>
                                <Picker.Item label="Demo Scheduled" value="key2"/>
                                <Picker.Item label="Proposal Made" value="key3"/>
                                <Picker.Item label="Negotiations Started" value="key4"/>
                            </Picker>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Icon name="arrow-forward" style={[styles.xxlarge, {color: '#212121', left: 10}]}/>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" style={{color: '#212121'}}/>}
                                placeholder="Assign To"
                                placeholderStyle={{color: "#212121"}}
                                placeholderIconColor="#bfc6ea"
                                style={{backgroundColor: '#eeeeee', left: width / 7, width: 100}}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Assign To" value="key0"/>
                                <Picker.Item label="Contact Made" value="key1"/>
                                <Picker.Item label="Demo Scheduled" value="key2"/>
                                <Picker.Item label="Proposal Made" value="key3"/>
                                <Picker.Item label="Negotiations Started" value="key4"/>
                            </Picker>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" style={{color: '#212121'}}/>}
                                placeholder="Visible To"
                                placeholderStyle={{color: "#212121"}}
                                placeholderIconColor="#bfc6ea"
                                style={{backgroundColor: '#eeeeee', left: width / 5.5, width: 100}}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Visible To" value="key0"/>
                                <Picker.Item label="Contact Made" value="key1"/>
                                <Picker.Item label="Demo Scheduled" value="key2"/>
                                <Picker.Item label="Proposal Made" value="key3"/>
                                <Picker.Item label="Negotiations Started" value="key4"/>
                            </Picker>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Home;
