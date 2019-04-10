/**
 * Created by f.putra on 27/11/18.
 */
import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {Container, Icon} from 'native-base'
import styles from './../../utils/Style'

const {width, height} = Dimensions.get('window')

class Home extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <View
                style={[styles.xxlarge, {
                    width : width*0.09,
                    height : height*0.055,
                    borderRadius: 15,
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignContent: 'center',
                    borderColor: tintColor,
                    backgroundColor : tintColor
                }]}>
                <Icon name={'home'} style={{alignSelf: 'center'}}/>
            </View>
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
                <ScrollView stickyHeaderIndices={[1]}>
                        <View style={{height : height *0.5, backgroundColor : 'red'}}>
                            <Text>
                                HOME
                            </Text>
                        </View>
                    <ScrollView>
                        <View style={{height : height *0.1, backgroundColor : '#7cb342'}}>
                            <Text>
                                INNER
                            </Text>
                        </View>
                    </ScrollView>

                    <ScrollView>
                        <View style={{height : height *0.2, backgroundColor : 'yellow'}}>
                            <Text>
                                INNER
                            </Text>
                        </View>
                        <View style={{height : height *1, backgroundColor : 'blue'}}>
                            <Text>
                                INNER
                            </Text>
                        </View>
                        <View style={{height : height *1, backgroundColor : 'purple'}}>
                            <Text>
                                INNER
                            </Text>
                        </View>
                    </ScrollView>
                </ScrollView>

            </Container>
        );
    }

}

export default Home;
