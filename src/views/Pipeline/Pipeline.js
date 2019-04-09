/**
 * Created by f.putra on 2019-04-03.
 */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Body, Container, Fab, Header, Icon, Picker, Right, Tab, Tabs} from 'native-base'
import styles from '../../utils/Style'

const {width, height} = Dimensions.get('window')

const FirstRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#ff4081'}]}/>
);
const SecondRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#673ab7'}]}/>
);

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

    onValueChange(value) {
        this.setState({
            selected: value
        });
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
                <Tabs onScroll={(index) => this.onChangeIndex(index)}
                >
                    <Tab heading={routes}
                         tabStyle={{backgroundColor: "#bdbdbd"}}
                         activeTabStyle={{backgroundColor: "#bdbdbd"}}
                         textStyle={{color:'#212121'}}>
                        <View style={{backgroundColor: "#bdbdbd", padding: 15}}>
                            <Text>Lead In</Text>
                            <Text>12.000 - 3 Deals</Text>
                        </View>
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
                                <Text>Honda</Text>
                                <Text>12.000 - vicky</Text>
                            </View>
                            <View>
                                <Icon name={'warning'} style={{color: '#ffee58', fontSize: 20}}/>
                            </View>
                        </View>
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
                    onPress={() => this.setState({active: !this.state.active})}>
                    <Icon name="add"/>
                </Fab>
            </Container>
        );
    }
}

export default Home;
