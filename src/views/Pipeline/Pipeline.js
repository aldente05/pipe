/**
 * Created by f.putra on 2019-04-03.
 */
import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {Body, Container, Content, Fab, Header, Icon, Picker, Right, Tab, Tabs} from 'native-base'
import styles from '../../utils/Style'

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
                <Icon name={'logo-usd'} style={{alignSelf: 'center'}}/>
            </View>
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

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    addDeal(){
        this.props.navigation.navigate('Create')
    }

    onChangeIndex(index) {
        switch (index) {
            case 0:
                this.setState({
                    index: index,
                    routes: 'Lead In'
                })
                break;
            case 1:
                this.setState({
                    index: index,
                    routes: 'Contact Made'
                })
                break;
            case 2:
                this.setState({
                    index: index,
                    routes: 'Demo Scheduled'
                })
                break;
            case 3:
                this.setState({
                    index: index,
                    routes: 'Proposal Made'
                })
                break;
            case 4:
                this.setState({
                    index: index,
                    routes: 'Negotiations Started'
                })
                break;
            default:
                break;
        }

    }

    async detailDeal(){
        this.props.navigation.navigate('DetailDeal')
    }

    render() {
        const {routes} = this.state
        return (
            <Container style={styles.container}>
                <Header style={styles.header} hasTabs>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" style={{color: '#fafafa'}}/>}
                        placeholder="Select your Project"
                        placeholderStyle={{color: "#bfc6ea"}}
                        placeholderIconColor="#bfc6ea"
                        style={{width: undefined, color: "#fafafa"}}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                    >
                        <Picker.Item label="Pipeline 1" value="key0"/>
                        <Picker.Item label="Pipeline 2" value="key1"/>
                        <Picker.Item label="Pipeline 3" value="key2"/>
                        <Picker.Item label="Pipeline 4" value="key3"/>
                        <Picker.Item label="Pipeline 5" value="key4"/>
                    </Picker>
                    <Body>
                    </Body>
                    <Right>
                        <Icon name={'funnel'} style={{paddingRight: 20, color: '#fafafa'}}/>
                    </Right>
                </Header>
                <Tabs onScroll={(index) => this.onChangeIndex(index)}>
                    <Tab heading={routes}
                         tabStyle={{backgroundColor: "#bdbdbd"}}
                         activeTabStyle={{backgroundColor: "#bdbdbd"}}
                         textStyle={{color:'#212121'}}>
                        <Content>
                            <TouchableOpacity onPress={this.detailDeal.bind(this)}>
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
                                    <Text>Yamaha</Text>
                                    <Text>12.000 - Vicky</Text>
                                </View>
                                <View>
                                    <Icon name={'warning'} style={{color: '#ffee58', fontSize: 20}}/>
                                </View>
                            </View>
                        </Content>
                    </Tab>
                    <Tab heading={''} style={{color: 'transparent'}}
                         tabStyle={{backgroundColor: "#bdbdbd"}}
                         activeTabStyle={{backgroundColor: "#bdbdbd"}}>
                        {/*<Tab2 />*/}
                    </Tab>
                    <Tab heading={'-'} textStyle={{color: 'transparent'}} activeTextStyle={{color: 'transparent'}} tabStyle={{backgroundColor: "#bdbdbd"}}
                         activeTabStyle={{backgroundColor: "#bdbdbd"}}>
                        {/*<Tab3 />*/}
                    </Tab>
                    <Tab heading={'='} textStyle={{color: 'transparent'}} activeTextStyle={{color: 'transparent'}} tabStyle={{backgroundColor: "#bdbdbd"}}
                         activeTabStyle={{backgroundColor: "#bdbdbd"}}>
                        {/*<Tab4 />*/}
                    </Tab>
                    <Tab heading={'+'} textStyle={{color: 'transparent'}} activeTextStyle={{color: 'transparent'}} tabStyle={{backgroundColor: "#bdbdbd"}}
                         activeTabStyle={{backgroundColor: "#bdbdbd"}}>
                        {/*<Tab5 />*/}
                    </Tab>
                </Tabs>
                <Fab
                    style={{backgroundColor: '#34A34F'}}
                    position="bottomRight"
                    onPress={() => this.addDeal()}>
                    <Icon name="add"/>
                </Fab>
            </Container>
        );
    }
}

export default Home;
