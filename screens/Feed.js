import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Accueil extends Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{ flex: 1, backgroundColor: '#22427CFF' }}>
        {/* <ImageBackground
          source={require('../assets/open.jpg')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          imageStyle={{ opacity: 0.2 }}
        /> */}
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 4, flexDirection: 'row' }}>
            <View style={{ flex: 5.8, justifyContent: 'center' }}>
              {/* <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ flex: 0.5, resizeMode: 'center', alignSelf: 'center' }}
                source={require('../assets/cato_logo.jpg')}
              /> */}
            </View>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            {/* <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>

            </View> */}
          </View>
          {/* <View style={{ flex: 2, flexDirection: 'row' }}>
            <View style={{ flex: 5.8, justifyContent: 'center' }}>
              <Image
                style={{ flex: 1, resizeMode: 'center', alignSelf: 'center' }}
                source={require('../assets/qr.png')}
              />
            </View>
          </View> */}
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 4,
              flexDirection: 'row',
              justifyContent: 'center',
              // backgroundColor: 'green',
            }}>
            <View style={{ flex: 1 }}>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 1,
                  borderColor: '#FFFFFF',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.1,
                  shadowRadius: 10.32,
                  elevation: 5,
                }}>
                <TouchableOpacity
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{ justifyContent: 'center', borderColor: '#FFFFFF' }}
                  onPress={() => this.props.navigation.navigate()}>
                  <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      backgroundColor: 'red',
                      width: '100%',
                      height: '100%',
                      borderRadius: 10,
                    }}>
                    <Text
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        color: '#000000',
                        fontSize: 23,
                        textAlign: 'center',
                      }}>
                      Actual
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.1,
                  shadowRadius: 10.32,
                  elevation: 5,
                }}>
                <TouchableOpacity
                  style={{ justifyContent: 'center', borderColor: 'blue' }}
                  onPress={() => this.props.navigation.navigate()}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#000000',
                      fontSize: 23,
                      textAlign: 'center',
                    }}>
                    Actualités
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.1,
                  shadowRadius: 10.32,
                  elevation: 5,
                }}>
                <TouchableOpacity
                  style={{ justifyContent: 'center', borderColor: 'blue' }}
                  onPress={() => this.props.navigation.navigate()}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#000000',
                      fontFamily: 'Roboto',
                      fontSize: 23,
                      textAlign: 'center',
                    }}>
                    Jeux
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.1,
                  shadowRadius: 10.32,
                  elevation: 5,
                }}>
                <TouchableOpacity
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{ justifyContent: 'center', borderColor: 'blue' }}
                  onPress={() => this.props.navigation.navigate()}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#000000',
                      fontSize: 23,
                      textAlign: 'center',
                    }}>
                    Actualités
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Accueil;
