/**
 * Created by f.putra on 2019-04-09.
 */
import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {Body, Container, Content, Header, Icon, Left, Right, Tab, Tabs} from 'native-base'
import styles from '../../utils/Style'

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

    async onSave() {

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
                <Header style={styles.subHeader}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{left: 10}}>
                            <Icon name="arrow-back" style={[styles.xxlarge, {color: '#212121'}]}/>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={this.onSave} style={{right: 10}}>
                            <Icon name="create" style={[styles.xxlarge, {color: '#212121'}]}/>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
                        <View style={{padding: 15}}>
                            <Text>Name Deal</Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', left: 50}}>
                            <Icon name="arrow-back" style={[styles.xxlarge, {color: '#212121'}]}/>
                            <Text style={{left: 15}}>Name Organisation</Text>
                        </View>

                        <View style={{backgroundColor: '#c8e6c9', height: 30, padding: 5, marginTop: 10}}>
                            <Text style={{left: width / 10}}>SLIDER</Text>
                        </View>

                        <View style={{flex: 0.1, padding: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text style={[styles.large]}>$0</Text>
                            </View>

                            <View style={{flex: 0.3, flexDirection: 'row', right: 50}}>
                                <TouchableOpacity style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#43a047',
                                    width : 60,
                                    marginRight : 5
                                }}>
                                    <Text style={{alignSelf : 'center', color: '#f5f5f5'}}>WON</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#f44336',
                                    width : 60,
                                    marginLeft : 5
                                }}>
                                    <Text style={{alignSelf : 'center', color: '#f5f5f5'}}>LOST</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Tabs onScroll={(index) => this.setState({index})}>
                            <Tab heading={'TIMELINE'}
                                 tabStyle={{backgroundColor: "#bdbdbd"}}
                                 activeTabStyle={{backgroundColor: "#bdbdbd"}}
                                 textStyle={{color: '#212121'}}>
                                <TouchableOpacity onPress={this.onSave.bind(this)}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        backgroundColor: "#fafafa",
                                        padding: 15,
                                        borderRadius: 4,
                                        borderWidth: 0.5,
                                        borderColor: '#d6d7da'
                                    }}>
                                        <View>
                                            <Text>PT ABC deal</Text>
                                            <Text>12.000 - PT ABC</Text>
                                        </View>
                                        <View>
                                            <Icon name={'warning'} style={{color: '#ffee58', fontSize: 20}}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </Tab>
                            <Tab heading={'DETAILS'}
                                 tabStyle={{backgroundColor: "#bdbdbd"}}
                                 activeTabStyle={{backgroundColor: "#bdbdbd"}}
                                 textStyle={{color: '#212121'}}>
                            </Tab>
                        </Tabs>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Home;
