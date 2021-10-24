import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

import { Header } from "react-native-elements";
import React from "react";

export interface CompostComponentProps {
    navigation: any
    route: any
}
 
const CompostComponent: React.FC<CompostComponentProps> = ({navigation}) => {
    return (
        <>
            <Header
            placement="left"
                centerComponent={{ text: 'Compost', style: { color: '#fff', fontSize: 19, fontWeight: "700" } }}
                rightComponent={{ icon: 'leaf', color: '#fff', size: 30, type: 'font-awesome' }}
                backgroundImage={require('../../assets/images/compost.png')}
                statusBarProps={{ translucent: true, backgroundColor: "transparent"}}
                containerStyle={{ height: 315, alignItems: 'flex-end' }} />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>A beginner’s guide to composting</Text>
                    <Text style={styles.subTitle}>Want to turn your kitchen and garden waste into ‘black gold’? Here’s how to start composting and why you’d want to.</Text>
                    <Text style={styles.text}>Do you like the idea of composting but haven’t tried it because it seems too difficult?{"\n"}{"\n"}Put simply, composting breaks down organic matter, which is anything that was once living. This means you are recycling vital nutrients so you can use them to improve the quality of your soil.{"\n"}{"\n"}Up to half of the waste thrown out by the average Australian household is organic material.{"\n"}{"\n"}Of course you can put your organic waste in your green council bin to be collected and turned into mulch and other products. Or you can set up your own garden composting system and make your plants healthier at no extra cost.{"\n"}{"\n"}Composting is easy and knowing how to set up a garden composting system can take your gardening effort to the next level.{"\n"}{"\n"}Click down here for some simple tips on how you can start composting and turn your kitchen and garden waste into what some gardeners call ‘black gold’.</Text>
                </View>
                <View style={styles.button}>
                    <Button title="Five step guide" onPress={() => navigation.navigate('Compost-guide')} />
                </View>
            </ScrollView>            
        </>
    );
}
 
export default CompostComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 16.5,
        marginVertical: 22,
        overflow: 'scroll',
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        paddingBottom: 22,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 21,
        fontWeight: '700',
        paddingBottom: 11,
        textAlign: 'left',
    },
    text: {
        fontSize: 19,
        textAlign: 'justify',        
    },
    button: {
        marginVertical: 22,
    },
});